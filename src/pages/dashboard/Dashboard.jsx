import React from 'react';
import { useLocation } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
    const location = useLocation();
    const { userAnswers } = location.state || { userAnswers: [] };

    return (
        <div className="dashboard-container">
            <h1>Your Answers</h1>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>{`Question ${index + 1}: ${answer}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
