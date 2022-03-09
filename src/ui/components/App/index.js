import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSReset from "@tds/core-css-reset";
import Home from "../Home";
import NotFound from "../NotFound";

const App = () => (
  <>
    <CSSReset />
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>
);

export default App;
