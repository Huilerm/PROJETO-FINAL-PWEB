import { Request, Response, NextFunction } from "express";
import { promoverSchema } from "../schemas/cadastro.schema";
import { createAdminDeppi } from "../services/admin.service";

export async function createAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const parsed = promoverSchema.safeParse(req.body);
    if (!parsed.success) {
      res
        .status(400)
        .json({ msg: "Dados Inválidos", erros: parsed.error.issues });
      return;
    }
    let user;
    if (parsed.data.cargo === "ADMIN") {
      user = await createAdminDeppi(parsed.data, parsed.data.cargo);
    } else if (parsed.data.cargo === "DEPPI") {
      user = await createAdminDeppi(parsed.data, parsed.data.cargo);
    }
    res.status(201).json({
      msg: "ADMIN criado",
      usuario: {
        id: user?.id,
        nome: user?.nome,
        email: user?.emailInstitucional,
      },
    });
  } catch (error) {
    next(error);
  }
}
