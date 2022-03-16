import React, { useState } from 'react';
import './Dashboard.css' 
import DashboardRoutes from './DashboardRoutes';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

function Dashboard() {
    const [username , setUsername] = useState("")
	const navigate = useNavigate()

    function backtologin() {
        navigate('/')
    }

    function checkAuthorization() {
		axiosWithAuth()
		.get("/users/user/3")
		.then((response) => {
			setUsername(response.data.username) 
		}) 
		if (username === "admin") {
			return true
		} else
		return false
	}
    return (
            <div data-testid = "dashboard" className= "dash-container">
                {
                    checkAuthorization()
                    ?
                    <div className= "center-content">
                        <div className= "sidebar">
                            <NavigationBar />
                        </div>
                    
                        <DashboardRoutes />
                    </div> 
                    : <div 
                    style={{
                        color: "red", 
                        fontSize: "30px", 
                        fontWeight: "40px"
                    }}>
                    <h2>Must be logged in to access website</h2>
                    <button 
                        className='login-btn'
                        onClick={backtologin}>
                    Go back to Log in</button> 
                    </div>
                }
            </div>
    );
};

export default Dashboard;
