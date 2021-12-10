import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const initialState = {
    credentials: {
    name: '',
    username: '',
    password: ''
  }
}

function Register() {
    const [state, setState] = useState(initialState)
    const navigate = useNavigate()

    function goToLogin () {
        navigate.push('/')
    }

function handleChange(e) {
    setState({
        credentials: {
            ...state.credentials,
            [e.target.name]: e.target.value
        }
    })
   }
    return (
        <div className = "main-container">
            <div>User auth not set up<Link className = "link" to ='/dashboard/research'>click here </Link>to enter app</div>
            
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

                    <form className = 'login-flex-item' onSubmit = {goToLogin}>
                
                        <input className = 'form-item'
                            type = 'text'
                            name = 'name'
                            placeholder = "Enter Name"
                            value = {state.credentials.name}
                            onChange ={handleChange}
                        />
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
                        <button className = 'form-item btn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
