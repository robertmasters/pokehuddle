import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';
import userEvent from '@testing-library/user-event';

const mockRegister = jest.fn((name, username, password) => {
	return Promise.resolve({ name, username, password });
  });

describe('Test Register form', ()=> {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Register register={mockRegister} />
			</MemoryRouter>
			);
	  });
	test('renders register page without crashing', () => {});

	test('render name input',  () =>{
		const nameInput = screen.getByTestId("name-input")
		
		expect(nameInput).toBeInTheDocument()
		expect(nameInput).toHaveAttribute('type', 'text')
	})

	test('user can enter name',  () =>{
		const nameInput = screen.getByTestId("name-input")
		userEvent.type(nameInput, 'nametest')
		
		expect(screen.getByTestId('name-input')).toHaveValue('nametest')
	})

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

	test('user cannot leave name empty', async () => {
		const passwordInput = screen.getByTestId("password-input")
		const usernameInput = screen.getByTestId("username-input")
		
		userEvent.type(passwordInput, 'passwordtest')
		userEvent.type(usernameInput, 'usernametest')

		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
		expect(mockRegister).not.toBeCalled();
	})

	test('user cannot leave username empty', async () => {
		const passwordInput = screen.getByTestId("password-input")
		const nameInput = screen.getByTestId("name-input")
		
		userEvent.type(passwordInput, 'passwordtest')
		userEvent.type(nameInput, 'nametest')

		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
		expect(mockRegister).not.toBeCalled();
	})

	test('user cannot leave password empty', async () => {
		const nameInput = screen.getByTestId("password-input")
		const usernameInput = screen.getByTestId("username-input")
		
		userEvent.type(nameInput, 'nametest')
		userEvent.type(usernameInput, 'usernametest')

		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(1);
		expect(mockRegister).not.toBeCalled();
	})
	test('user cannot leave any field empty', async () => {
		fireEvent.submit(screen.getByRole('button'))

		expect(await screen.findAllByRole("alert")).toHaveLength(3);
		expect(mockRegister).not.toBeCalled();
	})
})

