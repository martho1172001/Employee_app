const initialState = [
  {
    id: 4,
    name: 'linette',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: false,
    experience: 9,
    role: 'Developer',
    departmentId: 3,
    address: {
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 3,
    name: 'devi',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: true,
    experience: 9,
    role: 'HR',
    departmentId: 3,
    address: {
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '2012-10-02T00:00:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address: {
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 6,
    name: 'Ashok k',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: false,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address: {
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 8,
    name: 'Ashok',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address: {
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  }
];
const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employee];

      console.log(newState);

      return newState;
    }
    case 'EMPLOYEE:SAVE': {
      console.log(action.payload);
      const index = state.findIndex((item) => item.id === action.payload.employee.id);
      const State = [...state];

      console.log(state);
      console.log(State);

      if (index > -1) State.splice(index, 1);
      console.log(index);
      const newState = [...State, action.payload.employee];

      console.log(newState);

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const index = state.findIndex((item) => item.id === action.payload.id);
      const newState = [...state];

      if (index > -1) newState.splice(index, 1);

      return newState;
    }
    default:
      return state;
  }
};

export default employeeReducer;
