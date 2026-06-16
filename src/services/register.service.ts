import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";
import { CadastroInput } from "../schemas/cadastro.schema";

// Tipos de usuários que podem ser registrados
type UserType = "ALUNO" | "PROFESSOR";

// Normaliza o CPF removendo pontos e traço
function normalizeCPF(cpf: string): string {
  return cpf.replace(/[.\-]/g, "");
}

// Caso o aluno não possua matrícula
// A função vai gerar uma
function createSCode(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `${year}${random}`;
}

// Verifica os códigos gerados para
// Matrícula e SIAP
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



// Cria Usuário
export async function createUser(data: CadastroInput) {
  // Normaliza o CPF fornecido pelo usuário
  // removendo os pontos e traço
  const cpfNormalizado = normalizeCPF(data.cpf);

  // Busca os dados dos usuários de acordo com a entrada
  const email = await prisma.usuario.findUnique({
    where: { emailInstitucional: data.email },
  });
  const cpf = await prisma.identidade.findUnique({
    where: { cpf: cpfNormalizado },
  });
  const rg = await prisma.identidade.findUnique({
    where: { rg: data.rg },
  });

  // Verifica se os dados buscados no banco de dados existem
  // Se existem, retorna um AppError
  if (email) throw new AppError("Email já cadastrado", 409);
  if (cpf) throw new AppError("CPF já cadastrado", 409);
  if (rg) throw new AppError("RG já cadastrado", 409);

  // Criptografa a senha do usuário
  const hashPassword = await bcrypt.hash(data.senha, 10);

  // Inicia uma transação para criação de
  // Aluno e Professor
  return await prisma.$transaction(async (tx) => {
    // Insere os dados na tabela identidade
    const identidade = await tx.identidade.create({
      data: {
        rg: data.rg,
        cpf: cpfNormalizado,
        orgaoEmissor: data.orgaoEmissor,
        estado: data.estado.toUpperCase(),
        dataExpedicao: new Date(data.dataEmissao),
      },
    });

    // Procura e valida o cargo inserido no registro
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

    // Insere novo usuário ao sistema
    const usuario = await tx.usuario.create({
  data: {
    nome: data.nome,
    nomeSocial: data.nomeSocial ?? null,
    dataNasc: new Date(data.dataNasc),
    naturalidade: data.naturalidade,
    emailInstitucional: data.email,
    emailSecundario: data.email,
    senha: hashPassword,
    nomeMae: data.nomeMae,
    nomePai: data.nomePai,
    sexo: data.sexo,
    raca: data.raca,
    fkIdentidade: identidade.id,
    fkEndereco: data.fkEndereco,
    cargos: { connect: { id: cargo.id } },
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

      return { usuario, aluno, identidade };
    } else if (data.cargo === "PROFESSOR") {
      const siape = data.siape ?? (await verifySCode(data, "PROFESSOR"));
      const professor = await tx.professor.create({
        data: {
          siape,
          fkUsuario: usuario.id,
        },
      });

      return { usuario, professor, identidade };
    }
  });
}
