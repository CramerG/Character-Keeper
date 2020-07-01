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
import CharacterEdit from './components/CharacterEdit';
import Groups from './views/Groups';
import GroupAdd from './components/GroupAdd';
import GroupList from './components/GroupList';

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
          <CharacterEdit path="/edit/:id"/>
        </Characters>
        <Groups path="/groups">
          <GroupList path="/"/>
          <GroupAdd path="/add"/>
        </Groups> 
        
      </Router>
    </div>
  );
}

export default App;
