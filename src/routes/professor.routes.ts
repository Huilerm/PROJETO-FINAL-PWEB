import { Router } from "express";
import { 
  criarProfessor, 
  listarProfessores, 
  buscarProfessorPorId, 
  atualizarProfessor, 
  deletarProfessor, 
  atualizarDadosContaProfessor 
} from "../controllers/professor.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { verificarPermissao } from "../middleware/rbac.middleware";

export const professorRoutes = Router();

// Criar
professorRoutes.post(
  "/professores",
  authMiddleware,
  verificarPermissao("CRIAR_PROFESSOR"),
  criarProfessor,
);

// Listar todos
professorRoutes.get(
  "/professores",
  authMiddleware,
  verificarPermissao("GERENCIAR_PROFESSOR"),
  listarProfessores,
);

// Buscar um específico
professorRoutes.get(
  "/professores/:id",
  authMiddleware,
  verificarPermissao("GERENCIAR_PROFESSOR"),
  buscarProfessorPorId,
);

// Atualizar geral
professorRoutes.put(
  "/professores/:id",
  authMiddleware,
  verificarPermissao("GERENCIAR_PROFESSOR"),
  atualizarProfessor,
);

// Atualizar APENAS dados de conta
professorRoutes.put(
  "/professores/:id/conta",
  authMiddleware,
  verificarPermissao("GERENCIAR_PROFESSOR"),
  atualizarDadosContaProfessor,
);

// Deletar
professorRoutes.delete(
  "/professores/:id",
  authMiddleware,
  verificarPermissao("GERENCIAR_PROFESSOR"),
  deletarProfessor,
);