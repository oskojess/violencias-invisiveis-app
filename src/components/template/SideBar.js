import React from "react";
import AppBarCard from "./AppBarCard";

import { withRouter } from "react-router-dom";

class SideBar extends React.Component {
  render() {
    return <AppBarCard />;
  }
}

export default withRouter(SideBar);
