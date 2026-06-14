import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import { AppError } from "./errors/AppError.js";
import inscricaoRouter from "./routes/inscricao.routes.js";

const PORT = process.env.PORT ?? 3000;
const app = express();
app.use(express.json());

// ── Rotas ────────────────────────────────────────────────────────
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/admin", adminRouter);
// ── Rotas ────────────────────────────────────────────────────────

// ── Verificar servidor ──────────────────────────────────
app.get("/", (_req, res) => {
  res.json({ status: "ok", mensagem: "API funcionando!" });
});
// ── Verificar servidor ──────────────────────────────────

// ── Verifica se houve erro ─────────────────────────────────────────────────
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ mensagem: err.message });
    return;
  }

  console.error("Erro inesperado:", err);
  res.status(500).json({ mensagem: "Erro interno no servidor." });
});
// ── Verifica se houve erro ─────────────────────────────────────────────────

// ── Retorna porta do servidor ─────────────────────
app.listen(PORT, () => {
  console.log(`Server Up: http://localhost:${PORT}`);
});
// ── Retorna porta do servidor ─────────────────────

export default app;
