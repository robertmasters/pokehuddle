import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';
describe('Test Register form', ()=> {
	test('renders register page without crashing', () => {
		render(
			<MemoryRouter>
				<Register />
			</MemoryRouter>
			);
	  });

})

