import { Router } from "express";
import { 
  criarProfessor, 
  listarProfessores, 
  buscarProfessorPorId, 
  atualizarProfessor, 
  deletarProfessor, 
  atualizarDadosContaProfessor 
} from "../controllers/professor.controller";

export const professorRoutes = Router();

// Criar
professorRoutes.post("/professores", criarProfessor);

// Listar todos
professorRoutes.get("/professores", listarProfessores);

// Buscar um específico
professorRoutes.get("/professores/:id", buscarProfessorPorId);

// Atualizar geral
professorRoutes.put("/professores/:id", atualizarProfessor);

// Atualizar APENAS dados de conta
professorRoutes.put("/professores/:id/conta", atualizarDadosContaProfessor);

// Deletar
professorRoutes.delete("/professores/:id", deletarProfessor);