import { type FC } from 'react';
import './styles/global.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EditEmployee from './pages/EditEmployee/EditEmployee';
import Main from './pages/Main/Main';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<EmployeeList />} />
          <Route path='/employees/:id' element={<EmployeeDetails />} />
          <Route path='/employees/edit/:id' element={<EditEmployee />} />

          <Route path='/employees/create' element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
