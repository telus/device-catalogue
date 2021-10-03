import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSReset from "@tds/core-css-reset";
import Home from "../Home";
import IPhones from "../IPhones";
import Watches from "../Watches";
import NotFound from "../NotFound";

const App = () => (
  <div>
    <CSSReset />
    <Router>
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
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
