import { Router } from "express";
import { create } from "../controllers/user.controller";

const userRouter = Router();

// POST /users — rota pública de criação de usuário
userRouter.post("/", create);

export default userRouter;