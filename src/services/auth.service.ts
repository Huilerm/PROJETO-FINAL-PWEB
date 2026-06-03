import bcrypt from "bcryptjs";
import prisma from "../lib/prisma.js";
import { generateToken } from "../utils/jwt.js";
import { AppError } from "../errors/AppError.js";
import type { CadastroInput } from "../schemas/cadastro.schema.js";
import type { LoginInput } from "../schemas/login.schema.js";

// Remove formatting from CPF: "123.456.789-00" → "12345678900"
function normalizeCpf(cpf: string): string {
  return cpf.replace(/[.\-]/g, "");
}

// Generate a student registration number based on timestamp
function gerarMatricula(): string {
  const now = new Date();
  const year = now.getFullYear();
  const random = Math.floor(Math.random() * 100000)
    .toString()
    .padStart(5, "0");
  return `${year}${random}`;
}

export async function cadastrarAluno(data: CadastroInput) {
  const cpfNormalizado = normalizeCpf(data.cpf);

  // Check if e-mail already exists
  const emailExistente = await prisma.usuario.findUnique({
    where: { email: data.email },
  });
  if (emailExistente) {
    throw new AppError("E-mail já cadastrado.", 409);
  }

  // Check if CPF already exists
  const cpfExistente = await prisma.identidade.findUnique({
    where: { cpf: cpfNormalizado },
  });
  if (cpfExistente) {
    throw new AppError("CPF já cadastrado.", 409);
  }

  // Check if RG already exists
  const rgExistente = await prisma.identidade.findUnique({
    where: { rg: data.rg },
  });
  if (rgExistente) {
    throw new AppError("RG já cadastrado.", 409);
  }

  const senhaHash = await bcrypt.hash(data.senha, 10);

  // Define a unique matricula
  let matricula = data.matricula ?? gerarMatricula();
  const matriculaExistente = await prisma.aluno.findUnique({
    where: { matricula },
  });
  if (matriculaExistente) {
    matricula = gerarMatricula();
  }

  // Create Identidade + Usuario + Aluno in one transaction
  const resultado = await prisma.$transaction(async (tx) => {
    const identidade = await tx.identidade.create({
      data: {
        rg: data.rg,
        cpf: cpfNormalizado,
        orgaoEmissor: data.orgaoEmissor,
        estado: data.estado.toUpperCase(),
        dataEmissao: new Date(data.dataEmissao),
      },
    });

    const usuario = await tx.usuario.create({
      data: {
        nome: data.nome,
        nomeSocial: data.nomeSocial,
        dataNasc: new Date(data.dataNasc),
        naturalidade: data.naturalidade,
        email: data.email,
        senha: senhaHash,
        sexo: data.sexo,
        raca: data.raca,
        cargos: ["ALUNO"],
        fkIdentidade: identidade.id,
      },
    });

    const aluno = await tx.aluno.create({
      data: {
        matricula,
        fkUsuario: usuario.id,
      },
    });

    return { usuario, aluno, identidade };
  });

  const token = generateToken(resultado.usuario.id, null, ["ALUNO"]);

  return {
    token,
    usuario: {
      id: resultado.usuario.id,
      nome: resultado.usuario.nome,
      email: resultado.usuario.email,
      cargos: resultado.usuario.cargos,
      matricula: resultado.aluno.matricula,
    },
  };
}

export async function login(data: LoginInput) {
  const usuario = await prisma.usuario.findUnique({
    where: { email: data.email },
    include: {
      alunos: true,
      professor: true,
    },
  });

  if (!usuario) {
    throw new AppError("E-mail ou senha inválidos.", 401);
  }

  const senhaCorreta = await bcrypt.compare(data.senha, usuario.senha);
  if (!senhaCorreta) {
    throw new AppError("E-mail ou senha inválidos.", 401);
  }

  // roleId: aluno id or professor id (null if admin/DEPPI only)
  const roleId = usuario.alunos?.id ?? usuario.professor?.id ?? null;

  const token = generateToken(usuario.id, roleId, usuario.cargos);

  return {
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cargos: usuario.cargos,
    },
  };
}
