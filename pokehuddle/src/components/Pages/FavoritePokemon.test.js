import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import FavoritePokemon from './FavoritePokemon';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<FavoritePokemon />
			</MemoryRouter>
		)
	});
	
})
