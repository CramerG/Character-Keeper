import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Navbar from './components/Navbar';
import Main from './views/Main';
import SignUp from './views/SignUp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Main path="/"/>
        <SignUp path="/signup"/>
      </Router>
    </div>
  );
}

export default App;
