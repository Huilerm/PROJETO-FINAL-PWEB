import { z } from "zod";

export const updateCourse = z.object({
    nome: z.string().optional(),
    carga_horaria: z.number().optional(),
    vagas: z.number().optional(),
    dataInicio: z.date().optional(),
    dataFim: z.date().optional(),
    horarioInicio: z.iso.time().optional(),
    horarioFim: z.iso.time().optional(),
    status: z.string().optional()
})

export type UpdateCourseInput = z.infer<typeof updateCourse>