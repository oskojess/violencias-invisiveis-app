import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import App from '../App'
import Dashboard from '../components/dashboard'

export default props => (
	<Router history={hashHistory}>
		<Route path='/' component={App} />
		<Route path='/dashboard' component={Dashboard} />
		<Redirect from='*' to='/' />
	</Router>
)