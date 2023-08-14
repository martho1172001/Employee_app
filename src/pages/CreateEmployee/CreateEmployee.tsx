import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CreateEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: '',
    joiningDate: '',
    experience: '',
    department: '',
    role: 'DEVELOPER',
    isActive: '',
    addressHouse: '',
    addressLine1: '',
    addressLine2: ''
  });
  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    console.log(tempDetails);
    setDetails(tempDetails);
  };
  var i = 10;

  const handleCreate = () => {
    console.log(details);
    console.log('dispatched');
    dispatch({
      type: 'EMPLOYEE:CREATE',
      payload: {
        employee: {
          id: i++,
          name: details.name,
          joiningDate: details.joiningDate,
          isActive: details.isActive,
          experience: details.experience,
          role: details.role,
          departmentId: details.department,
          address: {
            houseName: details.addressHouse,
            line1: details.addressLine1,
            line2: details.addressLine2
          }
        }
      }
    });
    navigate('/employees');
  };
  const handleCancel = () => {
    navigate('/employees');
  };

  return (
    <div className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header className='blank-container' />
        <SubHeading heading='Create Employee' />
        <div className='create-form'>
          <div className='create-firstsection createsection'>
            <div className='label-input'>
              <Input
                label='Employee Name'
                type='text'
                value={details.name}
                onChange={(e) => onChange('name', e)}
                placeholder='Employee Name'
              />
            </div>

            <div className='label-input placeholder'>
              <Input
                label='Joining Date'
                type='date'
                value={details.joiningDate}
                onChange={(e) => onChange('joiningDate', e)}
                placeholder='Joining Date'
              />
            </div>
            <div className='label-input'>
              <Input
                label='Experience'
                type='number'
                value={details.experience}
                onChange={(e) => onChange('experience', e)}
                placeholder='Experience'
              />
            </div>
          </div>

          <div className='create-secondsection createsection'>
            <div className='label-input'>
              <DropDown
                label='Department'
                options={['Frontend', 'Backend', 'DevOps', 'QA']}
                value={details.department}
                onChange={(e) => onChange('department', e)}
              />
            </div>
            <div className='label-input'>
              <DropDown
                label='Role'
                options={['HR', 'Developer', 'Design']}
                value={details.role}
                onChange={(e) => onChange('role', e)}
              />
            </div>
            <div className='label-input'>
              <DropDown
                label='Status'
                options={['Active', 'Inactive']}
                value={details.isActive}
                onChange={(e) => onChange('isActive', e)}
              />
            </div>
          </div>
          <div className='create-thirdsection createsection'>
            <div className='label-input first'>
              <Input
                label='Address'
                type='text'
                value={details.addressHouse}
                onChange={(e) => onChange('addressHouse', e)}
                placeholder='Address house name'
              />
            </div>
            <div className='label-input display-none'>
              <Input
                label='address1'
                type='text'
                value={details.addressLine1}
                onChange={(e) => onChange('addressLine1', e)}
                placeholder='Address line1'
              />
            </div>
            <div className='label-input display-none '>
              <Input
                label='address2'
                type='text'
                value={details.addressLine2}
                onChange={(e) => onChange('addressLine2', e)}
                placeholder='Address line2'
              />
            </div>
          </div>
          <div className='create-submitsection createsection'>
            <Button type='enabled' text='Create' onClick={handleCreate} />
            <Button type='disabled' text='Cancel' onClick={handleCancel} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
