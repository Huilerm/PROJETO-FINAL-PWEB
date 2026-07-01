import { Router } from "express";
import { visualizar, remover } from "../controllers/documento.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const documentoRouter = Router();

documentoRouter.get("/:id", authMiddleware, visualizar);
documentoRouter.delete("/:id", authMiddleware, remover);

export default documentoRouter;