import { BaseDomain } from './BaseDomain';
import { Department } from './Department';

export interface Employee extends BaseDomain {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  salary: number;
  department: Department;
}
