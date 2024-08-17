import React from 'react';
import './App.css';
import { NavBar } from './Components/NavBar';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
    </div>
  );
}

export default App;