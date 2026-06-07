import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { generateToken } from "../utils/jwt";
import { AppError } from "../errors/AppError";
import { CadastroInput } from "../schemas/cadastro.schema";
import { LoginInput } from "../schemas/login.schema";
import { createUser } from "./register.service";

export async function cadastrarAluno(data: CadastroInput) {
  const aluno = await createUser(data);
  const token = generateToken(aluno!.usuario.id, aluno!.aluno!.id, ["ALUNO"]);

  return {
    token,
    usuario: {
      id: aluno!.usuario.id,
      nome: aluno!.usuario.nome,
      email: aluno!.usuario.email,
      matricula: aluno?.aluno!.matricula,
    },
  };
}

export async function cadastrarProfessor(data: CadastroInput) {
  const professor = await createUser(data);
  const token = generateToken(professor!.usuario.id, professor!.professor!.id, [
    "PROFESSOR",
  ]);

  return {
    token,
    usuario: {
      id: professor?.usuario.id,
      nome: professor?.usuario.nome,
      email: professor?.usuario.email,
      matricula: professor?.professor!.siap,
    },
  };
}

export async function login(data: LoginInput) {
  const usuario = await prisma.usuario.findUnique({
    where: { email: data.email },
    include: {
      alunos: true,
      professor: true,
      cargos: true,
    },
  });

  if (!usuario) {
    throw new AppError("Email ou senha inválidos", 401);
  }

  const senhaCorreta = await bcrypt.compare(data.senha, usuario.senha);
  if (!senhaCorreta) {
    throw new AppError("Email ou senha inválidos", 401);
  }

  const roleId: string | null =
    usuario.alunos?.id ?? usuario.professor?.id ?? null;
  const permissoes = usuario.cargos.map((c) => c.cargo);

  if (usuario.alunos && !permissoes.includes("ALUNO")) permissoes.push("ALUNO");
  if (usuario.professor && !permissoes.includes("PROFESSOR"))
    permissoes.push("PROFESSOR");

  const token = generateToken(usuario.id, roleId, permissoes);

  return {
    token,
    usuario: {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cargos: permissoes,
      alunoId: usuario.alunos?.id,
      professorId: usuario.professor?.id,
    },
  };
}
