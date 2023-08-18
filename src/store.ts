import { configureStore } from '@reduxjs/toolkit';
import employeeReducer from './reducers/employeeReducer';
import employeeService from './services/employeeApi';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeService.reducerPath]: employeeService.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), employeeService.middleware]
});

export default store;
