import React from 'react';

import './App.css';
import 'materialize-css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { LoginPage } from './components/Admin/LoginPage/LoginPage';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/info/:id' component={InfoPage} />
        <Route exact path='/admin' component={LoginPage} />
      </Switch>
    </div>
  );
}

export default App;
