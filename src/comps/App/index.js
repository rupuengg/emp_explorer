import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import { EmployeeProvider } from '../../providers/Employee-provider';
import HistoryContext from '../../contexts/History-context';
import Home from '../Home';
import Overview from '../Overview';
import History from '../History';

function App() {
  const [history, setHistory] = useState([]);

  return (
    <EmployeeProvider>
      <HistoryContext.Provider value={[history, setHistory]}>
        <Router>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/overview/:name" component={Overview}></Route>
              <Route path="/history" component={History}></Route>
            </Switch>
          </div>
        </Router>
      </HistoryContext.Provider>
    </EmployeeProvider>
  );
}

export default App;
