import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
// import DropDown from '@app/components/Dropdown/Dropdown';
const CreateEmployee = () => {
  //   const navigate = useNavigate();

  //   const handleClickCreate = () => {
  //     navigate('/login');
  //     console.log('create employee clicked');
  //   };
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
    setDetails(tempDetails);
    console.log(details);
  };

  return (
    <body className='overall-flex'>
      <Sidenav />
      <div className='create-body'>
        <Header />
        <SubHeading heading='Create Employee' />
        <div className='create-form'>
          <div className='form-firstsection formsection'>
            <div className='label-input'>
              <Input
                label='Employee Name'
                type='text'
                value={details.name}
                onChange={(e) => onChange('name', e)}
                placeholder='Employee Name'
              />
            </div>

            <div className='label-input'>
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

          <div className='form-secondsection formsection'>
            <div className='label-input'>
              <DropDown
                label='Department'
                options={['frontend', 'backend', 'devops', 'qa']}
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
          <div className='form-thirdsection formsection'>
            <div className='label-input'>
              <Input
                label='Address'
                type='text'
                value={details.addressHouse}
                onChange={(e) => onChange('addressHouse', e)}
                placeholder='Address house name'
              />
            </div>
            <div className='label-input'>
              <Input
                label=''
                type='text'
                value={details.addressLine1}
                onChange={(e) => onChange('addressLine1', e)}
                placeholder='Address line1'
              />
            </div>
            <div className='label-input'>
              <Input
                label=''
                type='text'
                value={details.addressLine2}
                onChange={(e) => onChange('addressLine2', e)}
                placeholder='Address line2'
              />
            </div>
          </div>
          <div className='form-submitsection formsection'></div>
        </div>
      </div>
    </body>
  );
};

export default CreateEmployee;
