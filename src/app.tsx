import { type FC } from 'react';
import './styles/global.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<EmployeeList />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />

          <Route path='/employees/create' element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
