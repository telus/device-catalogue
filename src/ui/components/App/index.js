import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from '../Home';
import Watches from '../Watches';
import Iphones from '../Iphones';
import NotFound from '../NotFound';
import HairlineDivider from '@tds/core-hairline-divider';
import Nav from '../Nav';
import WatchesContextProvider from "../../context/WatchesContext";
import IphonesContextProvider from "../../context/IphonesContext";

const App = () => (
  <WatchesContextProvider>
    <Router>
      <Nav />
      <HairlineDivider />
      <Switch>
        <Route exact path="/" component={Home} />
        
          <Route exact path="/watches" component={Watches} />
        
        <IphonesContextProvider>
          <Route exact path="/iphones" component={Iphones} />
        </IphonesContextProvider>
        <Route component={NotFound} />
      </Switch>
    </Router>
    </WatchesContextProvider>
);

export default App;
