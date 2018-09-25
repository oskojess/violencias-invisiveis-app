import * as React from "react";
import AppBarCard from "./src/components/template/AppBarCard";

class App extends React.Component {
  render() {
    return (
        <AppBarCard>
        	{this.props.children}
        </AppBarCard>
    );
  }
}

export default App;
