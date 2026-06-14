import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";

export async function criarInscricao(
  usuarioId: string,
  cursoId: string
) {

  // localizar aluno pelo usuário logado
  const aluno = await prisma.aluno.findFirst({
    where: {
      fkUsuario: usuarioId
    }
  });

  if (!aluno) {
    throw new AppError("Aluno não encontrado", 404);
  }

  // verificar curso
  const curso = await prisma.curso.findUnique({
    where: {
      id: cursoId
    }
  });

  if (!curso) {
    throw new AppError("Curso não encontrado", 404);
  }

  // verificar inscrição duplicada
  const inscricaoExistente =
    await prisma.inscricao.findFirst({
      where: {
        fkAluno: aluno.id,
        fkCurso: cursoId
      }
    });

  if (inscricaoExistente) {
    throw new AppError(
      "Aluno já inscrito nesse curso",
      400
    );
  }

  // contar vagas ocupadas
  const quantidadeInscricoes =
    await prisma.inscricao.count({
      where: {
        fkCurso: cursoId
      }
    });

  if (quantidadeInscricoes >= curso.vagas) {
    throw new AppError(
      "Não há vagas disponíveis",
      400
    );
  }

  // criar inscrição
  return prisma.inscricao.create({
    data: {
      fkAluno: aluno.id,
      fkCurso: cursoId
    }
  });

}