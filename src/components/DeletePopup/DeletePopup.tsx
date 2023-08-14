/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from '../Button/Button';
import './styles.css';
function DeletePopup(props) {

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
              console.log(`employee deleted id ${props.deleteId.current}`);

              return props.onDeleteClick(false);
            }}
          />
          <Button text='Cancel' type='disabled' onClick={() => props.onDeleteClick(false)} />
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
