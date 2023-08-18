import './styles.css';

const Status = (props) => {
  const statusCodes = {
    true: { label: 'Active', classname: 'active' },
    false: { label: 'Inactive', classname: 'inactive' },
    Active: { label: 'Active', classname: 'active' },
    Inactive: { label: 'Inactive', classname: 'inactive' },
    Probation: { label: 'Probation', classname: 'probation' }
  };

  return (
    <div className='status'>
      <div className={statusCodes[props.isactive].classname}>
        {statusCodes[props.isactive].label}
      </div>
    </div>
  );
};

export default Status;
