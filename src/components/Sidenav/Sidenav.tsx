import './styles.css';
const Sidenav = () => {
  return (
    <aside>
      <div className='sidebar'>
        <img src='/assets/img/kv-logo.png' alt='Login' />

        <div className='sidenav'>
          <div className='circular-icon'>
            <img src='/assets/icons/employees.svg' alt='Logo' />
          </div>
          <div className='sidenav-heading'>
            <h6>Employee list</h6>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidenav;
