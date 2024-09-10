import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [userNameHelperText, setUserNameHelperText] = useState('');
  const navigate = useNavigate();

  // Handle username validation
  const handleUserNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);

    if (value.trim() === '') {
      setUserNameError(true);
      setUserNameHelperText('Username cannot be empty.');
    } else if (value.length < 3) {
      setUserNameError(true);
      setUserNameHelperText('Username must be at least 3 characters long.');
    } else {
      setUserNameError(false);
      setUserNameHelperText('');
    }
  };

  // Handle login button disabled state
  const isLoginDisabled = userName.trim() === '' || password.trim() === '' || userNameError;

  // Handle login and save username to localStorage
  const handleLogin = () => {
    if (!isLoginDisabled) {
      localStorage.setItem('userName', userName);  // Save username to localStorage
      navigate('/home');  // Navigate to home page
    }
  };

  return (
    <>
      <div style={{ width: '100vw', height: '100vh' }} className="d-flex justify-content-center align-items-center bg-primary">
        <div style={{ width: '500px', height: '300px' }} className="d-flex justify-content-center align-items-center shadow m-5 bg-light">
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='mb-3'>
              <TextField 
                className='w-100' 
                name='userName' 
                id="outlined-basic" 
                label="NAME" 
                variant="outlined" 
                value={userName}
                onChange={handleUserNameChange}
                error={userNameError}
                helperText={userNameHelperText}
              />
            </div>

            <div className='mb-3'>
              <TextField 
                className='w-100' 
                name='password' 
                id="outlined-basic" 
                label="PASSWORD" 
                variant="outlined" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button className='btn btn-primary me-3' disabled={isLoginDisabled} onClick={handleLogin}>LOGIN</button>
              <Link to={'/'}>
                <button className='btn btn-primary'>CANCEL</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

