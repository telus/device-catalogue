import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import Iphones from '../Iphones';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/watches">Watches</Link></li>
      <li><Link to="/iphones">iphones</Link></li>
      <li><Link to="/asdadasdasd">404</Link></li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/watches" component={Watches} />
      <Route path="/iphones" component={Iphones} />
      <Route path="*" children={NotFound} />
     
    </Switch>
  </Router>
);

export default App;
