import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from '../Home';
import NotFound from '../NotFound';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
         <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
};
