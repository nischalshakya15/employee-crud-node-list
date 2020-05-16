import { Router } from 'express';
import departmentRoutes from './routes/DepartmentRoutes';
import employeeRoutes from './routes/EmployeeRoutes';

const router = Router();

router.use('/departments', departmentRoutes);
router.use('/employees', employeeRoutes);
export default router;
