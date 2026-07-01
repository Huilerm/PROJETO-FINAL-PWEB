import { NextFunction, Request, Response } from "express";
import {
  relatorioInscricoesPorSituacao,
  resumoGeralSistema,
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