import React from 'react'
import {Route, Routes, useMatch } from 'react-router-dom'
import FavoritePokemon from '../Pages/FavoritePokemon';
import Home from '../Pages/Home';
import Leaderboard from '../Pages/Leaderboard';
import PageNotFound from '../Pages/PageNotFound';
import PersonalNotes from '../Pages/PersonalNotes';
import Photos from '../Pages/Photos';
import Research from '../Pages/Research';

export default function DashboardRoutes() {
    // const match = useMatch()

	return (
			<Routes>
				<Route path = 'home' element = {<Home />} />
				<Route path = 'research' element = {<Research />} />
				<Route path = 'favoritepokemon' element = {<FavoritePokemon />} />
				<Route path = 'leaderboard' element = {<Leaderboard />} />
				<Route path = 'personalnotes' element = {<PersonalNotes />} />
				<Route path = 'photos' element = {<Photos />} />
				<Route path = {'*'} element = {<PageNotFound />} /> 
			</Routes>
	);
};
