import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import NavigationBar from './NavigationBar';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<NavigationBar />
			</MemoryRouter>
		)
	});
	test('renders avatar', () => {
		render(
			<MemoryRouter>
				<NavigationBar />
			</MemoryRouter>
		)
		const avatarImg = screen.getByAltText('Avatar')
		expect(avatarImg).toBeInTheDocument()
	});
	test('renders all links', () => {
		render(
			<MemoryRouter>
				<NavigationBar />
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
