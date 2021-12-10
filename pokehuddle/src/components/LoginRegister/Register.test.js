import { render, screen, fireEvent } from '@testing-library/react';
import Register from './Register';
describe('Test Register form', ()=> {
	test('renders register page without crashing', () => {
		render(<Register />);
	  });

})

