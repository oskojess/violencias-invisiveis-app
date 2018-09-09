import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './dashboardReducer'

const rootReducer = combineReducers({
	dashboard: DashboardReducer,
})

export default rootReducer