import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RoutesApp from './RoutesApp'

describe('Test Login form', ()=> {
	test("Default route, routes to login component", () => {
		render(
			<MemoryRouter>
				<RoutesApp />
			</MemoryRouter>
			);
		expect(screen.getByText('Log in')).toBeInTheDocument();
	})

	test("Register route, routes to register component", () => {
		render(
			<MemoryRouter initialEntries={['/register']}>
				<RoutesApp />
			</MemoryRouter>
			);
		expect(screen.getByText('Register')).toBeInTheDocument();
	})

	test("bad route renders page not found component", () => {
		render(
			<MemoryRouter initialEntries={['/badroute']}>
				<RoutesApp />
			</MemoryRouter>
			);
		expect(screen.getByText('Page Not Found')).toBeInTheDocument();
	})
})

