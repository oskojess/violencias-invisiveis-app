import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import Routes from "./routes/routes";
import reducers from "./reducers/reducers";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(multi, thunk, promise)(createStore)(
  reducers,
  devTools
); //configuração do promise

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routes />
    </Provider>
  </AppContainer>,
  document.getElementById("root")
);

render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./routes/routes", render);
}
