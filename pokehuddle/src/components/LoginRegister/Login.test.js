import { render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
describe('Test Login form', ()=> {
	test('renders login without crashing', () => {
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			);
	  });
})

