import path from "path";
import { AppError } from "../errors/AppError";
import { prisma } from "../lib/prisma";

interface Cover {
    cursoID: string;
    file?: Express.Multer.File;
}

export class UploadCoverService {
    async execute({ cursoID, file }: Cover) {
        if (!file) {
            throw new AppError("Capa obrigatória");
        }

        const curso = await prisma.curso.findFirst({
            where: {
                id: cursoID,
            },
        });

        if (!curso) {
            throw new AppError("Curso não encontrado");
        }

        const uploadedCover = await prisma.capa.create({
            data: {
                nomeArquivo: file.filename,
                nomeOriginal: file.originalname,
                mimeType: file.mimetype,
                size: file.size,
                path: file.path
            },
        });

        await prisma.curso.update({
            where: {
                id: cursoID,
            },
            data: {
                Capa: {
                    connect: { id: uploadedCover.id },
                },
            },
        });
    }
}

export class ShowCoverService {
    async execute({ cursoID }: Cover) {
        const curso = await prisma.curso.findFirst({
            where: {
                id: cursoID
            },
            include: {
                Capa: true,
            },
        });

        if (!curso) {
            throw new AppError("Curso não encontrado");
        }

        if (!curso.Capa) {
            throw new AppError("Imagem não encontrada");
        }

        return path.resolve(curso.Capa.path);
    }
}