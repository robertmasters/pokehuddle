import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function Register() {
    const { register, formState: {errors}, handleSubmit } = useForm({
		mode: 'onBlur'
	})
    const navigate = useNavigate()

    function goToLogin (data) {
        console.log(data)
        axiosWithAuth()
		.post('/api/register', data)
		.then((res) => {
			//store token in local storage
			//navigate to the dashboard after successfull login
			window.localStorage.setItem('token', JSON.stringify(res.data.payload)) // JSON. stringify ensures that token is a string, only downside is that it has to be parsed when its accessed / also used window.localStorage instead of just localStorage, as some browsers dont recognize localStorage as a global variable, so using window. is a safe option
			navigate.push('/')
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
                        <div className = "registration-prompt">
                            <div className ="reg-desc">Welcome to PokeHuddle!</div>
                        </div>                
                    </div>
                
                    <div className = "selection login-flex-item">
                        Already a member? &nbsp;
                        <Link to ='/' className = 'select-logreg'>Login</Link>
                    </div>

                    <form className = 'login-flex-item' onSubmit = {handleSubmit(goToLogin)}>
                
                        <input className = 'form-item'
                            type = 'text'
                            name = 'name'
                            placeholder = "Enter Name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Name is {errors.name.type}</p>
						)}
                        <input className = 'form-item'
                            type = 'text'
                            name = 'username'
                            placeholder = "Username"
                            {...register('username', { required: true })}
                        />
                        {errors.username && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Username is {errors.username.type}</p>
						)}
                        <input className = 'form-item'
                            type="password"
                            name="password"
                            placeholder = "Password"
                            {...register('password', { required: true })}
                        />
                        {errors.password && (
							<p 
							role = 'alert' className='error-message'>Looks like there was an error: Password is {errors.password.type}</p>
						)}
                        <button className = 'form-item btn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
