import { Request, Response, NextFunction } from "express";
import { cadastrarInstituicao, atualizarInstituicao } from "../schemas/instituicao.schema";
import * as instituicaoService from "../services/instituicao.service";


export async function listarInstituicoes(req: Request, res: Response, next: NextFunction){
    try{
        const institutos = await instituicaoService.listarInstituicoes();
        res.status(200).json(institutos);
    } catch (error) {
        next(error);
    }
}

export async function instituicao(req: Request, res: Response, next: NextFunction){
    try{
        const institutoId = req.body.id;
        if(!institutoId) {
            res.status(401).json({ msg: "Não autorizado" });
            return;
        }

        const instituto = await instituicaoService.buscarInstituicao(institutoId);
        res.status(200).json(instituto);
    } catch (error) {
        next(error);
    }
}

export async function cadastrar(req: Request, res: Response, next: NextFunction) {
    try {
        const verificaUsuario = req.user;

        if(verificaUsuario.roleId !== "ADMIN" && verificaUsuario.roleId !== "DEPPI") {
            return res.status(403).json({ msg: "Acesso negado" });
        }

        const dados = cadastrarInstituicao.parse(req.body);
        const cadastro = await instituicaoService.criarInstituicao(dados);

        return res.status(201).json(cadastro);
    } catch (error) {
        next(error);
    }
}

export async function atualizar(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.body.id;
        const data = req.body;
        const instituicaoAtualizada = instituicaoService.atualizarInstituicao(id, data);

        res.status(200).json({ msg: "Instituição atualizada", instituicao: instituicaoAtualizada });
    } catch (error) {
        next(error);
    }
}

export async function excluir(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.body.id;
        const deletarInstituicao = instituicaoService.excluir(id);

        res.status(200).json({ msg: "Instituição excluída", instituicao: deletarInstituicao });
    } catch (error) {
        next(error);
    }
}

