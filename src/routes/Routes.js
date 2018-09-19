import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import App from "../../App";
import Dashboard from "../components/Dashboard";

import createBrowserHistory from "history/createBrowserHistory";

const customHistory = createBrowserHistory();

export default class Routes extends React.Component {
  render() {
    return (
      <Router history={customHistory}>
        <Switch>
          <Route path="/" component={App} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/novoBaixoAssinado" component={Dashboard} />
          <Route path="/acompanharBaixoAssinado" component={Dashboard} />
          <Route path="/tutorial" component={Dashboard} />
          <Route path="/perfil" component={Dashboard} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    );
  }
}
