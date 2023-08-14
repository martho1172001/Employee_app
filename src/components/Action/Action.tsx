import { useNavigate } from 'react-router-dom';
import './styles.css';

const Action = (props) => {
  const navigate = useNavigate();

  return (
    <div className='action'>
      <img
        className='delete-icon'
        onClick={props.onDeleteClick(true)}
        onClickCapture={() => (props.deleteId.current = props.emp_id)}
        src='/assets/icons/delete.png'
      ></img>
      <img
        className='edit-icon'
        onClick={() => navigate(`/employees/edit/${props.emp_id}`)}
        src='/assets/icons/edit.png'
      ></img>
    </div>
  );
};

export default Action;
