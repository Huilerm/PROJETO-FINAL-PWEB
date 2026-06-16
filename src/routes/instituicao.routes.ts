import { Router } from "express";
import { listarInstituicoes, cadastrar, instituicao, atualizar, excluir } from "../controllers/instituicao.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";

const instituicaoRoutes = Router();

instituicaoRoutes.get("/", authMiddleware, verificarPermissao(["DEPPI", "ADMIN"]), listarInstituicoes);

instituicaoRoutes.get("/:id", authMiddleware, verificarPermissao(["DEPPI", "ADMIN"]), instituicao);

instituicaoRoutes.post("/cadastrar", authMiddleware, verificarPermissao(["DEPPI", "ADMIN"]), cadastrar);

instituicaoRoutes.put("/atualizar", authMiddleware, verificarPermissao(["DEPPI", "ADMIN"]), atualizar);

instituicaoRoutes.delete("/excluir", authMiddleware, verificarPermissao(["DEPPI", "ADMIN"]), excluir);

export default instituicaoRoutes;