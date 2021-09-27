import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CSSReset from '@tds/core-css-reset'
import Home from '../Home';
import Watches from '../Watches';
import IPhones from '../IPhones';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <CSSReset />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/watches">
        <Watches />
      </Route>
      <Route path="/iphones">
        <IPhones />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
