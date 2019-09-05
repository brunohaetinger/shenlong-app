import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const Login = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    username: '',
    password: '',   
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
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
          margin="normal"
        />
      </form>
    </div>
  );
}

export default Login;