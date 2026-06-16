import { prisma } from "../lib/prisma";
import { AppError } from "../errors/AppError";
import type { StatusInscricao } from "../../generated/prisma/client";

type AcaoInscricao = "APROVAR" | "REJEITAR" | "CANCELAR";

function descricaoPadrao(acao: AcaoInscricao, motivo?: string) {
  if (motivo?.trim()) return motivo.trim();

  switch (acao) {
    case "APROVAR":
      return "Inscrição aprovada";
    case "REJEITAR":
      return "Inscrição rejeitada";
    case "CANCELAR":
      return "Inscrição cancelada";
  }
}

export async function listarInscricoes(status?: StatusInscricao) {
  const where = status ? { status } : {};

  return prisma.inscricao.findMany({
    where,
    orderBy: { data: "desc" },
    include: {
      aluno: {
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              emailInstitucional: true,
            },
          },
        },
      },
      curso: {
        select: {
          id: true,
          nome: true,
          vagas: true,
        },
      },
    },
  });
}

export async function buscarInscricao(id: string) {
  const inscricao = await prisma.inscricao.findUnique({
    where: { id },
    include: {
      aluno: {
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              emailInstitucional: true,
            },
          },
        },
      },
      curso: {
        select: {
          id: true,
          nome: true,
          vagas: true,
        },
      },
      rendaFamiliar: true,
      historico: {
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              emailInstitucional: true,
            },
          },
        },
        orderBy: { dataModificacao: "desc" },
      },
    },
  });

  if (!inscricao) throw new AppError("Inscrição não encontrada", 404);
  return inscricao;
}

export async function listarHistorico(id: string) {
  const inscricao = await prisma.inscricao.findUnique({
    where: { id },
    select: { id: true },
  });

  if (!inscricao) throw new AppError("Inscrição não encontrada", 404);

  return prisma.historico.findMany({
    where: { fkInscricao: id },
    orderBy: { dataModificacao: "desc" },
    include: {
      usuario: {
        select: {
          id: true,
          nome: true,
          emailInstitucional: true,
        },
      },
    },
  });
}

async function mudarStatusInscricao(
  id: string,
  usuarioResponsavelId: string,
  acao: AcaoInscricao,
  motivo?: string,
) {
  return prisma.$transaction(async (tx) => {
    const inscricao = await tx.inscricao.findUnique({
      where: { id },
      include: {
        curso: true,
        aluno: true,
      },
    });

    if (!inscricao) {
      throw new AppError("Inscrição não encontrada", 404);
    }

    const responsavel = await tx.usuario.findUnique({
      where: { id: usuarioResponsavelId },
      select: { id: true, nome: true },
    });

    if (!responsavel) {
      throw new AppError("Usuário responsável não encontrado", 404);
    }

    const statusAnterior: StatusInscricao = inscricao.status;
    let statusAtual: StatusInscricao = statusAnterior;
    let vagasAtualizadas = inscricao.curso.vagas;

    if (acao === "APROVAR") {
      if (statusAnterior !== "PENDENTE") {
        throw new AppError("Só inscrições pendentes podem ser aprovadas", 400);
      }

      if (inscricao.curso.vagas <= 0) {
        throw new AppError("Não há vagas disponíveis nesse curso", 400);
      }

      statusAtual = "DEFERIDO";
      vagasAtualizadas = inscricao.curso.vagas - 1;
    }

    if (acao === "REJEITAR") {
      if (statusAnterior === "INDEFERIDO") {
        throw new AppError("Essa inscrição já está rejeitada", 400);
      }

      statusAtual = "INDEFERIDO";

      if (statusAnterior === "DEFERIDO") {
        vagasAtualizadas = inscricao.curso.vagas + 1;
      }
    }

    if (acao === "CANCELAR") {
      if (statusAnterior === "CANCELADO") {
        throw new AppError("Essa inscrição já está cancelada", 400);
      }

      statusAtual = "CANCELADO";

      if (statusAnterior === "DEFERIDO") {
        vagasAtualizadas = inscricao.curso.vagas + 1;
      }
    }

    if (vagasAtualizadas !== inscricao.curso.vagas) {
      await tx.curso.update({
        where: { id: inscricao.curso.id },
        data: { vagas: vagasAtualizadas },
      });
    }

    await tx.inscricao.update({
      where: { id },
      data: { status: statusAtual },
    });

    await tx.historico.create({
      data: {
        alteracao: acao,
        descricao: descricaoPadrao(acao, motivo),
        statusAnterior,
        statusAtual,
        fkAluno: inscricao.fkAluno,
        fkInscricao: inscricao.id,
        fkUsuarioResponsavel: responsavel.id,
      },
    });

    return tx.inscricao.findUnique({
      where: { id },
      include: {
        aluno: {
          include: {
            usuario: {
              select: {
                id: true,
                nome: true,
                emailInstitucional: true,
              },
            },
          },
        },
        curso: {
          select: {
            id: true,
            nome: true,
            vagas: true,
          },
        },
        historico: {
          include: {
            usuario: {
              select: {
                id: true,
                nome: true,
                emailInstitucional: true,
              },
            },
          },
          orderBy: { dataModificacao: "desc" },
        },
      },
    });
  });
}

export async function aprovarInscricao(
  id: string,
  usuarioResponsavelId: string,
) {
  return mudarStatusInscricao(id, usuarioResponsavelId, "APROVAR");
}

export async function rejeitarInscricao(
  id: string,
  usuarioResponsavelId: string,
  motivo?: string,
) {
  return mudarStatusInscricao(id, usuarioResponsavelId, "REJEITAR", motivo);
}

export async function cancelarInscricao(
  id: string,
  usuarioResponsavelId: string,
  motivo?: string,
) {
  return mudarStatusInscricao(id, usuarioResponsavelId, "CANCELAR", motivo);
}