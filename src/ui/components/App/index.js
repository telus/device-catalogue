import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSReset from "@tds/core-css-reset";
import Home from "../Home";
import NotFound from "../NotFound";

export default function App() {
  return (
    <Router>
      <CSSReset />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}
