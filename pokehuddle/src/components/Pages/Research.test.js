import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import Research from './Research';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
				<Research />
		)
	});
	test('user can type a pokemon name on the search bar', () => {
		render(
				<Research />
		)
		const pokemonInput = screen.getByPlaceholderText('Pokemon name')
		userEvent.type(pokemonInput, 'mew')
		expect(screen.getByPlaceholderText('Pokemon name')).toHaveValue('mew')
	});
	test('Pikachu shows as default pokemon on initial render', async () => {
		render(
				<Research />
		)
		const pokemonName = await screen.findByText('Pikachu')
		expect(pokemonName).toBeInTheDocument()
	});
	
})
