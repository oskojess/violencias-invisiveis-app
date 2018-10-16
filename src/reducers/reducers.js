import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboard from "./dashboardReducer";
import { login } from "./loginReducer";

const rootReducer = combineReducers({
  dashboard,
  login
});

export default rootReducer;
