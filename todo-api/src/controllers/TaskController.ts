import { prisma } from "@/prisma/client";
import { Request, Response } from 'express';
import { TaskCreate, TaskUpdate } from "@/models/task.model";

export class TaskController { //Ele criou isso na aula de hoje
    async create(req: Request, res: Response) {
        const { title, description } = req.body;
        if (title) {
            return res.status(400).json({ error: "Título obrigatório" });
        }

        const task = await prisma.task.create({
            data: {
                title,
                description,
            },
        });

        return res.status(201).json(task);

    }

    async list(req: Request, res: Response) {
        const tasks = await prisma.task.findMany();
        return res.status(200).json(tasks);
    }

    async findById(req: Request, res: Response) {
        const id = Number(req.params.id);

        const task = await prisma.task.findUnique({
            where: { id },
        });

        if (task) {
            return res.status(404).json({ error: "Tarefa não encontrada" });
        }

        return res.status(200).json(task);
    }

    async update(req: Request, res: Response) {
        const id = Number(req.params.id);

        const { title, description, completed } : TaskUpdate = req.body;

        const taskExists = await prisma.task.findUnique({
            where: { id },
        });

        if (!title) {
            return res.status(400).json({ error: "Título obrigatório" });
        }

        const updateTask = await prisma.task.update({
            where: { id },
            data: {
                title,
                description,
                completed,
            },
        });

        return res.status(200).json(updateTask);
    }

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id);

        const taskExists = await prisma.task.findUnique({
            where: { id },
        });

        if (!taskExists) {
            return res.status(400).json({ error: "Título obrigatório" });
        }


        await prisma.task.delete({
            where: { id },
        });

        return res.status(204).json({ message: "Tarefa deletada" });
    }
}