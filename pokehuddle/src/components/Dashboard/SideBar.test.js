import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import SideBar from './Dashboard';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<SideBar />
			</MemoryRouter>
		)
	});
	test('renders avatar', () => {
		render(
			<MemoryRouter>
				<SideBar />
			</MemoryRouter>
		)
		const avatarImg = screen.getByAltText('Avatar')
		expect(avatarImg).toBeInTheDocument()
	});
	test('renders all links', () => {
		render(
			<MemoryRouter>
				<SideBar />
			</MemoryRouter>
		)
		const homeLink = screen.getByText('Home')
		const researchLink = screen.getByText('Research')
		const favoritepokemonLink = screen.getByText('Favorite Pokemon')
		const leaderboardLink = screen.getByText('Leaderboard')
		const articlesLink = screen.getByText('Articles')
		const photosLink = screen.getByText('Photos')
		const logoutLink = screen.getByText('Logout')

		expect(homeLink).toBeInTheDocument()
		expect(researchLink).toBeInTheDocument()
		expect(favoritepokemonLink).toBeInTheDocument()
		expect(leaderboardLink).toBeInTheDocument()
		expect(articlesLink).toBeInTheDocument()
		expect(photosLink).toBeInTheDocument()
		expect(logoutLink).toBeInTheDocument()
	});
})
