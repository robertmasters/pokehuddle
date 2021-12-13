import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import userEvent from '@testing-library/user-event';

const mockLogin = jest.fn((username, password) => {
	return Promise.resolve({ username, password });
  });
describe('Test Login form', ()=> {
	beforeEach(() => {
		render(
			<MemoryRouter><Login login={mockLogin} />
			</MemoryRouter>
			);
	  });
	test('renders login without crashing', () => {});
	test('render username input',  () =>{
			const usernameInput = screen.getByTestId("username-input")
			
			expect(usernameInput).toBeInTheDocument()
			expect(usernameInput).toHaveAttribute('type', 'text')
	})

	test('user can enter username',  () =>{
			const usernameInput = screen.getByTestId("username-input")
			userEvent.type(usernameInput, 'usernametest')
			
			expect(screen.getByTestId('username-input')).toHaveValue('usernametest')
	})

	test('render passowrd input',  () =>{
			const passwordInput = screen.getByTestId("password-input")
			
			expect(passwordInput).toBeInTheDocument()
			expect(passwordInput).toHaveAttribute('type', 'password')
	})

	test('user can enter password',  () =>{
			const passwordInput = screen.getByTestId("password-input")
			userEvent.type(passwordInput, 'passwordtest')
			
			expect(screen.getByTestId('password-input').value).toHaveLength(12)
	})
	test('user cannot leave username empty', async () => {
		const passwordInput = screen.getByTestId("password-input")
			userEvent.type(passwordInput, 'passwordtest')
		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
		expect(mockLogin).not.toBeCalled();
	})
	
	test('user cannot leave password empty', async () => {
		const usernameInput = screen.getByTestId("username-input")
		userEvent.type(usernameInput, 'usernametest')
		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
		expect(mockLogin).not.toBeCalled();
	})
	test('user cannot leave any field empty', async () => {
		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(2);
		expect(mockLogin).not.toBeCalled();
	})
	
})

