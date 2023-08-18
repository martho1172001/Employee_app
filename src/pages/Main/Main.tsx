import { useNavigate } from 'react-router-dom';
import './styles.css';

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className='main' onClick={() => navigate('/login')}>
      <div className='main-header'>
        <img src='/assets/img/kv-logo.png'></img>
      </div>

      <div className='inner-div'>
        <p>Keyvalue</p>
        <h6>Employee Application</h6>
      </div>
    </div>
  );
};

export default Main;
