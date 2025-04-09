import React from 'react';
import './DashboardHeader.css';
export default function DashboardHeader() {
    return (
        <div className="dashboard-header">
            <h2>Dashboard</h2>
            <div className="header-actions">
                <input type="text" placeholder="Search" />
                <img src="./src/images/Bell.png" alt="" />
                <img src="./src/images/Question.png" alt="" />
                <img src="./src/images/Avatar.png" alt="" />
            </div>
        </div>
    )
}
