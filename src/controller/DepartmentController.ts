import { Request, Response } from 'express';
import * as departmentService from '../service/DepartmentService';
import { Department } from '../domain/Department';

export function findAll(
  req: Request,
  res: Response
): Response<Array<Department>> {
  const department: Array<Department> = departmentService.findAll();
  return res.status(200).send({ data: department });
}

export function create(req: Request, res: Response): Response<Department> {
  const department: Department = departmentService.create(req.body);
  return res.status(201).send(department);
}

export function remove(
  req: Request,
  res: Response
): Response<Array<Department>> {
  const department: Array<Department> | undefined = departmentService.remove(
    Number(req.params.id)
  );
  return res.status(200).send({ data: department });
}

export function update(req: Request, res: Response): Response<Department> {
  const department: Department = departmentService.update(req.body);
  return res.status(200).send({ data: department });
}

export function findOne(req: Request, res: Response): Response<Department> {
  const department: Department | undefined = departmentService.findOne(
    Number(req.params.id)
  );
  return res.status(200).send({ data: department });
}
