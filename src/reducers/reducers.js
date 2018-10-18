import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import dashboard from "./dashboardReducer";
import { login } from "./loginReducer";
import { alert } from "./alertReducer";

const rootReducer = combineReducers({
  dashboard,
  login,
  alert
});

export default rootReducer;
