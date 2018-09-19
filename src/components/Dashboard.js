import * as React from "react";
import { withRouter } from "react-router";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default withRouter(Dashboard);
