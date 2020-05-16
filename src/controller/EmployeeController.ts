import { Request, Response } from 'express';
import * as employeeService from '../service/EmployeeService';
import { Employee } from '../domain/Employee';
import * as HttpStatus from 'http-status-codes';

export function findAll(
  req: Request,
  res: Response
): Response<Array<Employee>> {
  const employees: Array<Employee> = employeeService.findAll();
  return res.status(HttpStatus.OK).send({ data: employees });
}

export function create(req: Request, res: Response): Response<Employee> {
  const employee: Employee = employeeService.create(req.body);
  return res.status(HttpStatus.CREATED).send({ data: employee });
}

export function update(req: Request, res: Response): Response<Employee> {
  const employee: Employee = employeeService.update(req.body);
  return res.status(HttpStatus.OK).send({ data: employee });
}

export function remove(req: Request, res: Response): Response<Array<Employee>> {
  employeeService.remove(Number(req.params.id));
  return res.status(HttpStatus.OK).send({ data: 'Employee deleted successfully' });
}

export function findOne(req: Request, res: Response): Response<Employee> {
  const employee: Employee = employeeService.findOne(Number(req.params.id));
  return res.status(HttpStatus.OK).send({ data: employee });
}
