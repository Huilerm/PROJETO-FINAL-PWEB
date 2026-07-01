import { Router } from "express";
import { enviar, visualizar, remover } from "../controllers/documento.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";

const documentoRouter = Router();

documentoRouter.post("/:id/enviar", authMiddleware, upload.single("file"), enviar)
documentoRouter.get("/:id", authMiddleware, visualizar);
documentoRouter.delete("/:id", authMiddleware, remover);

export default documentoRouter;