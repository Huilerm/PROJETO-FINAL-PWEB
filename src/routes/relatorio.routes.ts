import { Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";
import {
  inscricoesPorSituacao,
  resumoSistema,
} from "../controllers/relatorio.controller";

const relatorioRouter = Router();

relatorioRouter.use(authMiddleware, verificarPermissao("ADMIN"));

relatorioRouter.get("/inscricoes-por-situacao", inscricoesPorSituacao);
relatorioRouter.get("/resumo", resumoSistema);

export default relatorioRouter;