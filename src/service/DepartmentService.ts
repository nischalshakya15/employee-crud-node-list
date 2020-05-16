import { Department } from '../domain/Department';

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

export function findAll(): Array<Department> {
  return departments;
}

export function create(department: Department): Department {
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
    updatedDate: department.updatedDate,
  };
  return departments[index];
}

export function remove(id: number): Array<Department> {
  departments = departments.filter((d) => d.id !== id);
  return departments;
}

export function findOne(id: number) {
  return departments.find((d) => d.id === id);
}
