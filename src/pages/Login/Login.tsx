import { useState, type FC } from 'react';
import './styles.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

//import loginImg from '../../../public/assets/img/banner';
// import banner from './banner.png';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const onChangeUsername=(e)=>{
  //   setUsername(e.target.value)
  // }
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log(username, password);
    if (username && password) {
      navigate('/employees');
    } else {
      setShowError(true);
      console.log(showError);
    }
  };

  return (
    <div className='main-container'>
      <section className='subsection-left'>
        <div className='circular-bg'>
          <img src='/assets/img/banner.png' alt='Login' />
        </div>
      </section>

      <section className='subsection-right'>
        <div className='login-logo'>
          <img src='assets/img/kv-logo.png' alt='Login' />
        </div>
        <div className='login-input'>
          <Input
            label='Username'
            type='text'
            value={username}
            onChange={setUsername}
            placeholder='Username'
          />
          <Input
            label='Password'
            type='password'
            value={password}
            onChange={setPassword}
            placeholder='Password'
          />
        </div>
        <div className='submit-button'>
        <Button text='Login' type='filled-btn' onClick={handleSubmit} />
        {showError && <div className='error'>Please enter the username and password</div>}
        </div>
      </section>
    </div>
  );
};

export default Login;
