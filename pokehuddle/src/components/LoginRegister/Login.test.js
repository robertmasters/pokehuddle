import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';
describe('Test Login form', ()=> {
	test('renders login without crashing', () => {
		render(<Login />);
	  });

})

