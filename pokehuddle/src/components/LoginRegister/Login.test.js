import { fireEvent, render, screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';
import userEvent from '@testing-library/user-event';
describe('Test Login form', ()=> {
	test('renders login without crashing', () => {
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			);
	});
	test('render username input',  () =>{
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			)

			const usernameInput = screen.getByTestId("username-input")
			
			expect(usernameInput).toBeInTheDocument()
			expect(usernameInput).toHaveAttribute('type', 'text')

	})

	test('user can enter username',  () =>{
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			)

			const usernameInput = screen.getByTestId("username-input")
			userEvent.type(usernameInput, 'usernametest')
			
			expect(screen.getByTestId('username-input')).toHaveValue('usernametest')
	})

	test('render passowrd input',  () =>{
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			)

			const passwordInput = screen.getByTestId("password-input")
			
			expect(passwordInput).toBeInTheDocument()
			expect(passwordInput).toHaveAttribute('type', 'password')

	})

	test('user can enter password',  () =>{
		render(
			<MemoryRouter>
				<Login />
			</MemoryRouter>
			)

			const passwordInput = screen.getByTestId("password-input")
			userEvent.type(passwordInput, 'passwordtest')
			
			expect(screen.getByTestId('password-input').value).toHaveLength(12)
	})
})

