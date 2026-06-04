import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";
import { CadastroInput } from "../schemas/cadastro.schema";

function normalizarCpf(cpf: string): string {
    return cpf.replace(/[.\-]/g, "");
}

function gerarMatricula(): string {
    const now = new Date();
    const year = now.getFullYear();
    const random = Math.floor(Math.random() * 100000)
        .toString()
        .padStart(5, "0");
    return `${year}${random}`;
}

export async function criarAluno(data: CadastroInput) {
    const cpfNormalizado = normalizarCpf(data.cpf);

    const [emailExistente, cpfExistente, rgExistente] = await Promise.all([
        prisma.usuario.findUnique({ where: {email: data.email } }),
        prisma.identidade.findUnique({ where: { cpf: cpfNormalizado } }),
        prisma.identidade.findUnique({ where: { rg: data.rg } })
    ]);

    if(emailExistente) throw new AppError("Email já cadastrado", 409);
    if(cpfExistente) throw new AppError("CPF já cadastrado", 409);
    if(rgExistente) throw new AppError("RG já cadastrado", 409);

    let matricula = data.matricula ?? gerarMatricula();
    let matriculaExistente = await prisma.aluno.findUnique({ where: {matricula} });
    while (matriculaExistente) {
        matricula = gerarMatricula();
        matriculaExistente = await prisma.aluno.findUnique({ where: {matricula} });
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    return await prisma.$transaction(async (tx) => {
        const identidade = await tx.identidade.create ({
            data: {
                rg: data.rg,
                cpf: cpfNormalizado,
                orgaoEmissor: data.orgaoEmissor,
                estado: data.estado.toUpperCase(),
                dataEmissao: new Date(data.dataEmissao)
            },
        });

        const usuario = await tx.usuario.create ({
            data: {
                nome: data.nome,
                nomeSocial: data.nomeSocial ?? null,
                dataNasc: new Date(data.dataNasc),
                naturalidade: data.naturalidade,
                email: data.email,
                senha: senhaHash,
                sexo: data.sexo,
                raca: data.raca,
                fkIdentidade: identidade.id
            },
        });

        const aluno = await tx.aluno.create ({
            data: {
                matricula,
                fkUsuario: usuario.id
            },
        });

        return { usuario, aluno, identidade };
    });
}