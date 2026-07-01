import { UploadCoverService, ShowCoverService } from "../services/cover.service";
import { Request, Response } from "express";

export class CourseCoverController {
    async upload(req: Request, res: Response) {
        const service = new UploadCoverService();

        const result = await service.execute({
            cursoID: String(req.params.id),
            file: req.file!
        });

        return res.status(201).json(result);
    }

    async show(req: Request, res: Response) {
        const service = new ShowCoverService();

        const filePath = await service.execute({
            cursoID: String(req.params.id),
        });

        return res.send(filePath);
    }
}