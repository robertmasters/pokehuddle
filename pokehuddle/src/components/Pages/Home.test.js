import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Home from './Home';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)
	});
	test('renders favorites section', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)
		const favoritesSection = screen.getByAltText('favorites')
		expect(favoritesSection).toBeInTheDocument()
	});
	
	test('renders notifications section', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)
		const favoritesSection = screen.getByAltText('notifications')
		expect(favoritesSection).toBeInTheDocument()
	});
	test('renders news section', () => {
		render(
			<MemoryRouter>
				<Home />
			</MemoryRouter>
		)
		const favoritesSection = screen.getByAltText('news')
		expect(favoritesSection).toBeInTheDocument()
	});
	
})
