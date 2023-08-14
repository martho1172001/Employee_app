import React from 'react';
import './styles.css';
import Status from '../Status/Status';

const EmployeeCard = (props) => {
  return (
    <div className='details-card'>
      <div className='detail-section'>
        <div className='sub-detail'>
          <label className='label'>Employee Name</label>
          <div className='value'>{props.data.name}</div>
        </div>
        <div className='sub-detail'>
          <label className='label'>Joining Date</label>
          <div className='value'>{props.data.joiningDate}</div>
        </div>
        <div className='sub-detail'>
          <label className='label'>Experience</label>
          <div className='value'>{props.data.experience} yrs</div>
        </div>
        <div className='sub-detail'>
          <label className='label'>Role</label>
          <div className='value'>{props.data.role}</div>
        </div>
        <div className='sub-detail'>
          <label className='label'>Status</label>
          <Status isactive={props.data.isActive} />
        </div>
      </div>
      <div className='line'></div>
      <div className='detail-section'>
        <div className='sub-detail'>
          <label className='label'>Address</label>
          <div className='value'>
            {props.data.address.houseName}
            <br /> {props.data.address.line1}
            <br /> {props.data.address.line2}
          </div>
        </div>
        <div className='sub-detail'>
          <label className='label'>Employee ID</label>
          <div className='value'>{props.data.id}</div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
