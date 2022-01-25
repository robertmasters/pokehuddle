import React from 'react';
import SideBar from './SideBar' 
import './Dashboard.css'
import DashboardRoutes from './DashboardRoutes';

function Dashboard() {
    return (
            <div data-testid = "dashboard" className= "dash-container">
                <div className= "center-content">
                    <div className= "sidebar">
                        <SideBar />
                    </div>
                    <DashboardRoutes />
                </div>
            </div>
    );
};

export default Dashboard;
