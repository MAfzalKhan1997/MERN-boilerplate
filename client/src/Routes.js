import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "typeface-roboto";

import routes from "./constants/routes";

import App from "./screens/App";
import Home from "./screens/Home";
import Dashboard from "./screens/Dashboard";

const Routes = () => (
  <Router>
    <App>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
        <Route exact path={routes.DASHBOARD} component={Dashboard} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
