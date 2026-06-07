import { Router } from "express";
import { createAdmin } from "../controllers/admin.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";

const adminRouter = Router();

adminRouter.post(
  "/cadastro",
  authMiddleware,
  verificarPermissao("ADMIN"),
  createAdmin,
);

export default adminRouter;
