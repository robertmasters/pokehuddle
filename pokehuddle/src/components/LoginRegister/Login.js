import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import '../../App.css'

const initialState = {
	credentials: {
		username: '',
		password: ''
	}
}

function Login() {
	const [state, setState] = useState(initialState)
	const navigate = useNavigate()

	function handleChange(e) {
		setState({
			credentials: {
				...state.credentials,
				[e.target.name]: e.target.value
			}
		})
	}

	function login(e) {
		e.preventDefault();

		//make a post request with username and password(state.credentials) as the data body
		axiosWithAuth()
		.post('/api/login', state.credentials)
		.then((res) => {
			//store token in local storage
			//navigate to the dashboard after successfull login
			window.localStorage.setItem('token', JSON.stringify(res.data.payload)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
			navigate.push('/dashboard')
		})
		.catch((err)=> console.log(err))
	}

	return (
		<div className = "main-container">
			<div>User auth not set up <Link className = "link" to ='/dashboard/research'>click here </Link>to enter app</div>

			<div className = "middle-section">
				<div className = "ashPikaimg-container">
					<img className ="ashpikaimg" src = {require('../../images/ashpika.png').default} alt = 'Ash and Pikachu landing page' />
				</div>

				<div className= "login-section">

					<div className = "description login-flex-item">
					PokeHuddle is a personal space for you to research Pokemon, favorite them, view leaderboards, view other members fan art, and upload your own!
					</div>

					<div className = "selection  login-flex-item">
					<Link to ='/register' className = 'select-logreg'>Not a Member?</Link>
					</div>

					<form className = 'login-flex-item' onSubmit = {login}>
						<input className = 'form-item'
							type = 'text'
							name = 'username'
							placeholder = "Username"
							value = {state.credentials.username}
							onChange ={handleChange}
						/>
						<input className = 'form-item'
							type="password"
							name="password"
							placeholder = "Password"
							value={state.credentials.password}
							onChange={handleChange}
						/>
						<button data-testid = "login-btn" className = 'form-item btn'>Log in</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
  