import SubHeading from '../../components/SubHeading/SubHeading';
import Header from '../../components/Header/Header';
import Sidenav from '../../components/Sidenav/Sidenav';
import './styles.css';
import { useState } from 'react';
import Input from '../../components/Input/Input';
import DropDown from '../../components/Dropdown/Dropdown';
import Button from '../../components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const EditEmployee = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const data = useSelector((state: any) => {
    // eslint-disable-next-line no-debugger
    console.log(state.employees);
    // eslint-disable-next-line no-debugger

    return state.employees;
  });
  const emp = data.find((item) => Number(id) === item.id);

  const navigate = useNavigate();

  const [savedetails, setDetails] = useState({
    id: emp.id,
    name: emp.name,
    joiningDate: emp.joiningDate,
    experience: emp.experience,
    department: emp.department,
    role: emp.role,
    isActive: emp.isActive,
    addressHouse: emp.address.addressHouse,
    addressLine1: emp.address.addressLine1,
    addressLine2: emp.address.addressLine2
  });
  const onChange = (key, value) => {
    const tempDetails = { ...savedetails };

    tempDetails[key] = value;
    console.log(tempDetails);
    setDetails(tempDetails);
  };
  const handleSave = () => {
    console.log(savedetails);
    console.log('dispatched');
    dispatch({
      type: 'EMPLOYEE:SAVE',
      payload: {
        employee: {
          id: savedetails.id,
          name: savedetails.name,
          joiningDate: savedetails.joiningDate,
          isActive: savedetails.isActive,
          experience: savedetails.experience,
          role: savedetails.role,
          departmentId: savedetails.department,
          address: {
            houseName: savedetails.addressHouse,
            line1: savedetails.addressLine1,
            line2: savedetails.addressLine2
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
                  type='date'
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

            <div className='form-secondsection formsection'>
              <div className='label-input'>
                <DropDown
                  label='Department'
                  options={['Frontend', 'Backend', 'DevOps', 'QA']}
                  value={savedetails.department}
                  onChange={(e) => onChange('department', e)}
                />
              </div>
              <div className='label-input'>
                <DropDown
                  label='Role'
                  options={['HR', 'Developer', 'Design']}
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
                <div className='label-input first'>
                  <Input
                    label='Address'
                    type='text'
                    value={savedetails.addressHouse}
                    onChange={(e) => onChange('addressHouse', e)}
                    placeholder='Address house name'
                  />
                </div>
                <div className='label-input'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.addressLine1}
                    onChange={(e) => onChange('addressLine1', e)}
                    placeholder='Address line1'
                  />
                </div>
                <div className='label-input'>
                  <Input
                    label=''
                    type='text'
                    value={savedetails.addressLine2}
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
              <Button type='enabled' text='Save' onClick={handleSave} />
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
