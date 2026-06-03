import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  userId: number;
  roleId: number | null;
  permissions: string[];
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ mensagem: "Token não fornecido." });
    return;
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    res.status(500).json({ mensagem: "Configuração de segurança ausente." });
    return;
  }

  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;
    req.user = {
      userId: decoded.userId,
      roleId: decoded.roleId,
    };
    next();
  } catch {
    res.status(401).json({ mensagem: "Token inválido ou expirado." });
  }
}
