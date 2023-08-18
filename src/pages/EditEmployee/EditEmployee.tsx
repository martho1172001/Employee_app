import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useEffect, useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery, useSaveNewEmployeeMutation } from '../../services/employeeApi';
import { EmployeeType } from '../../actions/employeeAction';
import { useGetDepartmentsQuery, useGetRolesQuery } from '../../services/dropDownApi';

const EditEmployee = () => {
  // const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useGetEmployeeByIdQuery(Number(id));
  const { data: rolesData } = useGetRolesQuery();
  const { data: departmentData } = useGetDepartmentsQuery();
  const departments = {};
  const departmentNames: String[] = [];
  const [saveNewEmployee, { error, isSuccess }] = useSaveNewEmployeeMutation();

  const [savedetails, setsaveDetails] = useState({
    id: 0,
    name: '',
    joiningDate: '',
    experience: 0,
    departmentId: '',
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

  let emp: EmployeeType = {
    id: 0,
    name: '',
    username: '',
    password: '',
    joiningDate: '',
    isActive: '',
    experience: 0,
    role: '',
    departmentId: 0,
    address: {
      address_line_1: '',
      address_line_2: '',
      city: '',
      state: '',
      country: '',
      pincode: ''
    }
  };

  useEffect(() => {
    let foundKey = null;

    if (data) {
      emp = data.data;

      // Loop through object keys
      for (const key in departments)
        if (departments[key] === emp.departmentId) {
          foundKey = key;
          console.log('found vakue in emp' + foundKey);
          break; // Stop loop once found
        }
    }
    setsaveDetails({
      id: 0,
      name: emp.name,
      usernameCreate: emp.username,
      passwordCreate: '',
      joiningDate: emp.joiningDate,
      experience: emp.experience,
      departmentId: foundKey,
      role: emp.role,
      isActive: emp.isActive,
      addressLine1: emp.address.address_line_1,
      addressLine2: emp.address.address_line_2,
      city: emp.address.city,
      state: emp.address.state,
      country: emp.address.country,
      pincode: emp.address.pincode
    });
  }, [data]);

  const onChange = (key, value) => {
    const tempDetails = { ...savedetails };

    tempDetails[key] = value;
    console.log(tempDetails);
    setsaveDetails(tempDetails);
  };

  const handleSave = () => {
    console.log(savedetails);
    saveNewEmployee({
      id: Number(id),
      name: savedetails.name,
      username: savedetails.usernameCreate,
      password: savedetails.passwordCreate,
      joiningDate: savedetails.joiningDate,
      isActive: savedetails.isActive,
      experience: Number(savedetails.experience),
      role: savedetails.role,
      departmentId: departments[savedetails.departmentId],
      address: {
        city: savedetails.city,
        state: savedetails.state,
        country: savedetails.country,
        pincode: savedetails.pincode,
        address_line_1: savedetails.addressLine1,
        address_line_2: savedetails.addressLine2
      }
    });
  };

  if (error) console.log(error);

  if (isSuccess) navigate('/employees');

  const handleCancel = () => {
    navigate('/employees');
  };

  if (!rolesData || !departmentData) return <div>loading...</div>;
  departmentData.data.forEach((item) => {
    departments[item.name] = item.id;
    departmentNames.push(item.name);
  });

  return (
    <div className='main'>
      <div className='overall-flex'>
        <Sidenav />
        <div className='create-body'>
          <Header className='blank-container' />
          <SubHeading heading='Edit Employee' />
          <div className='create-form'>
            <div className='form-firstsection formsection'>
              <div className='label-input placeholder'>
                <Input
                  label='Employee Name'
                  type='text'
                  value={savedetails.name}
                  onChange={(e) => onChange('name', e)}
                  placeholder={emp.name}
                />
              </div>

              <div className='label-input placeholder'>
                <Input
                  label='Joining Date'
                  type='text'
                  value={savedetails.joiningDate}
                  onChange={(e) => onChange('joiningDate', e)}
                  placeholder={emp.joiningDate}
                />
              </div>
              <div className='label-input placeholder'>
                <Input
                  label='Experience'
                  type='number'
                  value={savedetails.experience}
                  onChange={(e) => onChange('experience', e)}
                  placeholder={emp.experience.toString()}
                />
              </div>
            </div>
            <div className='create-newsection createsection'>
              <div className='label-input placeholder'>
                <Input
                  label='Username'
                  type='text'
                  value={savedetails.usernameCreate}
                  onChange={(e) => onChange('usernameCreate', e)}
                  placeholder='Username'
                />
              </div>
              <div className='label-input placeholder'>
                <Input
                  label='Password'
                  type='password'
                  value={savedetails.passwordCreate}
                  onChange={(e) => onChange('passwordCreate', e)}
                  placeholder='Password'
                />
              </div>
            </div>
            <div className='form-secondsection formsection'>
              <div className='label-input'>
                <DropDown
                  label='Department'
                  options={departmentNames}
                  value={savedetails.departmentId}
                  onChange={(e) => onChange('departmentId', e)}
                />
              </div>
              <div className='label-input'>
                <DropDown
                  label='Role'
                  options={rolesData.data}
                  value={savedetails.role}
                  onChange={(e) => onChange('role', e)}
                />
              </div>
              <div className='label-input'>
                <DropDown
                  label='Status'
                  options={['Active', 'Inactive']}
                  value={savedetails.isActive}
                  onChange={(e) => onChange('isActive', e)}
                />
              </div>
            </div>
            <div className='formsection edit '>
              <div className='form-thirdsection '>
                <div className='label-input first placeholder'>
                  <Input
                    label='Address'
                    type='text'
                    value={savedetails.addressLine1}
                    onChange={(e) => onChange('addressLine1', e)}
                    placeholder='Address line 1'
                  />
                </div>
                <div className='label-input placeholder'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.addressLine2}
                    onChange={(e) => onChange('addressLine2', e)}
                    placeholder='Address line2'
                  />
                </div>
                <div className='label-input placeholder'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.city}
                    onChange={(e) => onChange('city', e)}
                    placeholder='Address city'
                  />
                </div>
              </div>
              <div className='form-thirdsection '>
                <div className='label-input first display-none placeholder  '>
                  <Input
                    label='Address'
                    type='text'
                    value={savedetails.state}
                    onChange={(e) => onChange('state', e)}
                    placeholder='Address state'
                  />
                </div>
                <div className='label-input placeholder'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.country}
                    onChange={(e) => onChange('country', e)}
                    placeholder='Address country'
                  />
                </div>
                <div className='label-input placeholder'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.pincode}
                    onChange={(e) => onChange('pincode', e)}
                    placeholder='Address pincode'
                  />
                </div>
              </div>
              <div className='form-fourthsection'>
                <div className='label-input disabled-input '>
                  <Input
                    label='Employee ID'
                    type='text'
                    value={Number(id)}
                    onChange={() => {}}
                    placeholder={id}
                  />
                </div>
              </div>
            </div>
            <div className='form-submitsection formsection'>
              <Button type='enabled' text='Save' onClick={handleSave} />
              <Button type='disabled' text='Cancel' onClick={handleCancel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
