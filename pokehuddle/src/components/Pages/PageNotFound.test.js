import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PageNotFound from './PageNotFound'
describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<PageNotFound />
			</MemoryRouter>
		)
	});
	
})
