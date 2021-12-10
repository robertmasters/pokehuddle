import React from 'react';
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
// import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';

function AppRoutes() {
	return (
		//<PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> 
		// <Route path = '/dashboard' component = {Dashboard} />
		<Routes>
			<Route exact path = '/' component = {<Login/>} />
			
			<Route path = '/register' component = {<Register/>} /> 
			<Route component = {<PageNotFound/>} /> 
		</Routes>
	)
};

export default AppRoutes; 
