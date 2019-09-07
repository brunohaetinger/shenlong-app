import React from 'react';
import './App.scss';
import AppRouter from '../AppRouter/AppRouter';
import { SnackbarProvider } from 'notistack';
import 'typeface-roboto';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { lightBlue } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  palette: {
    primary: lightBlue
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>      
      <SnackbarProvider maxSnack={3}>
        <div className="App">
          <header className="App-header">
            <AppRouter></AppRouter>
          </header>
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
