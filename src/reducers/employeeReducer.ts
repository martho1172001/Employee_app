import { createReducer } from '@reduxjs/toolkit';
import { createEmployee, deleteEmployee, saveEmployee } from '../actions/employeeAction';
import { EmployeeType } from '../actions/employeeAction';

const initialState = [
  {
    id: 4,
    name: 'Ashok',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: 'Active',
    experience: 5,
    role: 'HR',
    departmentId: 3,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    id: 6,
    name: 'aishu',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: 'Active',
    experience: 5,
    role: 'Developer',
    departmentId: 1,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  },
  {
    id: 5,
    name: 'rishi',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: 'Active',
    experience: 5,
    role: 'HR',
    departmentId: 2,
    address: {
      address_line_1: 'Edachira',
      address_line_2: 'Kakkanad',
      city: 'Ernakulam',
      state: 'Kerala',
      country: 'India',
      pincode: '682024'
    }
  }
] as Array<EmployeeType>;

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(createEmployee, (state, action) => {
    state = [...state, action.payload.employee];

    return state;
  });
  builder.addCase(saveEmployee, (state, action) => {
    const index = state.findIndex((item) => item.id === action.payload.employee.id);

    if (index > -1) state.splice(index, 1);
    state = [...state, action.payload.employee];

    return state;
  });

  builder.addCase(deleteEmployee, (state, action) => {
    const index = state.findIndex((item) => item.id === action.payload.id);

    if (index > -1) state.splice(index, 1);

    return state;
  });
});

// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newState = [...state, action.payload.employee];

//       return newState;
//     }
//     case 'EMPLOYEE:SAVE': {
//       const index = state.findIndex((item) => item.id === action.payload.employee.id);
//       const State = [...state];

//       if (index > -1) State.splice(index, 1);
//       const newState = [...State, action.payload.employee];

//       return newState;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const index = state.findIndex((item) => item.id === action.payload.id);
//       const newState = [...state];

//       if (index > -1) newState.splice(index, 1);

//       return newState;
//     }
//     default:
//       return state;
//   }
// };

export default employeeReducer;
