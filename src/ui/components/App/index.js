import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSReset from "@tds/core-css-reset";
import FlexGrid from "@tds/core-flex-grid";
import Text from "@tds/core-text";
import Box from "@tds/core-box";
import Home from "../Home";
import NotFound from "../NotFound";
import Watches from "../Watches";
import IPhones from "../IPhones";
import { GlobalFlexMain } from "@tds/core-css-reset";

const App = () => (
  <>
    <CSSReset />
    <GlobalFlexMain />
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
    <FlexGrid>
      <FlexGrid.Row horizontalAlign="center">
        <Box vertical={8}>
          <Text>&#169;{new Date().getFullYear()} TELUS</Text>
        </Box>
      </FlexGrid.Row>
    </FlexGrid>
  </>
);

export default App;
