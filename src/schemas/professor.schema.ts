import { z } from "zod";

// Schema para CRIAR um professor
export const criarProfessorSchema = z.object({
  siape: z.string().min(1, "SIAPE é obrigatório"),
  fkUsuario: z.string().uuid("ID de usuário inválido"), // Obrigatório para ligar ao Usuário
  emailSiape: z.string().email("E-mail SIAPE inválido").optional(),
  telefonesInstitucionais: z.array(z.string()).default([]),
  telefonesPessoais: z.array(z.string()).default([]),
  emPGD: z.boolean().optional(),
  titulacao: z.string().optional(),
  escolaridade: z.string().optional(),
  // ... você pode adicionar os outros campos do model aqui se quiser receber na criação
});

// Schema para ATUALIZAR um professor (tudo opcional, menos a fkUsuario que não muda)
export const atualizarProfessorSchema = criarProfessorSchema.partial().omit({ fkUsuario: true });

// Schema ESPECÍFICO para a tela de "Dados de Conta" (Atualiza Professor e Usuário)
export const professorDadosContaSchema = z.object({
  // --- Dados do model Usuario ---
  nomeUsual: z.string().min(3, "O nome usual deve ter no mínimo 3 caracteres"),
  emailInstitucional: z.string().email("E-mail institucional inválido"),
  emailSecundario: z.string().email("E-mail secundário inválido"),

  // --- Dados do model Professor ---
  emailSiape: z.string().email("E-mail SIAPE inválido").optional().or(z.literal("")),
  emailNotificacoes: z.string().email("E-mail para notificações inválido").optional().or(z.literal("")),
  emailClassroom: z.string().email("E-mail do Google Sala de Aula inválido").optional().or(z.literal("")),
  telefonesInstitucionais: z.array(z.string()).default([]),
  telefonesPessoais: z.array(z.string()).default([]),
  emPGD: z.boolean({ required_error: "Obrigatório informar se está em PGD" }),
});

// Exportando as tipagens para o TypeScript usar nos Controllers
export type CriarProfessorInput = z.infer<typeof criarProfessorSchema>;
export type AtualizarProfessorInput = z.infer<typeof atualizarProfessorSchema>;
export type ProfessorDadosContaInput = z.infer<typeof professorDadosContaSchema>;