import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import Navbar from './components/Navbar';
import Main from './views/Main';
import SignUp from './views/SignUp';
import SignIn from './views/SignIn';
import CharacterAdd from './components/CharacterAdd';
import Characters from './views/Characters';
import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Main path="/"/>
        <SignUp path="/signup"/>
        <SignIn path="/signin"/>
        <Characters path="/characters">
          <CharacterList path="/"/>
          <CharacterAdd path="/add"/>
        </Characters>
        
      </Router>
    </div>
  );
}

export default App;
