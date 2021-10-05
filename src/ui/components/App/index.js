import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CSSReset from '@tds/core-css-reset'
import Home from '../Home';
import IphoneCatalogue from '../IphoneCatalogue';
import WatchesCatalogue from '../WatchesCatalogue';
import NotFound from '../NotFound';

const App = () => (
  <Router>
    <CSSReset />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/iphones">
        <IphoneCatalogue/>
      </Route>
      <Route path="/watches">
        <WatchesCatalogue />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
