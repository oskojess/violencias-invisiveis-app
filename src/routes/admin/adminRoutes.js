import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import App from "../../../App";

import AdminDashboard from "../../components/admin/AdminDashboard";
import AdminProfile from "../../components/admin/components/card/AdminProfile";
import Petitions from "../../components/admin/components/card/Petitions";
import Analysis from "../../components/admin/components/card/Analysis";

class AdminRoutes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route path="/dashboard" component={AdminDashboard} />
            <Route path="/petitions" component={Petitions} />
            <Route path="/tutorial" component={AdminProfile} />
            <Route path="/profile" component={AdminProfile} />
            <Route path="/analysis" component={Analysis} />
            <Redirect from="*" to="/dashboard" />
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}

export default AdminRoutes;
