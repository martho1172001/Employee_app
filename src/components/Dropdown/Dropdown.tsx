import './styles.css';
const DropDown = (props) => {
  const options = () =>
    props.options.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  return (
    <>
      <div className='input-div'>
        <label>{props.label}</label>

        <select onChange={(e) => props.onChange(e.target.value)}>{options()}</select>
      </div>
    </>
  );
};

export default DropDown;
