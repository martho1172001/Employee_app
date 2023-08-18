const CardDiv = (props) => {
  return (
    <div className='sub-detail' data-testid='carddiv-div-test'>
      <label className='label' data-testid='carddiv-label-test'>
        {props.label}
      </label>
      <div className='value' data-testid='carddiv-innerdiv-test'>
        {props.data}
      </div>
    </div>
  );
};

export default CardDiv;
