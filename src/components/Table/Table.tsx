import { useNavigate } from 'react-router-dom';
import Status from '../Status/Status';
import './styles.css';
import Action from '../Action/Action';
export const data = [
  {
    id: 4,
    name: 'linette',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: false,
    experience: 9,
    role: 'Developer',
    departmentId: 3,
    address:{
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 3,
    name: 'devi',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: true,
    experience: 9,
    role: 'HR',
    departmentId: 3,
    address:{
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '2012-10-02T00:00:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address:{
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 6,
    name: 'Ashok k',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: false,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address:{
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  },
  {
    id: 8,
    name: 'Ashok',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2,
    address:{
      houseName: 'house name',
      line1: 'address line 1',
      line2: 'address line 2'
    }
  }
];

const Table = (props) => {
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

  console.log(data);

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
