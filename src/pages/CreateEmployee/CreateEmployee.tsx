import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { createEmployee } from './../../actions/employeeAction';
import { useCreateNewEmployeeMutation } from '../../services/employeeApi';
import { useGetDepartmentsQuery, useGetRolesQuery } from '../../services/dropDownApi';
// import { useGetRolesQuery } from '../../services/dropDownApi';
export const department = {
  Frontend: 1,
  Backend: 2,
  DevOps: 3,
  QA: 4
};

// export const rolesData = data.data;
const CreateEmployee = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: rolesData } = useGetRolesQuery();
  const { data: departmentData } = useGetDepartmentsQuery();
  const departments = {};
  const departmentNames = [];

  const [details, setDetails] = useState({
    name: '',
    joiningDate: '',
    experience: '',
    department: 'Frontend',
    role: 'HR',
    isActive: 'Active',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    usernameCreate: '',
    passwordCreate: '',
    country: '',
    pincode: ''
  });
  const onChange = (key, value) => {
    const tempDetails = { ...details };

    tempDetails[key] = value;
    console.log(tempDetails);
    setDetails(tempDetails);
  };

  const [errorstate, seterrorstate] = useState(false);
  const [createNewEmployee, { error, isSuccess }] = useCreateNewEmployeeMutation();

  if (!rolesData || !departmentData) return <div>loading...</div>;
  departmentData.data.forEach((item) => {
    departments[item.name] = item.id;
    departmentNames.push(item.name);
  });
  console.log(departments);

  const handleCreate = () => {
    createNewEmployee({
      name: details.name,
      joiningDate: details.joiningDate,
      username: details.usernameCreate,
      password: details.passwordCreate,
      isActive: details.isActive,
      experience: Number(details.experience),
      role: details.role,
      departmentId: departments[details.department],
      address: {
        address_line_1: details.addressLine1,
        address_line_2: details.addressLine2,
        city: details.city,
        state: details.state,
        country: details.country,
        pincode: details.pincode
      }
    });
  };

  if (error) {
    seterrorstate(true);
    console.log(error);
  }
  if (isSuccess) navigate('/employees');

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
                type='text'
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

          <div className='create-newsection createsection'>
            <div className='label-input placeholder'>
              <Input
                label='Username'
                type='text'
                value={details.usernameCreate}
                onChange={(e) => onChange('usernameCreate', e)}
                placeholder='Username'
              />
              {console.log(details.usernameCreate)}
            </div>
            <div className='label-input placeholder'>
              <Input
                label='Password'
                type='password'
                value={details.passwordCreate}
                onChange={(e) => onChange('passwordCreate', e)}
                placeholder='Password'
              />
            </div>
          </div>
          <div className='create-secondsection createsection'>
            <div className='label-input'>
              <DropDown
                label='Department'
                options={departmentNames}
                value={details.department}
                onChange={(e) => onChange('department', e)}
              />
            </div>
            <div className='label-input'>
              <DropDown
                label='Role'
                options={rolesData.data}
                value={details.role}
                onChange={(e) => onChange('role', e)}
              />
            </div>
            <div className='label-input'>
              <DropDown
                label='Status'
                options={['Active', 'Inactive', 'Probation']}
                value={details.isActive}
                onChange={(e) => onChange('isActive', e)}
              />
            </div>
          </div>
          <div className='create-thirdsection createsection'>
            <div className='label-input first '>
              <Input
                label='Address'
                type='text'
                value={details.addressLine1}
                onChange={(e) => onChange('addressLine1', e)}
                placeholder='Address line1'
              />
            </div>
            <div className='label-input display-none '>
              <Input
                label='address line 2'
                type='text'
                value={details.addressLine2}
                onChange={(e) => onChange('addressLine2', e)}
                placeholder='Address line2'
              />
            </div>
            <div className='label-input display-none  '>
              <Input
                label='city'
                type='text'
                value={details.city}
                onChange={(e) => onChange('city', e)}
                placeholder='City'
              />
            </div>
          </div>
          <div className='create-thirdsection createsection'>
            <div className='label-input first display-none '>
              <Input
                label='state'
                type='text'
                value={details.state}
                onChange={(e) => onChange('state', e)}
                placeholder='State'
              />
            </div>
            <div className='label-input display-none '>
              <Input
                label='country'
                type='text'
                value={details.country}
                onChange={(e) => onChange('country', e)}
                placeholder='Country'
              />
            </div>
            <div className='label-input display-none  '>
              <Input
                label='pincode'
                type='text'
                value={details.pincode}
                onChange={(e) => onChange('pincode', e)}
                placeholder='Pincode'
              />
            </div>
          </div>
          <div className='create-submitsection createsection'>
            <Button type='enabled' text='Create' onClick={handleCreate} />
            <Button type='disabled' text='Cancel' onClick={handleCancel} />
          </div>
          <div>
            {errorstate && <div className='errorCreate'>Please enter the valid details</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
