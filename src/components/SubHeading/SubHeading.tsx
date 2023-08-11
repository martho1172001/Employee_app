import './styles.css';

const SubHeading = (props) => {
  return (
    <>
      <div className='sub-header'>
        <h2>{props.heading}</h2>
        {props.imgSrc && (
          <div className='header-button' onClick={props.onClick}>
            <div className='circular-icon-header'>
              <img src={props.imgSrc} alt='Logo' />
            </div>
            <h6>{props.buttontext}</h6>
          </div>
        )}
      </div>
    </>
  );
};

export default SubHeading;
