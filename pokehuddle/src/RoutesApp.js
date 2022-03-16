import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Login from './components/LoginRegister/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Register from './components/LoginRegister/Register';
import PageNotFound from './components/Pages/PageNotFound';

function RoutesApp({component: Component, ...rest}) {
	return (
		<Routes>
		{
			(window.localStorage.getItem('pokehuddle-token')) 
			? <Route path = '/dashboard/*' element = {<Dashboard />} />
			: <Route path = '/' element = {<Login/>} />
		}
			<Route path = '/dashboard/*' element = {<Dashboard />} />
			<Route path = '/' element = {<Login/>} />
			<Route path = '/register' element = {<Register/>} />
			<Route path = '*' element = {<PageNotFound/>} />
		</Routes>
	)
};

export default RoutesApp;
