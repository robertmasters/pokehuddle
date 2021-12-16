import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Photos from './Photos'
describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<Photos />
			</MemoryRouter>
		)
	});
	
})
