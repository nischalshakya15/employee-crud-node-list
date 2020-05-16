import { Employee } from '../domain/Employee';
import * as departmentService from '../service/DepartmentService';
import { ResourceNotFoundException } from '../middlewares/ResourceNotFoundException';

let employees: Array<Employee> = [
  {
    id: 1,
    firstName: 'Chris',
    lastName: 'Bane',
    phoneNumber: 9813456890,
    salary: 10000,
    department: departmentService.findOne(1),
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: 2,
    firstName: 'Mark',
    lastName: 'Angel',
    phoneNumber: 9813456890,
    salary: 10000,
    department: departmentService.findOne(2),
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];

let id = 3;

export function findAll(): Array<Employee> {
  return employees;
}

export function create(employee: Employee): Employee {
  employee = {
    id: getId(),
    firstName: employee.firstName,
    lastName: employee.lastName,
    salary: employee.salary,
    phoneNumber: employee.phoneNumber,
    department: departmentService.findOne(employee.department.id),
    createdDate: new Date(),
    updatedDate: null,
  };
  employees.push(employee);
  return employees[employees.length - 1];
}

export function update(employee: Employee): Employee {
  const index: number = employees.findIndex((e) => e.id === employee.id);
  employees[index] = {
    id: employee.id,
    firstName: employee.firstName,
    lastName: employee.lastName,
    phoneNumber: employee.phoneNumber,
    salary: employee.salary,
    department: departmentService.findOne(employee.department.id),
    updatedDate: new Date(),
  };
  return employees[index];
}

export function remove(id: number): void {
  const employee: Employee = findOne(id);
  employees = employees.filter((e) => e.id !== employee.id);
}

export function findOne(id: number): Employee {
  const employee = employees.find((e) => e.id === id);
  if (!employee) {
    throw new ResourceNotFoundException(
      `Employee with given id ${id} not found`
    );
  }
  return employee;
}

function getId(): number {
  return id++;
}
