import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, hot } from "react-hot-loader";
import { Provider } from 'react-redux';
import { Store } from './src/store/index';



import UserRoutes from "./src/routes/user/userRoutes";
//import AdminRoutes from "./src/routes/admin/adminRoutes";

document.documentElement.lang = 'pt';

ReactDOM.render(
  <Provider store={Store}>
    <UserRoutes />
  </Provider>,
  document.getElementById("root")
);

hot(module)("./App");
