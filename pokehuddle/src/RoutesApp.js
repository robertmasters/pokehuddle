import React from 'react';
import {Route, Routes} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';

function RoutesApp() {
	return (
		
		//<PrivateRoute exact path = '/dashboard' component = {Dashboard}></PrivateRoute> 
		<Routes>
			<Route path = '/' element = {<Login/>} />
			<Route path = '/dashboard/*' element = {<Dashboard />} />
			<Route path = '/register' element = {<Register/>} />
			<Route path = '*' element = {<PageNotFound/>} />
		</Routes>
	)
};

export default RoutesApp;
