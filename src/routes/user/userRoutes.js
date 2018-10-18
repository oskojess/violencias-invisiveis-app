import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "../../../App";

import Dashboard from "../../components/Dashboard";
import Tutorial from "../../components/user/components/tutorial/TutorialCard";
import StartPetition from "../../components/user/components/petitions/card/StartPetitionCard";
import FollowPetitionCard from "../../components/user/components/petitions/card/FollowPetitionCard";
import Login from "../../components/login/Login";

class UserRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter >
        <App>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/new" component={StartPetition} />
            <Route path="/follow" component={FollowPetitionCard} />
            <Route path="/tutorial" component={Tutorial} />
            <Route path="/profile" component={Dashboard} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default UserRoutes;
