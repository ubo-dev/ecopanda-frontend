import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function DashboardHigh() {      
    const location = useLocation();
    const { userAnswers, totalPoints } = location.state || { userAnswers: [], totalPoints: 0 };

    return (
        <div className="dashboard-container">
            <h1>High Score Dashboard</h1>
            <p>Total Points: {totalPoints}</p>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>{`Question ${index + 1}: ${answer.text}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default DashboardHigh;
