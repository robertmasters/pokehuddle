import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DashboardRoutes from './DashboardRoutes';

describe('Test Login form', ()=> {
	test("Renders without crashing", () => {
		render(
			<MemoryRouter>
				<DashboardRoutes />
			</MemoryRouter>
			);
	})

	test("Default route, routes to home component", () => {
		render(
			<MemoryRouter initialEntries={['']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('home')).toBeInTheDocument();
	})

	test("research route, routes to research component", () => {
		render(
			<MemoryRouter initialEntries={['/research']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('research')).toBeInTheDocument();
	})

	test("favorite Pokemon route, routes to favorite pokemon component", () => {
		render(
			<MemoryRouter initialEntries={['/favoritepokemon']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('favoritepokemon')).toBeInTheDocument();
	})

	test("leaderboard route, routes to leaderboard component", () => {
		render(
			<MemoryRouter initialEntries={['/leaderboard']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('leaderboard')).toBeInTheDocument();
	})

	test("personalnotes route, routes to personalnotes component", () => {
		render(
			<MemoryRouter initialEntries={['/personalnotes']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('personalnotes')).toBeInTheDocument();
	})

	test("photos route, routes to photos component", () => {
		render(
			<MemoryRouter initialEntries={['/photos']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByTestId('photos')).toBeInTheDocument();
	})

	test("bad route renders page not found component", () => {
		render(
			<MemoryRouter initialEntries={['/badroute']}>
				<DashboardRoutes />
			</MemoryRouter>
			);
		expect(screen.getByText('Page Not Found')).toBeInTheDocument();
	})
})

