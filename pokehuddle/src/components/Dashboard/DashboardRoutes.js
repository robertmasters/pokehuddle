import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Articles from '../Pages/Articles';
import FavoritePokemon from '../Pages/FavoritePokemon';
import Home from '../Pages/Home';
import Leaderboard from '../Pages/Leaderboard';
import PageNotFound from '../Pages/PageNotFound';
import Photos from '../Pages/Photos';
import Research from '../Pages/Research'; 

export default function DashboardRoutes() {
	return (
			<Routes>
				<Route path = '' element = {<Home />} />
				<Route path = 'research' element = {<Research />} />
				<Route path = 'favoritepokemon' element = {<FavoritePokemon />} />
				<Route path = 'leaderboard' element = {<Leaderboard />} />
				<Route path = 'articles' element = {<Articles />} />
				<Route path = 'photos' element = {<Photos />} />
				<Route path = {'*'} element = {<PageNotFound />} /> 
			</Routes>
	);
};
