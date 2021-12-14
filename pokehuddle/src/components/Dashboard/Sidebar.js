import React from 'react'
import {Route, Switch, useRouteMatch } from 'react-router-dom'
import FavoritePokemon from '../Pages/FavoritePokemon';
import Home from '../Pages/Home';
import Leaderboards from '../Pages/Leaderboards';
import PageNotFound from '../Pages/PageNotFound';
import PersonalNotes from '../Pages/PersonalNotes';
import Photos from '../Pages/Photos';
import Research from '../Pages/Research';

export default function DashboardRoutes() {
    const {path} = useRouteMatch()

	return (
			<Switch>
				<Route path = {`${path}/home`} component = {Home} />
				<Route path = {`${path}/research`} component = {Research} />
				<Route path = {`${path}/favoritepokemon`} component = {FavoritePokemon} />
				<Route path = {`${path}/leaderboards`} component = {Leaderboards} />
				<Route path = {`${path}/personalnotes`} component = {PersonalNotes} />
				<Route path = {`${path}/photos`} component = {Photos} />
				<Route path = {'*'} component = {PageNotFound} /> 
			</Switch>
	);
};
