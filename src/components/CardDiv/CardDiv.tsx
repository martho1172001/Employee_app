const CardDiv = (props) => {
  return (
    <div className='sub-detail'>
      <label className='label'>{props.label}</label>
      <div className='value'>{props.data}</div>
    </div>
  );
};

export default CardDiv;
