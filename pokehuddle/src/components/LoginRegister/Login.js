import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useForm } from "react-hook-form"
import '../../App.css'
import axios from 'axios';

const client = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
function Login() {
	const { register, formState: {errors}, handleSubmit } = useForm({
		mode: 'onBlur'
	})
	const navigate = useNavigate()

	function login(data) {
		//make a post request with username and password(state.credentials) as the data body
		axios
		// .post('http://masters-pokehuddlerest.herokuapp.com/login',
		.post('http://localhost:2019/login', 
		`grant_type=password&username=${data.username}&password=${data.password}`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(`${client}:${secret}`).toString('base64')}`,
				"Content-Type": "application/x-www-form-urlencoded"
		}})
		.then((res) => {
			//store token in local storage
			//navigate to the dashboard after successfull login
			window.localStorage.setItem('pokehuddle-token', JSON.stringify(res.data.access_token)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
			navigate('/dashboard')
		})
		.catch((err)=> console.log("this is the error: ",err))
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
  