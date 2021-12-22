import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Articles from './Articles'
describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<Articles />
			</MemoryRouter>
		)
	});
	
})
