import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import MonsterDetail from './MonsterDetail';
import MonsterPage from '/MonsterPage';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Switch>
        <Route exact path='/'>
          <MonsterPage/>
        </Route>
        <Route path='/monsters/:name'>
          <MonsterDetail />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
