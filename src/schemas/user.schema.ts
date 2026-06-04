import { z } from "zod";

export const atualizarUsuarioSchema = z.object({
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres").optional(),
  nomeSocial: z.string().optional(),
  senha: z.string().min(3, "Senha deve ter pelo menos 8 caracteres").optional()
});

export type atualizarUsuarioInput = z.infer<typeof atualizarUsuarioSchema>