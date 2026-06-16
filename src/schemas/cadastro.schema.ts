import { z } from "zod";

export const cadastroSchema = z.object({
  // Dados do usuário
  nome: z.string().min(3, "Nome deve ter ao menos 3 caracteres"),
  nomeSocial: z.string().optional(),
  nomeMae: z.string().min(3),
  nomePai: z.string().min(3),
  fkEndereco: z.number().int().positive(),
  dataNasc: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),
  naturalidade: z.string().min(2, "Naturalidade é obrigatória"),
  email: z.email("E-mail inválido"),
  senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres"),
  sexo: z.enum(["MASCULINO", "FEMININO"]),
  raca: z.enum([
    "AMARELA",
    "BRANCA",
    "PARDA",
    "PRETA",
    "INDIGENA",
    "NAO_DECLARADO",
  ]),
  cargo: z.enum(["ALUNO", "PROFESSOR", "ADMIN", "DEPPI"]),

  // Dados da identidade
  rg: z.string().min(5, "RG inválido"),
  cpf: z.string().regex(/^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/, "CPF inválido"),
  orgaoEmissor: z.string().min(2, "Órgão emissor é obrigatório"),
  estado: z.string().length(2, "Estado deve ter 2 letras (ex: CE)"),
  dataEmissao: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Data deve estar no formato YYYY-MM-DD"),

  // Código de Usuário (opcional — se omitida, é gerada automaticamente)
  matricula: z.string().optional(),
  siape: z.string().optional(),
  id: z.string().optional(), // Para cadastro de admin/deppi
});

export const promoverSchema = z.object({
  id: z.string().uuid("ID inválido"),
  cargo: z.enum(["ADMIN", "DEPPI"])
});

export type CadastroInput = z.infer<typeof cadastroSchema>;
export type PromoverInput = z.infer<typeof promoverSchema>;
