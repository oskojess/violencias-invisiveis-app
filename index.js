import React from "react";
import ReactDOM from "react-dom";
import { AppContainer, hot } from "react-hot-loader";



import UserRoutes from "./src/routes/user/userRoutes";
//import AdminRoutes from "./src/routes/admin/adminRoutes";


ReactDOM.render(
  <AppContainer>
    <UserRoutes />
  </AppContainer>,
  document.getElementById("root")
);

hot(module)("./App");
