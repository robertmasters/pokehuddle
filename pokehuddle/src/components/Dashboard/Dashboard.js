import React from 'react';
import './Dashboard.css' 
import DashboardRoutes from './DashboardRoutes';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';


function Dashboard() {
	const navigate = useNavigate()

    function backtologin() {
        navigate('/')
    }
    return (
            <div data-testid = "dashboard" className= "dash-container">
                
                {
                    (window.localStorage.getItem('pokehuddle-token'))
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
