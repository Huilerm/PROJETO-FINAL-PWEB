import type { Request, Response, NextFunction } from "express";
import { cadastroSchema } from "../schemas/cadastro.schema.js";
import { loginSchema } from "../schemas/login.schema.js";
import { cadastrarAluno, login } from "../services/auth.service.js";
import { AppError } from "../errors/AppError.js";

export async function cadastrar(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = cadastroSchema.safeParse(req.body);

    if (!parsed.success) {
      const erros = parsed.error.issues.map((e) => ({
        campo: e.path.join("."),
        mensagem: e.message,
      }));
      res.status(400).json({ mensagem: "Dados inválidos.", erros });
      return;
    }

    const resultado = await cadastrarAluno(parsed.data);

    res.status(201).json({
      mensagem: "Cadastro realizado com sucesso!",
      ...resultado,
    });
  } catch (error) {
    next(error);
  }
}

export async function logarUsuario(req: Request, res: Response, next: NextFunction) {
  try {
    const parsed = loginSchema.safeParse(req.body);

    if (!parsed.success) {
      const erros = parsed.error.issues.map((e) => ({
        campo: e.path.join("."),
        mensagem: e.message,
      }));
      res.status(400).json({ mensagem: "Dados inválidos.", erros });
      return;
    }

    const resultado = await login(parsed.data);

    res.status(200).json({
      mensagem: "Login realizado com sucesso!",
      ...resultado,
    });
  } catch (error) {
    next(error);
  }
}

export async function perfil(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json({
      mensagem: "Token válido.",
      usuario: req.user,
    });
  } catch (error) {
    next(error);
  }
}
