import React from 'react';
import './App.css';
import AppRouter from '../AppRouter/AppRouter';
import { SnackbarProvider } from 'notistack';
import 'typeface-roboto';

const App = () => {
  return (
    <SnackbarProvider maxSnack={3}>
      <div className="App">
        <header className="App-header">
          <AppRouter></AppRouter>
        </header>
      </div>
    </SnackbarProvider>
  );
}

export default App;
