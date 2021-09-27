import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CSSReset from '@tds/core-css-reset'
import Home from '../Home';
import Watches from '../Watches';
import IPhones from '../IPhones';
import PageNotFound from '../PageNotFound';

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
        <PageNotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
