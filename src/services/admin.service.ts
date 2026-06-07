import { prisma } from "../lib/prisma";
import { CadastroInput } from "../schemas/cadastro.schema";

type UserType = "ADMIN" | "DEPPI";

// Admin/Deppi nãoé um usuário novo, mas sim um cargo
// Então essa função adiciona esse cargo
export async function createAdminDeppi(
  data: CadastroInput,
  userType: UserType,
) {
  const userId = data.id!;
  let updateToAdmin;
  if (userType === "ADMIN") {
    updateToAdmin = await prisma.usuario.update({
      where: { id: userId },
      data: { cargos: { connect: { id: 4 } } },
    });
  } else if (userType === "DEPPI") {
    updateToAdmin = await prisma.usuario.update({
      where: { id: userId },
      data: { cargos: { connect: { id: 3 } } },
    });
  }
  return updateToAdmin;
}
