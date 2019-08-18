import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { EmployeeProvider } from '../../providers/Employee-provider';
import Home from '../Home';
import Overview from '../Overview';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/:name" component={Overview}></Route>
            <Route path="/history" component={Overview}></Route>
          </Switch>
        </div>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
