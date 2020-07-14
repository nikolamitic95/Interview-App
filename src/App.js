import React from 'react';

import styles from './App.module.css';

import 'materialize-css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

import { Switch, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { InfoPage } from './components/InfoPage/InfoPage';
import { LoginPage } from './components/Admin/LoginPage/LoginPage';
import { ReportsPage } from './components/Admin/ReportsPage/ReportsPage';
import { CreateReportPage } from './components/Admin/CreateReportPage/CreateReportPage';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div className='page-container'>
      <div className='content'>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/info/:id' component={InfoPage} />
          <Route exact path='/admin' component={LoginPage} />
          <Route exact path='/admin/reports' component={ReportsPage} />
          <Route exact path='/admin/reports/createreport' component={CreateReportPage} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
