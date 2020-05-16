import { Request, Response } from 'express';
import * as departmentService from '../service/DepartmentService';
import { Department } from '../domain/Department';
import * as HttpStatus from 'http-status-codes';

export function findAll(
  req: Request,
  res: Response
): Response<Array<Department>> {
  const departments: Array<Department> = departmentService.findAll();
  return res.status(HttpStatus.OK).send({ data: departments });
}

export function create(req: Request, res: Response): Response<Department> {
  const department: Department = departmentService.create(req.body);
  return res.status(HttpStatus.CREATED).send(department);
}

export function remove(
  req: Request,
  res: Response
): Response<Array<Department>> {
  departmentService.remove(Number(req.params.id));
  return res.status(HttpStatus.OK).send({ data: 'Department deleted successfully' });
}

export function update(req: Request, res: Response): Response<Department> {
  const department: Department = departmentService.update(req.body);
  return res.status(HttpStatus.OK).send({ data: department });
}

export function findOne(req: Request, res: Response): Response<Department> {
  const department: Department = departmentService.findOne(
    Number(req.params.id)
  );
  return res.status(HttpStatus.OK).send({ data: department });
}
