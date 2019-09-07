import React from 'react';
import { AppBar, Toolbar, IconButton, Tooltip } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import ExitToApp from '@material-ui/icons/ExitToApp';
import './DragonAppBar.scss';
import { Redirect } from 'react-router-dom';

const DragonAppBar = () => {
  const [redirect, setRedirect] = React.useState('');
  const handleLogout = () => {
    return setRedirect(<Redirect to="/" />);
  }
   return (
    <AppBar className="dragon-bar" position="static">
      <Toolbar>
          <Tooltip title="Logout">
            <IconButton
              edge="start"
              className="bar-elem"
              color="inherit"
              aria-label="open drawer"
              onClick={handleLogout}
            >
              <ExitToApp />
            </IconButton>
          </Tooltip>
          {redirect}
        <Typography className="bar-elem" variant="h6" noWrap>
          Dragons
          </Typography>
        
      </Toolbar>
    </AppBar>
  );
}
export default DragonAppBar;