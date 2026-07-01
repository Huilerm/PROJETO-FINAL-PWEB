import { z } from "zod";
import { CategoriaDocumento } from "../../generated/prisma/client";

export const documentoIdParamsSchema = z.object({
  id: z.string().uuid(),
});

export const uploadDocumentoBodySchema = z.object({
  categoria: z.nativeEnum(CategoriaDocumento).optional(),
});