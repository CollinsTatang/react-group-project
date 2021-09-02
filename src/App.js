import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Myprofile from './components/Myprofile';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Rockets} />
          <Route path="/missions" exact component={Missions} />
          <Route path="/myprofile" exact component={Myprofile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
