import { Router } from "express";
import { criar } from "../controllers/inscricao.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const inscricaoRouter = Router();

inscricaoRouter.post(
  "/",
  authMiddleware,
  criar
);

export default inscricaoRouter;