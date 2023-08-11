import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import './styles.css';
const EmployeeList = () => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate('/employees/create');
    console.log('create employee clicked');
  };

  return (
    <body className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header />
        <SubHeading
          heading='Employee List'
          buttontext='Create employee '
          imgSrc='/assets/icons/add.png'
          onClick={handleClickCreate}
        />
        <Table />
      </div>
    </body>
  );
};

export default EmployeeList;
