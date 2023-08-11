import './styles.css';

const Status = (props) => {
  const statusCodes = {
    true: { label: 'Active', classname: 'active' },
    false: { label: 'Inactive', classname: 'inactive' }
  };

  return (
    <>
      <div className={statusCodes[props.isactive].classname}>
        {statusCodes[props.isactive].label}
      </div>
    </>
  );
};

export default Status;
