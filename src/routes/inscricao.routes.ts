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
import { adicionarRenda } from "../controllers/inscricao.controller";

const inscricaoRouter = Router();

inscricaoRouter.post(
  "/",
  authMiddleware,
  criar
);

inscricaoRouter.post(
  "/:id/renda",
  authMiddleware,
  adicionarRenda  
);

inscricaoRouter.use(authMiddleware, verificarPermissao("GERENCIAR_INSCRICAO"));

inscricaoRouter.get("/", listar);
inscricaoRouter.get("/:id", detalhar);
inscricaoRouter.get("/:id/historico", historico);
inscricaoRouter.patch("/:id/aprovar", aprovar);
inscricaoRouter.patch("/:id/rejeitar", rejeitar);
inscricaoRouter.patch("/:id/cancelar", cancelar);

export default inscricaoRouter;