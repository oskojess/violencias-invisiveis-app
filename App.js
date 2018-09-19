import * as React from "react";
import SideBar from "./src/components/template/SideBar";
import { withRouter } from "react-router-dom";

class App extends React.Component {
  render() {
    const { children } = this.props;
    console.log(this.props);
    return (
      <div>
        <SideBar />
        {children}
      </div>
    );
  }
}

export default withRouter(App);
