import { TaskController } from '@/controllers/TaskController';
import { Router } from 'express';

const router = Router();

const taskController = new TaskController();

router.get("/task", taskController.list);

export { router as taskRouter };