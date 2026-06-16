import { z } from "zod";

export const inscricaoIdParamsSchema = z.object({
  id: z.string().min(1, "ID da inscrição inválido"),
});

export const listarInscricoesQuerySchema = z.object({
  status: z
    .enum(["PENDENTE", "DEFERIDO", "INDEFERIDO", "CANCELADO"])
    .optional(),
});

export const motivoSchema = z.object({
  motivo: z
    .string()
    .min(3, "Motivo deve ter pelo menos 3 caracteres")
    .max(255, "Motivo muito grande")
    .optional(),
});

export type ListarInscricoesQueryInput = z.infer<
  typeof listarInscricoesQuerySchema
>;
export type MotivoInput = z.infer<typeof motivoSchema>;

export const rendaFamiliarSchema = z.object({
  rendaFamiliar: z.number().positive("Renda deve ser positiva"),
  numeroPessoas: z.number().int().positive("Número de pessoas deve ser positivo"),
});

export type RendaFamiliarInput = z.infer<typeof rendaFamiliarSchema>;