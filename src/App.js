import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import MonsterDetail from './MonsterDetail';
import MonstersPage from './MonstersPage';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <MonstersPage/>
          </Route>
          <Route path='/monsters/:name'>
            <MonsterDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
