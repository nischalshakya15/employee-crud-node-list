import { Department } from '../domain/Department';
import { ResourceNotFoundException } from '../middlewares/ResourceNotFoundException';

let departments: Array<Department> = [
  {
    id: 1,
    name: 'Hr',
    description: 'Human Resource',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
  {
    id: 2,
    name: 'Sales',
    description: 'Sales forecasting and management',
    createdDate: new Date(),
    updatedDate: new Date(),
  },
];

let id = 3;

export function findAll(): Array<Department> {
  return departments;
}

export function create(department: Department): Department {
  department = {
    id: getId(),
    name: department.name,
    description: department.description ? department.description : null,
    createdDate: new Date(),
    updatedDate: null,
  };
  departments.push(department);
  return departments[departments.length - 1];
}

export function update(department: Department): Department {
  const index: number = departments.findIndex((d) => d.id == department.id);
  departments[index] = {
    id: department.id,
    name: department.name,
    description: department.description,
    createdDate: department.createdDate,
    updatedDate: new Date(),
  };
  return departments[index];
}

export function remove(id: number): void {
  const department: Department = findOne(id);
  departments = departments.filter((d) => d.id !== department.id);
}

export function findOne(id: number): Department {
  const department = departments.find((d) => d.id === id);
  if (!department) {
    throw new ResourceNotFoundException(`Department with given id not found`);
  }
  return department;
}

function getId(): number {
  return id++;
}
