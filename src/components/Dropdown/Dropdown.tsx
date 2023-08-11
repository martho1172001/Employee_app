import './styles.css';
function DropDown(props) {
  console.log(props.options);
  const data = props.options;

  const options = () =>
    data.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));

  console.log(options());

  return (
    <>
      <div className='dropdown'>
        <label>{props.label}</label>

        <select>{options()}</select>
      </div>
    </>
  );
}

export default DropDown;
