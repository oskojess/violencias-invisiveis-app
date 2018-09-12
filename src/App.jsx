import "./components/template/dependencies";

import React, { Component } from "react";
import SideBar from "./components/template/sideBar";

class App extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div className="content-wrapper" />
        <div className="isso e so um teste" />
      </div>
    );
  }
}

export default App;
