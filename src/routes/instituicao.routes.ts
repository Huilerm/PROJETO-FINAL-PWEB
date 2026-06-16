import { Router } from "express";
import { listarInstituicoes, instituicao, atualizar, excluir } from "../controllers/instituicao.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";
import { cadastrar } from "../controllers/auth.controller";

const instituicaoRoutes = Router();

instituicaoRoutes.get("/", authMiddleware, verificarPermissao("DEPPI"), listarInstituicoes);
instituicaoRoutes.get("/", authMiddleware, verificarPermissao("ADMIN"), listarInstituicoes);

instituicaoRoutes.get("/:id", authMiddleware, verificarPermissao("DEPPI"), instituicao);
instituicaoRoutes.get("/:id", authMiddleware, verificarPermissao("ADMIN"), instituicao);

instituicaoRoutes.post("/cadastrar", authMiddleware, verificarPermissao("DEPPI"), cadastrar);
instituicaoRoutes.post("/cadastrar", authMiddleware, verificarPermissao("ADMIN"), cadastrar);

instituicaoRoutes.put("/atualizar", authMiddleware, verificarPermissao("DEPPI"), atualizar);
instituicaoRoutes.put("/atualizar", authMiddleware, verificarPermissao("ADMIN"), atualizar);

instituicaoRoutes.delete("/excluir", authMiddleware, verificarPermissao("DEPPI"), excluir);
instituicaoRoutes.delete("/excluir", authMiddleware, verificarPermissao("ADMIN"), excluir);

export default instituicaoRoutes;