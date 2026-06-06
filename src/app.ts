import "dotenv/config";
import express from "express";
import type { Request, Response, NextFunction } from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import { AppError } from "./errors/AppError.js";

const app = express();

app.use(express.json());

// ── Rotas ────────────────────────────────────────────────────────
app.use("/auth", authRouter);
app.use("/users", userRouter);

// Health check
app.get("/", (_req, res) => {
  res.json({ status: "ok", mensagem: "API funcionando!" });
});

// ── Tratador global de erros ──────────────────────────────────────
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ mensagem: err.message });
    return;
  }

  console.error("Erro inesperado:", err);
  res.status(500).json({ mensagem: "Erro interno no servidor." });
});

// ── Inicialização ─────────────────────────────────────────────────
const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

export default app;