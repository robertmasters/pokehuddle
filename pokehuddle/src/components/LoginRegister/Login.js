import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import '../../App.css'
import { connect } from 'react-redux';
import { fetchLogin } from '../../store/actions';

function Login(props) {
	const { register, formState: {errors}, handleSubmit } = useForm({
		mode: 'onBlur'
	})
	const navigate = useNavigate()

	function login(data) {
		props.fetchLogin(data, navigate)
	}

	function handleEnterPress(e) {
		if (e.keyCode === 13) {
			handleSubmit()
		}
	}

	return (
		<div className = 'main-container'>
			<div style={{width:"50%"}}>You can Register and create a new account (with a made up an email), or use Username: scarlett, Password: pika123 <div/> 
			<Link className = 'link' to ='/dashboard/research'>click here </Link>to enter app without loging in, to see what happens!
			</div>

			<div className = 'middle-section'>
				<div className = 'ashPikaimg-container'>
					<img className ='ashpikaimg' src = {require('../../images/ashpika.png').default} alt = 'Ash and Pikachu landing page' />
				</div>

				<div data-testid = 'login-section' className= 'login-section'>

					<div className = 'description login-flex-item'>
					PokeHuddle is a personal space for you to research Pokemon, and write articles about the Pokemon universe.
					</div>

					<div className = 'selection  login-flex-item'>
					<Link to ='/register' className = 'select-logreg'>Not a Member?</Link>
					</div>

					<form className = 'login-flex-item' onSubmit = {handleSubmit(login)}>
					{
						props.error ? <span role = 'alert' className='error-message'>{props.error}</span> : null
					}
						<input className = 'form-item'
							type = 'text'
							name = 'username'
							placeholder = "Username"
							data-testid='username-input'
							onKeyPress={handleEnterPress}
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
							onKeyPress={handleEnterPress}
							{...register('password', { required: true })}
						/>
						{errors.password && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Password is {errors.password.type}</p>
						)}
						{ props.isLoading ? <span>Loading...</span> : <button className = 'form-item btn'>Log in</button> }
					</form>
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		isLoading: state.isLoading,
		username: state.username,
		error: state.error
	}
}

export default connect(mapStateToProps, {fetchLogin})(Login);
  