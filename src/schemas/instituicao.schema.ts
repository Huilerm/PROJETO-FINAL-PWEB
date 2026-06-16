import { z } from "zod";

export const cadastrarInstituicao = z.object({
    nome: z.string().min(1, "Nome obrigatório"),
    cidade: z.string().min(1, "Nome obrigatório"),
    campus: z.string().min(1, "Campus obrigatório"),
    cnpj: z.string().min(1, "CNPJ inválido").max(18, "CNPJ inválido")
});

export const atualizarInstituicao = cadastrarInstituicao.partial();

export type CadastroInstituicao = z.infer<typeof cadastrarInstituicao>;
export type AtualizarInstituicao = z.infer<typeof atualizarInstituicao>;