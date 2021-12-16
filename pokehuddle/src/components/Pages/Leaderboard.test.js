import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Leaderboard from './Leaderboard';

describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<Leaderboard />
			</MemoryRouter>
		)
	});
	
})
