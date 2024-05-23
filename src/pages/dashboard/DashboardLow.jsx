import React from 'react';
import { useLocation } from 'react-router-dom';
import { Bar, Pie, Line, Doughnut, Radar } from 'react-chartjs-2';
import 'chart.js/auto';
import './Dashboard.css';

const suggestions = [
    "Consider reducing your meat consumption.",
    "Increase the use of public transport.",
    "Improve home insulation.",
];

const co2Data = {
    labels: ['Transportation', 'Electricity', 'Industry', 'Residential', 'Commercial', 'Agriculture'],
    datasets: [
        {
            label: 'CO2 Emissions (in million metric tons)',
            data: [1800, 1600, 1400, 1000, 800, 600],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
            ],
        },
    ],
};

const energyData = {
    labels: ['Renewable', 'Non-renewable'],
    datasets: [
        {
            label: 'Energy Sources',
            data: [40, 60],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
        },
    ],
};

const footprintData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            label: 'Carbon Footprint Over Time (kg CO2)',
            data: [400, 370, 350, 340, 320, 300],
            fill: false,
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
        },
    ],
};

const wasteData = {
    labels: ['Recyclable', 'Non-recyclable', 'Compostable', 'Hazardous'],
    datasets: [
        {
            label: 'Waste Generation',
            data: [30, 50, 10, 10],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
        },
    ],
};

const efficiencyData = {
    labels: ['Insulation', 'Lighting', 'Appliances', 'Water Usage'],
    datasets: [
        {
            label: 'Efficiency Metrics',
            data: [80, 70, 85, 60],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
    ],
};

function DashboardLow() {
    const location = useLocation();
    const { userAnswers, totalPoints } = location.state || { userAnswers: [], totalPoints: 0 };

    return (
        <div className="dashboard-container">
            <h1>Low Score Dashboard</h1>
            <p>Total Points: {totalPoints}</p>
            <ul>
                {userAnswers.map((answer, index) => (
                    <li key={index}>{`Question ${index + 1}: ${answer.text}`}</li>
                ))}
            </ul>
            <h2>Suggestions to Reduce Carbon Footprint</h2>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index}>{suggestion}</li>
                ))}
            </ul>
            <h2>CO2 Emissions by Sector</h2>
            <div className="chart-container">
                <Bar data={co2Data} />
            </div>
            <h2>Energy Sources</h2>
            <div className="chart-container">
                <Pie data={energyData} />
            </div>
            <h2>Carbon Footprint Over Time</h2>
            <div className="chart-container">
                <Line data={footprintData} />
            </div>
            <h2>Waste Generation</h2>
            <div className="chart-container">
                <Doughnut data={wasteData} />
            </div>
            <h2>Efficiency Metrics</h2>
            <div className="chart-container">
                <Radar data={efficiencyData} />
            </div>
        </div>
    );
}

export default DashboardLow;
