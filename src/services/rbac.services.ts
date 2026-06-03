import { PrismaClient } from "@prisma/client";
import { permissions } from "../utils/permissions";


const prisma = new PrismaClient();

export class RbacService {
    async obterPermissoes(usuarioId: number): Promise<string[]> {
        const permissoesTotais: string[] = [];
        
        const usuario = await prisma.usuario.findUnique({
            where: { id: usuarioId },
            select: { cargos: true }
        });

        if (!usuario) return [];

        usuario.cargos.forEach((cargo) => {
            const permissoesCargo = permissions[cargo];

            if(permissoesCargo) {
                permissoesTotais.push(...permissoesCargo);
            }
        });

        return permissoesTotais;

    }
}