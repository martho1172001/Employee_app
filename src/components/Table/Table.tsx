import { useNavigate } from 'react-router-dom';
import Status from '../Status/Status';
import './styles.css';
export const data = [
  {
    id: 4,
    name: 'linette',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: false,
    experience: 9,
    role: 'Developer',
    departmentId: 3
  },
  {
    id: 3,
    name: 'devi',
    joiningDate: '2011-10-02T00:00:00.000Z',
    isActive: true,
    experience: 9,
    role: 'HR',
    departmentId: 3
  },
  {
    id: 1,
    name: 'Ashok',
    joiningDate: '2012-10-02T00:00:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2
  },
  {
    id: 6,
    name: 'Ashok k',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: false,
    experience: 8,
    role: 'HR',
    departmentId: 2
  },
  {
    id: 8,
    name: 'Ashok',
    joiningDate: '2012-11-01T18:30:00.000Z',
    isActive: true,
    experience: 8,
    role: 'HR',
    departmentId: 2
  }
];

const Table = () => {
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
      <tr className='table-row' onClick={() => navigate(`/employees/${item.id}`)}>
        <td className='tcell' key={item.name}>
          {item.name}
        </td>
        <td className='tcell' key={item.id}>
          {item.id}
        </td>
        <td className='tcell' key={item.joiningDate}>
          {item.joiningDate}
        </td>
        <td className='tcell' key={item.role}>
          {item.role}
        </td>

        <td className='tcell' key={item.id}>
          <Status isactive={item.isActive} />
        </td>
        <td className='tcell' key={item.experience}>
          {item.experience}
        </td>
        <td className='tcell' key={item.id}>
          action
        </td>
      </tr>
    </>
  ));

  console.log(data);

  return (
    <>
      <table>
        <thead>
          <tr className='table-heading'>{theaderDiv}</tr>
        </thead>
        <tbody>{tbodydiv}</tbody>
      </table>
    </>
  );
};

export default Table;
