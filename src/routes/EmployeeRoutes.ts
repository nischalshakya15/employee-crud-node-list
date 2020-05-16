import { Router } from 'express';
import * as employeeController from '../controller/EmployeeController';

const router = Router();

router
  .route('/')
  .get(employeeController.findAll)
  .post(employeeController.create);

router
  .route('/:id')
  .put(employeeController.update)
  .delete(employeeController.remove)
  .get(employeeController.findOne);

export default router;
