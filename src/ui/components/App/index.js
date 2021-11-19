import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import Iphones from '../Iphones';
import NotFound from '../NotFound';
import HairlineDivider from '@tds/core-hairline-divider';
import Nav from '../Nav';


const App = () => (
  <Router>
    <Nav />
    <HairlineDivider />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/watches" component={Watches} />
      <Route exact path="/iphones" component={Iphones} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
