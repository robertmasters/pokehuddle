import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form"
import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
const client = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_CLIENT_SECRET
function Register() {
    const [isLoading, setIsLoading ] = useState(false)
	const [loginError, setLoginError ] = useState()
    const { register, watch, formState: {errors}, handleSubmit } = useForm({
		mode: "onBlur"
	})
    const navigate = useNavigate()

    function goToLogin (data) {
        const body = JSON.stringify(
            {
                "username": data.username,
                "password": data.password,
                "email": data.email,
                "articles": [],
                "roles": [
                {
                    "role": {
                        "roleid": 2,
                        "name": "user"
                    }
                }
            ]}
        )
		setIsLoading(true)
		axios
		.post("https://masters-pokehuddlerest.herokuapp.com/createnewuser",
		body,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(`${client}:${secret}`).toString("base64")}`,
				"Content-Type": "application/json"
		}})
		.then((res) => {
			setIsLoading(true)
			navigate("/")
			console.log("response: ", res)

		})
		.catch((err)=> {
            setIsLoading(false)
            setLoginError("Registration Error please try again")
            console.log(err)
        })
    }
    const password = watch("password")

    return (
        <div className = "main-container">
            <div>Registration not fully set up,<Link className = "link" to ="/">click here </Link>to go back to login</div>
            
            <div className = "middle-section">
                <div className = "ashPikaimg-container" style={{width: "80%"}}>
                    <img className ="ashpikaimg" src = {require("../../images/ashpika.png").default} alt = "Ash and Pikachu landing page" />
                </div>
                
                <div className= "login-section">
                    <div className = "description login-flex-item">
                        <div className = "registration-prompt">
                            <div className ="reg-desc">Welcome to PokeHuddle!</div>
                        </div>                
                    </div>
                
                    <div className = "selection login-flex-item">
                        Already a member? &nbsp;
                        <Link to ="/" className = "select-logreg">Login</Link>
                    </div>

                    <form className = "login-flex-item" onSubmit = {handleSubmit(goToLogin)}>
                    {
						loginError ? <span role = "alert" className="error-message">{loginError}</span> : null
					}
                        <input className = "form-item"
                            type = "text"
                            name = "username"
                            placeholder = "Username"
                            data-testid="username-input"
                            {...register("username", { required: "Username is required" })}
                        />
                        {errors.username && (
							<p 
							role = "alert" className="error-message">{errors.username.message}</p>
						)}

                        <input className = "form-item"
                            type = "email"
                            name = "email"
                            placeholder = "Email"
                            data-testid="email-input"
                            {...register("email", {
                                required: "Email is required" ,
                                pattern : {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })}
                        />
                        {errors.email && (
							<p 
							role = "alert" className="error-message">{errors.email.message}</p>
						)}

                        <input className = "form-item"
                            type="password"
                            name="password"
                            placeholder = "Password"
                            data-testid="password-input"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && (
							<p 
							role = "alert" className="error-message">{errors.password.message}</p>
						)}
                        <input className = "form-item relative"
                        type="password"
                        name="confirm-password"
                        placeholder = "Confirm Password"
                        data-testid="confirm-password-input"
                        {...register("confirmPassword", {required: "Please confirm password", validate: (value) => value === password || "Passwords do not match"  })}
                        />
                        {errors.confirmPassword && (
                            <p 
                            role = "alert" className="error-message">{errors.confirmPassword.message}</p>
                        )}
                        { isLoading ? <span>Loading...</span> : 
                            
                            <button className = "form-item btn">Register</button> }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
