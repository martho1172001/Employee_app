import { EMPLOYEE_CREATE, EMPLOYEE_DELETE, EMPLOYEE_SAVE } from '../reducers/types';
import { createAction } from '@reduxjs/toolkit';

export type EmployeeType = {
  id: number;
  name: string;
  username: string;
  password: string;
  joiningDate: string;
  isActive: string;
  experience: number;
  role: string;
  departmentId: number;
  address: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};
export type EmployeeOptType = {
  id: number;
  name: string;
  username: string;
  password?: string;
  joiningDate: string;
  isActive: string;
  experience: number;
  role: string;
  departmentId: number;
  address: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};
export type CreateEmployeeType = {
  name: string;
  username: string;
  password: string;
  joiningDate: string;
  isActive: string;
  experience: number;
  role: string;
  departmentId: number;
  address: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
};

export const createEmployee = createAction<{ employee: EmployeeType }>(EMPLOYEE_CREATE);
export const saveEmployee = createAction<{ employee: EmployeeType }>(EMPLOYEE_SAVE);
export const deleteEmployee = createAction<{ id: number }>(EMPLOYEE_DELETE);
