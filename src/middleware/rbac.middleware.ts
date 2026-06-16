import { Request, Response, NextFunction } from "express";
import { RbacService } from "../services/rbac.service";

const rbacService = new RbacService();

export function verificarPermissao(permissaoNecessaria: string | string[]) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuarioId = (req as any).user?.userId;

      if (!usuarioId) {
        res.status(401).json({ mensagem: "Usuário não autenticado." });
        return;
      }

      const permissoesUsuario = await rbacService.obterPermissoes(usuarioId);
      
      const permissoesExigidas = Array.isArray(permissaoNecessaria) 
        ? permissaoNecessaria 
        : [permissaoNecessaria];

      const permitido = permissoesUsuario.some((permissao: string) => 
        permissoesExigidas.includes(permissao)
      );

      if (!permitido) {
        res.status(403).json({ mensagem: "Você não tem permissão para esta ação." });
        return;
      }

      next();
    } catch (error) {
      res.status(500).json({ mensagem: "Erro ao checar permissões" });
    }
  };
}