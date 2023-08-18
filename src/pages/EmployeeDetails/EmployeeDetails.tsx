import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
// import { data } from '../..//components/Table/Table';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import './styles.css';
// import { useSelector } from 'react-redux';
import { useGetEmployeeByIdQuery } from '../../services/employeeApi';
// import { useGetRolesQuery } from '../../services/dropDownApi';
// import { roles } from '../../utils/roles.util';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickEdit = () => {
    console.log('edit employee clicked');
    navigate(`/employees/edit/${id}`);
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  // const data = useSelector((state: any) => {
  //   // eslint-disable-next-line no-debugger
  //   console.log(state.employees);
  //   // eslint-disable-next-line no-debugger

  //   return state.employees;
  // });
  // const emp = data.find((item) => Number(id) === item.id);
  const { data } = useGetEmployeeByIdQuery(Number(id));

  console.log(data);

  if (!data) return <div>loading...</div>;

  return (
    <div className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header className='blank-container' />
        <SubHeading
          heading='Employee Details'
          buttontext='Edit '
          imgSrc='/assets/icons/edit.png'
          classname='edit-icon-white'
          onClick={handleClickEdit}
        />
        <EmployeeCard data={data.data} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
