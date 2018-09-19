import React from "react";
import { browserHistory } from "react-router";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import AppBarCard from "../components/template/AppBarCard";
import Dashboard from "../components/Dashboard";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={AppBarCard} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/new" component={Dashboard} />
          <Route path="/follow" component={Dashboard} />
          <Route path="/tutorial" component={Dashboard} />
          <Route path="/profile" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
