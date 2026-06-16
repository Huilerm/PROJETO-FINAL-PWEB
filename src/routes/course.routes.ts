import { Router } from 'express';
import { CourseController } from '../controllers/course.controller';
import { authMiddleware } from '../middleware/auth.middleware'; 
import { verificarPermissao } from '../middleware/rbac.middleware';

const router = Router();
const courseController = new CourseController();

router.get('/', authMiddleware, courseController.findAll.bind(courseController));

router.get('/:id', authMiddleware, courseController.findOne.bind(courseController));

router.post(
  '/', 
  authMiddleware, 
  verificarPermissao(['CRIAR_CURSO', 'GERENCIAR_CURSO']), 
  courseController.create.bind(courseController)
);

router.put(
  '/:id', 
  authMiddleware, 
  verificarPermissao(['CRIAR_CURSO', 'GERENCIAR_CURSO']), 
  courseController.update.bind(courseController)
);

router.delete(
  '/:id', 
  authMiddleware, 
  verificarPermissao(['GERENCIAR_CURSO']), 
  courseController.remove.bind(courseController)
);

export { router as courseRoutes };