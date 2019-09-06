import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core/';
import { Route } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import logo from '../../assets/dragon-ball.png';
const Database = require('../../dbMock/db.json');

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: '',
    password: '',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleLogin = (routeHistory) => { 
    if(isValidUser()){
      routeHistory.push('/dragons'); 
    } else{
      enqueueSnackbar(`Sorry, user not found`, {variant: 'error'});
    }
  }

  const isValidUser = () => { 
    return Database.users.find(user => user.username === values.username && user.password === values.password) ? true: false;
  }

  return (
    <div>
      <img src={logo} alt="Logo" />
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Username"
          className={classes.textField}
          value={values.name}
          onChange={handleChange('username')}
          margin="normal"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          onChange={handleChange('password')}
          margin="normal"
        />


        <Route render={({ history }) => (
          <Button variant="contained" color="primary" className={classes.button} onClick={()=>{ handleLogin(history) }}>
            Login
          </Button>
        )} />
      </form>
    </div>
  );
}

export default Login;