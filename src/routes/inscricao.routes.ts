import { Router } from "express";
import {
  criar,
  aprovar,
  cancelar,
  detalhar,
  historico,
  listar,
  rejeitar,
} from "../controllers/inscricao.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";

const inscricaoRouter = Router();

// 1. Rota de criação (Lógica sua: aberta para qualquer usuário autenticado)
inscricaoRouter.post(
  "/",
  authMiddleware,
  criar
);

// 2. Trava de segurança para as rotas abaixo (Lógica do seu colega: exige permissão de gestão)
inscricaoRouter.use(authMiddleware, verificarPermissao("GERENCIAR_INSCRICAO"));

// 3. Rotas administrativas
inscricaoRouter.get("/", listar);
inscricaoRouter.get("/:id", detalhar);
inscricaoRouter.get("/:id/historico", historico);
inscricaoRouter.patch("/:id/aprovar", aprovar);
inscricaoRouter.patch("/:id/rejeitar", rejeitar);
inscricaoRouter.patch("/:id/cancelar", cancelar);

export default inscricaoRouter;