import React from 'react';
import './Dashboard.css' 
import DashboardRoutes from './DashboardRoutes';
import NavigationBar from './NavigationBar';

function Dashboard() {
    return (
            <div data-testid = "dashboard" className= "dash-container">
                <div className= "center-content">
                    <div className= "sidebar">
                        <NavigationBar />
                    </div>
                    <DashboardRoutes />
                </div>
            </div>
    );
};

export default Dashboard;
