import Button from '../Button/Button';
import './styles.css';
import { useDeleteEmployeeByIdMutation } from '../../services/employeeApi';
import { useState } from 'react';

function DeletePopup(props) {
  const [render, setrender] = useState(true);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [deleteTrigger, { data }] = useDeleteEmployeeByIdMutation();
  const handleDelete = async () => {
    try {
      const payload = await deleteTrigger(props.deleteId.current);

      console.log(payload);
    } catch (error) {
      console.error('rejected', error);
    }
    setrender(!render);

    return props.onDeleteClick(false);
  };

  return (
    <div className='overlay'>
      <div className='modal'>
        <img
          className='close'
          onClick={() => props.onDeleteClick(false)}
          src='/assets/icons/close.svg'
          data-testid='popup-img-test'
        ></img>
        <h6>Are you sure ?</h6>
        <p>Do you really want to delete this employee ?</p>
        <div className='button-class'>
          <Button
            text='Confirm'
            type='enabled'
            onClick={() => {
              handleDelete();
            }}
          />
          <Button text='Cancel' type='disabled' onClick={() => props.onDeleteClick(false)} />
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
