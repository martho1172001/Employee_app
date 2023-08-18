import React from 'react';
import './styles.css';
import Status from '../Status/Status';
import CardDiv from '../CardDiv/CardDiv';

const EmployeeCard = (props) => {
  return (
    <div className='details-card'>
      <div className='detail-section'>
        <CardDiv label='Employee Name' data={props.data.name} />
        <CardDiv label='Joining Date' data={props.data.joiningDate} />
        <CardDiv label='Experience' data={props.data.experience} />
        <CardDiv label='Role' data={props.data.role} />
        <div className='sub-detail'>
          <label className='label'>Status</label>
          <Status isactive={props.data.isActive} />
        </div>
      </div>
      <div className='line'></div>
      <div className='detail-section'>
        <CardDiv
          label='Address'
          data={`${props.data.address.address_line_1}, ${props.data.address.address_line_2}, ${props.data.address.city}, ${props.data.address.state}, ${props.data.address.country}, ${props.data.address.pincode}`}
        />
        <CardDiv label='Employee ID' data={props.data.id} />
      </div>
    </div>
  );
};

export default EmployeeCard;
