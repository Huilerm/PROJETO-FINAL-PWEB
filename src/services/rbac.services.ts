import { PrismaClient } from "../../generated/prisma/client";

const prisma = new PrismaClient();

export class RbacService {
    async obterPermissoes(usuarioId: number): Promise<string[]> {        
        const usuario = await prisma.usuario.findUnique({
            where: { id: usuarioId },
            select: {
                cargos: {
                    select: {
                        permissoes: {
                            select: {
                                permissao: true
                            }
                        }
                    }
                }
            }
        });

        if (!usuario) return [];

        const permissoesTotais: string[] = [];
        
        usuario.cargos.forEach((cargo) => {
            cargo.permissoes.forEach((p) => {
                permissoesTotais.push(p.permissao);
            });
        });

        return permissoesTotais;
    }
}