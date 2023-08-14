import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from '../../components/Table/Table';

const EditEmployee = () => {
  const { id } = useParams();

  const emp = data.find((item) => Number(id) === item.id);

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
    setDetails(tempDetails);
  };
  const handleCreate = () => {
    console.log(details);
  };
  const handleCancel = () => {
    navigate('/employees');
  };

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
                  value={details.name}
                  onChange={(e) => onChange('name', e)}
                  placeholder={emp.name}
                />
              </div>

              <div className='label-input placeholder'>
                <Input
                  label='Joining Date'
                  type='date'
                  value={details.joiningDate}
                  onChange={(e) => onChange('joiningDate', e)}
                  placeholder={emp.joiningDate}
                />
              </div>
              <div className='label-input placeholder'>
                <Input
                  label='Experience'
                  type='number'
                  value={details.experience}
                  onChange={(e) => onChange('experience', e)}
                  placeholder={emp.experience.toString()}
                />
              </div>
            </div>

            <div className='form-secondsection formsection'>
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
            <div className='formsection edit '>
              <div className='form-thirdsection '>
                <div className='label-input first'>
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
              <div className='form-fourthsection'>
                <div className='label-input disabled-input '>
                  <Input
                    label='Employee ID'
                    type='text'
                    value={emp.id}
                    onChange={() => {}}
                    placeholder={emp.id.toString()}
                  />
                </div>
              </div>
            </div>
            <div className='form-submitsection formsection'>
              <Button type='enabled' text='Save' onClick={handleCreate} />
              <Button type='disabled' text='Cancel' onClick={handleCancel} />
            </div>
          </div>
        </div>
      </div>
      <Header className='bottom' />
    </div>
  );
};

export default EditEmployee;
