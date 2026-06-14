import { Request, Response, NextFunction } from "express";
import * as inscricaoService from "../services/inscricao.service";

export async function criar(
  req: Request,
  res: Response,
  next: NextFunction
) {

  try {

    const usuarioId = req.user?.userId;

    if (!usuarioId) {
      res.status(401).json({
        msg: "Não autorizado"
      });

      return;
    }

    const { cursoId } = req.body;

    const inscricao =
      await inscricaoService.criarInscricao(
        usuarioId,
        cursoId
      );

    res.status(201).json(inscricao);

  } catch (error) {
    next(error);
  }

}