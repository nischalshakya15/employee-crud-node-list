import { BaseDomain } from './BaseDomain';

export interface Department extends BaseDomain {
  name: string;
  description?: string;
}
