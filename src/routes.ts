import { Router } from 'express';
import departmentRoutes from './routes/DepartmentRoutes';

const router = Router();

router.use('/departments', departmentRoutes);

export default router;
