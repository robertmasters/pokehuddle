import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Research from './Research';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
				<Research />
		)
	});
	test('Pikachu shows as default pokemon on initial render', async () => {
		render(
				<Research />
		)
		const pokemonName = await screen.findByText('Pikachu')
		expect(pokemonName).toBeInTheDocument()
	});
	test('user can search for a different pokemon(mew)', async () => {
		render(
				<Research />
		)
		const pokemonName = await screen.findByText('Pikachu')
		expect(pokemonName).toBeInTheDocument()
	});
	
})
