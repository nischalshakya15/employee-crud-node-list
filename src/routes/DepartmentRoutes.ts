import { Router } from 'express';
import * as departmentController from '../controller/DepartmentController';
const router = Router();

router
  .route('/')
  .get(departmentController.findAll)
  .post(departmentController.create);

router
  .route('/:id')
  .get(departmentController.findOne)
  .delete(departmentController.remove)
  .put(departmentController.update);

export default router;
