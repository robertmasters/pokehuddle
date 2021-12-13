import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useForm } from "react-hook-form"
import '../../App.css'

function Login() {
	const { register, formState: {errors}, handleSubmit } = useForm({
		mode: 'onBlur'
	})
	const navigate = useNavigate()

	function login(data) {
		console.log(data)
		//make a post request with username and password(state.credentials) as the data body
		axiosWithAuth()
		.post('/api/login', data)
		.then((res) => {
			//store token in local storage
			//navigate to the dashboard after successfull login
			window.localStorage.setItem('token', JSON.stringify(res.data.payload)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
			navigate.push('/dashboard')
		})
		.catch((err)=> console.log(err))
	}

	return (
		<div className = 'main-container'>
			<div>User auth not set up<Link className = 'link' to ='/dashboard/research'>click here </Link>to enter app</div>

			<div className = 'middle-section'>
				<div className = 'ashPikaimg-container'>
					<img className ='ashpikaimg' src = {require('../../images/ashpika.png').default} alt = 'Ash and Pikachu landing page' />
				</div>

				<div data-testid = 'login-section' className= 'login-section'>

					<div className = 'description login-flex-item'>
					PokeHuddle is a personal space for you to research Pokemon, favorite them, view leaderboards, view other members fan art, and upload your own!
					</div>

					<div className = 'selection  login-flex-item'>
					<Link to ='/register' className = 'select-logreg'>Not a Member?</Link>
					</div>

					<form className = 'login-flex-item' onSubmit = {handleSubmit(login)}>
						<input className = 'form-item'
							type = 'text'
							name = 'username'
							placeholder = "Username"
							data-testid='username-input'
							{...register('username', { required: true })}
						/>
						{errors.username && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Username is {errors.username.type}</p>
						)}
						<input className = 'form-item'
							type='password'
							name='password'
							placeholder = 'Password'
							data-testid='password-input'
							{...register('password', { required: true })}
						/>
						{errors.password && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Password is {errors.password.type}</p>
						)}
						<button className = 'form-item btn'>Log in</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
  