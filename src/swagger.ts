import {
  deleteDepartment,
  departments,
  getDepartments,
  getOneDepartment,
  postDepartments,
  putDepartments
} from './swagger/deparments.swagger';
import {
  deleteEmployee,
  employees,
  getEmployees,
  getOneEmployee,
  postEmployees,
  putEmployees
} from './swagger/employee.swagger';

export const swaggerDocument = {
  swagger: '2.0',
  info: {
    version: '1.0.0',
    title: 'Employee CRUD API DOCUMENTATION'
  },
  basePath: '/api',
  tags: [
    {
      name: 'Departments'
    },
    {
      name: 'Employees'
    }
  ],
  paths: {
    '/departments': {
      get: getDepartments,
      post: postDepartments
    },
    '/departments/{id}': {
      get: getOneDepartment,
      put: putDepartments,
      delete: deleteDepartment
    },
    '/employees': {
      get: getEmployees,
      post: postEmployees
    },
    '/employees/{id}': {
      get: getOneEmployee,
      put: putEmployees,
      delete: deleteEmployee
    }
  },
  definitions: {
    Departments: departments,
    Employees: employees
  }
};
