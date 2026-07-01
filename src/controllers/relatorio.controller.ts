import { NextFunction, Request, Response } from "express";
import {
  relatorioInscricoesPorSituacao,
  resumoGeralSistema,
  getRelatorio,
  gerarCsv
} from "../services/relatorio.service";

export async function inscricoesPorSituacao(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const dados = await relatorioInscricoesPorSituacao();

    res.status(200).json({
      mensagem: "Relatório de inscrições por situação gerado com sucesso",
      relatorio: dados,
    });
  } catch (error) {
    next(error);
  }
}

export async function resumoSistema(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const resumo = await resumoGeralSistema();

    res.status(200).json({
      mensagem: "Resumo geral do sistema gerado com sucesso",
      resumo,
    });
  } catch (error) {
    next(error);
  }
}

export async function listarCursos(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const dados = await getRelatorio();
    res.status(200).json(dados);
  } catch (error) {
    next(error);
  }
}

export async function exportarCsv(
  _req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const arquivoCsv = await gerarCsv();

    res.header("Content-Type", "text/csv; charset=utf-8");
    res.attachment("relatorio_cursos_ifce.csv");

    res.status(200).send(arquivoCsv);
  } catch (error) {
    next(error);
  }
}