import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import IPhones from '../IPhones';
import NotFound from '../NotFound';
import CSSReset from '@tds/core-css-reset';
import Navbar from '../../wrappers/Navbar';

const App = () => (
  <Router>
    <CSSReset />
    <Navbar />
    <Switch>
      <Route exact path="/watches">
        <Watches />
      </Route>
      <Route exact path="/iphones">
        <IPhones />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
