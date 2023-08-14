/* eslint-disable no-debugger */
import { useNavigate } from 'react-router-dom';
import Status from '../Status/Status';
import './styles.css';
import Action from '../Action/Action';
import { useSelector } from 'react-redux';

const Table = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const data = useSelector((state: any) => {
    // eslint-disable-next-line no-debugger
    console.log(state.employees);

    return state.employees;
  });
  const onDeleteClick = () => {
    return props.onDeleteClick;
  };

  const theaders = [
    'Employee Name',
    'Employee ID',
    'Joining Date',
    'Role',
    'Status',
    'Experience',
    'Action'
  ];

  const navigate = useNavigate();

  const theaderDiv = theaders.map((item) => (
    <td className='theader' key={item}>
      {item}
    </td>
  ));
  const tbodydiv = data.map((item) => (
    <>
      <tr className='table-row' key={item.id}>
        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'name' + item.name}
        >
          {item.name}
        </td>
        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'id' + item.id}
        >
          {item.id}
        </td>
        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'date' + item.joiningDate}
        >
          {item.joiningDate}
        </td>
        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'role' + item.role}
        >
          {item.role}
        </td>

        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'status' + item.id}
        >
          <Status isactive={item.isActive} />
        </td>
        <td
          className='tcell'
          onClick={() => navigate(`/employees/${item.id}`)}
          key={'exp' + item.experience}
        >
          {item.experience} Years
        </td>
        <td className='tcell' key={'action' + item.id}>
          <Action emp_id={item.id} onDeleteClick={onDeleteClick} deleteId={props.deleteId} />
        </td>
      </tr>
    </>
  ));

  return (
    <>
      <table>
        <thead>
          <tr key='head' className='table-heading'>
            {theaderDiv}
          </tr>
        </thead>
        <tbody>{tbodydiv}</tbody>
      </table>
    </>
  );
};

export default Table;
