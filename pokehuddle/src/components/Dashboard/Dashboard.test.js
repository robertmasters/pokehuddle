import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Dashboard from './Dashboard';

describe('Test Dashboard', () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Dashboard />
			</MemoryRouter>
			);
	})

	test('renders dashboard', () => {
		const appElement = screen.getByTestId('dashboard');
		expect(appElement).toBeInTheDocument();
	});
	test('renders sideBar', () => {
		const appElement = screen.getByAltText('Avatar');
		expect(appElement).toBeInTheDocument();
	});
	test('renders home component as default route', () => {
		const appElement = screen.getByTestId('home');
		expect(appElement).toBeInTheDocument();
	});
});
