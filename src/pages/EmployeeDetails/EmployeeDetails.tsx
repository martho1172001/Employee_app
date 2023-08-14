import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import { data } from '../..//components/Table/Table';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';
import './styles.css';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickEdit = () => {
    console.log('edit employee clicked');
    navigate(`/employees/edit/${id}`);
  };

  const emp = data.find((item) => Number(id) === item.id);

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
        <EmployeeCard data={emp} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
