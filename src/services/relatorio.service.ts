import { prisma } from "../lib/prisma";
import type { StatusCurso, StatusInscricao } from "../../generated/prisma/client";

const ORDEM_STATUS_INSCRICAO: StatusInscricao[] = [
  "PENDENTE",
  "DEFERIDO",
  "INDEFERIDO",
  "CANCELADO",
];

const ORDEM_STATUS_CURSO: StatusCurso[] = [
  "ANALISE",
  "ANDAMENTO",
  "CONCLUIDO",
  "FECHADO",
];

function normalizarContagem<T extends string>(
  itens: Array<{ status: T; _count: { _all: number } }>,
  ordem: readonly T[],
) {
  const mapa = new Map<T, number>(
    itens.map((item) => [item.status, item._count._all]),
  );

  return ordem.map((status) => ({
    status,
    quantidade: mapa.get(status) ?? 0,
  }));
}

export async function relatorioInscricoesPorSituacao() {
  const agrupado = await prisma.inscricao.groupBy({
    by: ["status"],
    _count: { _all: true },
  });

  return normalizarContagem(agrupado, ORDEM_STATUS_INSCRICAO);
}

export async function resumoGeralSistema() {
  const [
    totalUsuarios,
    totalAlunos,
    totalProfessores,
    totalCursos,
    totalInscricoes,
    totalInstituicoes,
    vagasRestantes,
    inscricoesAgrupadas,
    cursosAgrupados,
  ] = await Promise.all([
    prisma.usuario.count(),
    prisma.aluno.count(),
    prisma.professor.count(),
    prisma.curso.count(),
    prisma.inscricao.count(),
    prisma.instituicao.count(),
    prisma.curso.aggregate({ _sum: { vagas: true } }),
    prisma.inscricao.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
    prisma.curso.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
  ]);

  return {
    geradoEm: new Date().toISOString(),
    totais: {
      usuarios: totalUsuarios,
      alunos: totalAlunos,
      professores: totalProfessores,
      cursos: totalCursos,
      inscricoes: totalInscricoes,
      instituicoes: totalInstituicoes,
      vagasRestantes: vagasRestantes._sum.vagas ?? 0,
    },
    inscricoesPorSituacao: normalizarContagem(
      inscricoesAgrupadas,
      ORDEM_STATUS_INSCRICAO,
    ),
    cursosPorSituacao: normalizarContagem(cursosAgrupados, ORDEM_STATUS_CURSO),
  };
}