import { useState, type FC, useEffect } from 'react';
import './styles.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

//import loginImg from '../../../public/assets/img/banner';
// import banner from './banner.png';

const Login: FC = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('Authkey');

  if (auth) navigate('/employees');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const onChangeUsername=(e)=>{
  //   setUsername(e.target.value)
  // }
  const [showError, setShowError] = useState(false);

  const [login, { data, isSuccess }] = useLoginMutation();
  const handleSubmit = () => {
    console.log(username, password);

    if (!(username && password)) {
      setShowError(true);
      console.log(showError);
    }
    login({
      username: username,
      password: password
    });
  };

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('Authkey', data.data.token);
      localStorage.setItem('Role', data.data.employeeDetails.role);
      navigate('/employees');
    }
  }, [data, isSuccess]);

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
            login='loginInput'
          />
          <Input
            label='Password'
            type='password'
            value={password}
            onChange={setPassword}
            placeholder='Password'
            login='loginInput'
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
