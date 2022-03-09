import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSReset from "@tds/core-css-reset";
import Home from "../Home";
import NotFound from "../NotFound";
import Watches from "../Watches";
import IPhones from "../IPhones";

const App = () => (
  <>
    <CSSReset />
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path={"/watches"}>
          <Watches />
        </Route>
        <Route exact path="/iphones">
          <IPhones />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
