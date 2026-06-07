import { Router } from "express";
import {
  cadastrar,
  logarUsuario,
  perfil,
} from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const authRouter = Router();

// POST ─ /auth/cadastro — cria uma conta de aluno
authRouter.post("/cadastro", cadastrar);

// POST ─ /auth/login — autentica e retorna JWT
authRouter.post("/login", logarUsuario);

// GET ─ /auth/me — rota protegida: retorna dados do usuário logado
authRouter.get("/me", authMiddleware, perfil);

export default authRouter;
