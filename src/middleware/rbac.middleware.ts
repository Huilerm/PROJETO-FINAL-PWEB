import { Request, Response, NextFunction } from "express";
import { RbacService } from "../services/rbac.services";

const rbacService = new RbacService();

export function verificarPermissao(permissaoNecessaria: string) {
    return async(req: Request, res: Response, next: NextFunction) => {
        try {
            const usuarioId = req.user?.userId;

            if(!usuarioId) {
                res.status(401).json({ mensagem: "Usuário não autenticado. "});
                return;
            }

            const permissoesUsuario = await rbacService.obterPermissoes(usuarioId);
            const permitido = permissoesUsuario.includes(permissaoNecessaria);

            if(!permitido) {
                res.status(403).json({ mensagem: "Você não tem permissão para esta ação. "});
                return;
            }
            next();
        } catch (error) {
            res.status(500).json({ mensagem: "Erro ao checar permissões"});
        }
    };
}