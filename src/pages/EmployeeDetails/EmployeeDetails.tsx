import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import { data } from '../..//components/Table/Table';
import { useParams } from 'react-router-dom';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard';

const EmployeeDetails = () => {
  const handleClickEdit = () => {
    console.log('edit employee clicked');
  };
  const { id } = useParams();

  const emp = data.find((item) => Number(id) === item.id);

  return (
    <body className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header />
        <SubHeading
          heading='Employee Details'
          buttontext='Edit '
          imgSrc='/assets/icons/edit.svg'
          onClick={handleClickEdit}
        />
        <EmployeeCard data={emp} />
      </div>
    </body>
  );
};

export default EmployeeDetails;
