import React from "react";
import { Router, browserHistory } from "react-router";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "../../App";

import Dashboard from "../components/Dashboard";
import Tutorial from "../components/users/components/tutorial/TutorialCard";
import StartPetition from "../components/users/components/petitions/card/StartPetitionCard";
import FollowPetition from "../components/users/components/petitions/card/FollowPetitionCard";

class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>          
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={StartPetition} />
            <Route path="/follow" component={FollowPetition} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/profile" component={Dashboard} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default Routes;
