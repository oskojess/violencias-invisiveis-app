import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, hot } from "react-hot-loader";

//import { applyMiddleware, createStore } from "redux";

//import promise from "redux-promise";
//import multi from "redux-multi";
//import thunk from "redux-thunk";

//import reducers from "./src/reducers/reducers";

import Routes from "./src/routes/Routes";

//const devTools =
//  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
//const store = applyMiddleware(multi, thunk, promise)(createStore)(
// reducers,
//  devTools
//); //configuração do promise - TODO

ReactDOM.render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById("root")
);

hot(module)("./App");
