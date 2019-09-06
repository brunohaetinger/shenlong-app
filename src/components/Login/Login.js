import React from "react";
import { TextField, Button, Grid } from '@material-ui/core/';
import { Route } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import logo from '../../assets/dragon-ball.png';
import LoginController from './LoginController';
import './Login.scss'
import { AssignmentInd, Lock } from '@material-ui/icons';


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
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <AssignmentInd className="input-icon" color="disabled"></AssignmentInd>
          <TextField
            id="standard-name"
            label="Username"
            className='textField'
            value={values.name}
            onChange={handleChange('username')}
            margin="normal"
          />
        </Grid>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-end"
        >
          <Lock className="input-icon" color="disabled"></Lock>
          <TextField
            id="standard-password-input"
            label="Password"
            className='textField'
            type="password"
            autoComplete="current-password"
            onChange={handleChange('password')}
            margin="normal"
          />
        </Grid>

        <Route render={({ history }) => (
          <Button variant="contained" className='button' onClick={() => { handleLogin(history) }}>
            Login
          </Button>
        )} />
      </form>
    </div>
  );
}

export default Login;