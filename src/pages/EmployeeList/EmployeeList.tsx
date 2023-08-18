/* eslint-disable no-unused-vars */
import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table/Table';
import './styles.css';
import DeletePopup from '../../components/DeletePopup/DeletePopup';
import { useRef, useState } from 'react';
import { useGetEmployeeListQuery } from '../../services/employeeApi';
const EmployeeList = () => {
  const navigate = useNavigate();

  const handleClickCreate = () => {
    navigate('/employees/create');
    console.log('create employee clicked');
  };
  const { data } = useGetEmployeeListQuery();

  console.log(data);
  console.log('rendred');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showPopup, setShowPopup] = useState(false);
  const deleteid = useRef(0);

  console.log(showPopup);

  if (!data) return <div>loading...</div>;

  return (
    <div className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header className='blank-container' />
        <SubHeading
          heading='Employee List'
          buttontext='Create employee '
          imgSrc='/assets/icons/add.png'
          onClick={handleClickCreate}
        />
        <Table onDeleteClick={setShowPopup} deleteId={deleteid} data={data.data} />
      </div>
      {showPopup && <DeletePopup onDeleteClick={setShowPopup} deleteId={deleteid} />}
    </div>
  );
};

export default EmployeeList;
