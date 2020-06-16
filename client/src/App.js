import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Navbar from './components/Navbar';
import Main from './views/Main';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Main path="/"/>
        <SignUp path="/signup"/>
        <SignIn path="/signin"/>
      </Router>
    </div>
  );
}

export default App;
