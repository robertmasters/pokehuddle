import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import PersonalNotes from './PersonalNotes'
describe('Test Dashboard', () => {
	test('renders component without crashing', () => {
		render(
			<MemoryRouter>
				<PersonalNotes />
			</MemoryRouter>
		)
	});
	
})
