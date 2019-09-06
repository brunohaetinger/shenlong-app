import React from "react";
import { TextField, Button } from '@material-ui/core/';
import { Route } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import logo from '../../assets/dragon-ball.png';
import LoginController from './LoginController';
import './Login.scss'

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleLogin = (routeHistory) => {
    if (LoginController.isValidUser(values.username, values.password)) {
      routeHistory.push('/dragons');
    } else {
      enqueueSnackbar(`Sorry, user not found`, { variant: 'error' });
    }
  }

  return (
    <div>
      <img src={logo} alt="Logo" />
      <form className='container' noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Username"
          className='textField'
          value={values.name}
          onChange={handleChange('username')}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className='textField'
          type="password"
          autoComplete="current-password"
          onChange={handleChange('password')}
          margin="normal"
        />


        <Route render={({ history }) => (
          <Button variant="contained" color="primary" className='button' onClick={() => { handleLogin(history) }}>
            Login
          </Button>
        )} />
      </form>
    </div>
  );
}

export default Login;