import { prisma } from "../lib/prisma";
import { CadastroInstituicao, AtualizarInstituicao } from "../schemas/instituicao.schema";

export async function criarInstituicao(data: CadastroInstituicao) {
    return await prisma.instituicao.create({
        data: data
    });
}

export async function atualizarInstituicao(
    id: string, 
    data: CadastroInstituicao
) {
    return await prisma.instituicao.update({
        where: { id },
        data
    });
}

export async function listarInstituicoes() {
    return await prisma.instituicao.findMany({
        select: {
            id: true,
            nome: true,
            cidade: true,
            campus: true,
            cnpj: true,
        }
    });
}

export async function buscarInstituicao(id: string) {
    return await prisma.instituicao.findUnique({
        where: { id },
        select: {
            nome: true,
            cidade: true,
            campus: true,
            cnpj: true,
        }
    });
}

export async function excluir(id: string) {
    return await prisma.instituicao.delete({
        where: {id}
    });
}