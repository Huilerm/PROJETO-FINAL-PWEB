import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";
import {
  aprovar,
  cancelar,
  detalhar,
  historico,
  listar,
  rejeitar,
} from "../controllers/inscricao.controller";

const inscricaoRouter = Router();

inscricaoRouter.use(authMiddleware, verificarPermissao("GERENCIAR_INSCRICAO"));

inscricaoRouter.get("/", listar);
inscricaoRouter.get("/:id", detalhar);
inscricaoRouter.get("/:id/historico", historico);
inscricaoRouter.patch("/:id/aprovar", aprovar);
inscricaoRouter.patch("/:id/rejeitar", rejeitar);
inscricaoRouter.patch("/:id/cancelar", cancelar);

export default inscricaoRouter;