import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";
import { CadastroInput } from "../schemas/cadastro.schema";

type UserType = "ALUNO" | "PROFESSOR";

function normalizeCPF(cpf: string): string {
  return cpf.replace(/[.\-]/g, "");
}

function createSCode(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `${year}${random}`;
}

async function verifySCode(
  data: CadastroInput,
  userType: UserType,
): Promise<string> {
  if (userType === "ALUNO") {
    let matricula = data.matricula ?? createSCode();
    let verifyMatricula = await prisma.aluno.findUnique({
      where: { matricula },
    });
    while (verifyMatricula) {
      matricula = createSCode();
      verifyMatricula = await prisma.aluno.findUnique({
        where: { matricula },
      });
    }
    return matricula;
  } else if (userType === "PROFESSOR") {
    let siape = data.siape ?? createSCode();
    let verifySiap = await prisma.professor.findUnique({
      where: { siape },
    });
    while (verifySiap) {
      siape = createSCode();
      verifySiap = await prisma.professor.findUnique({
        where: { siape },
      });
    }
    return siape;
  }

  throw new Error(`Tipo de usuário inválido: ${userType}`);
}

export async function createUser(data: CadastroInput) {
  const cpfNormalizado = normalizeCPF(data.cpf);

  const email = await prisma.usuario.findUnique({
    where: { emailInstitucional: data.email },
  });
  const cpf = await prisma.identidade.findUnique({
    where: { cpf: cpfNormalizado },
  });
  const rg = await prisma.identidade.findUnique({
    where: { rg: data.rg },
  });

  if (email) throw new AppError("Email já cadastrado", 409);
  if (cpf) throw new AppError("CPF já cadastrado", 409);
  if (rg) throw new AppError("RG já cadastrado", 409);

  // Criptografa a senha do usuário
  const hashPassword = await bcrypt.hash(data.senha, 10);

  return await prisma.$transaction(async (tx) => {
    const identidade = await tx.identidade.create({
      data: {
        rg: data.rg,
        cpf: cpfNormalizado,
        orgaoEmissor: data.orgaoEmissor,
        estado: data.estado.toUpperCase(),
        dataExpedicao: new Date(data.dataEmissao),
      },
    });

    const cargo = await tx.cargo.findFirst({
      where: { cargo: data.cargo },
    });
    if (!cargo) {
      throw new AppError(`Cargo ${data.cargo} não encontrado no sistema`, 500);
    }

    const endereco = await tx.endereco.findUnique({
      where: { id: data.fkEndereco },
    });

    if (!endereco) {
      throw new AppError(`Endereço ${data.fkEndereco} não encontrado`, 400);
    }

    const inputData = data as any;

    const usuario = await tx.usuario.create({
      data: {
        nome: data.nome,
        nomeSocial: data.nomeSocial ?? null,
        dataNasc: new Date(data.dataNasc),
        naturalidade: data.naturalidade,
        emailInstitucional: data.email,
        emailSecundario: inputData.emailSecundario ?? "",  
        senha: hashPassword,
        nomeMae: data.nomeMae,
        nomePai: data.nomePai ?? "",  
        sexo: data.sexo,
        raca: data.raca,
        identidade: { connect: { id: identidade.id } },  
        endereco: { connect: { id: Number(data.fkEndereco) } }, 
        cargos: { connect: { id: cargo.id } },
      },
    });

  // Título de eleitor
  const tituloEleitor = await tx.tituloEleitor.create({
    data: {
      numero: data.tituloNumero,
      zonaEleitoral: data.zonaEleitoral,
      secaoEleitoral: data.secaoEleitoral,
      UF: data.ufTitulo.toUpperCase(),
      fkUsuario: usuario.id,
    },
});

    // Verificação se o usuário é Aluno ou Professor
    if (data.cargo === "ALUNO") {
      const matricula = data.matricula ?? (await verifySCode(data, "ALUNO"));
      const aluno = await tx.aluno.create({
        data: {
          matricula,
          fkUsuario: usuario.id,
        },
      });

      return { usuario, aluno, identidade, tituloEleitor };
    } else if (data.cargo === "PROFESSOR") {
      const siape = data.siape ?? (await verifySCode(data, "PROFESSOR"));
      const professor = await tx.professor.create({
        data: {
          siape,
          fkUsuario: usuario.id,
        },
      });

      return { usuario, professor, identidade, tituloEleitor };
    }
  });
}