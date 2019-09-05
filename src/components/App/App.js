import React from 'react';
import './App.css';
import AppRouter from '../AppRouter/AppRouter';
import 'typeface-roboto';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter></AppRouter>
      </header>
    </div>
  );
}

export default App;
