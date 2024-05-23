import React from "react";
import { useLocation } from "react-router-dom";
import { Bar, Pie, Line, Doughnut, Radar } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";
import Navbar from "../components/Navbar";

const suggestions = [
  "Consider using renewable energy sources.",
  "Optimize your waste management practices.",
  "Use energy-efficient appliances.",
];

const co2Data = {
  labels: [
    "Transportation",
    "Electricity",
    "Industry",
    "Residential",
    "Commercial",
    "Agriculture",
  ],
  datasets: [
    {
      label: "CO2 Emissions (in million metric tons)",
      data: [1800, 1600, 1400, 1000, 800, 600],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
      ],
    },
  ],
};

const energyData = {
  labels: ["Renewable", "Non-renewable"],
  datasets: [
    {
      label: "Energy Sources",
      data: [40, 60],
      backgroundColor: ["rgba(75, 192, 192, 0.6)", "rgba(255, 99, 132, 0.6)"],
    },
  ],
};

const footprintData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Carbon Footprint Over Time (kg CO2)",
      data: [400, 370, 350, 340, 320, 300],
      fill: false,
      backgroundColor: "rgba(75, 192, 192, 0.6)",
      borderColor: "rgba(75, 192, 192, 1)",
    },
  ],
};

const wasteData = {
  labels: ["Recyclable", "Non-recyclable", "Compostable", "Hazardous"],
  datasets: [
    {
      label: "Waste Generation",
      data: [30, 50, 10, 10],
      backgroundColor: [
        "rgba(75, 192, 192, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
    },
  ],
};

const efficiencyData = {
  labels: ["Insulation", "Lighting", "Appliances", "Water Usage"],
  datasets: [
    {
      label: "Efficiency Metrics",
      data: [80, 70, 85, 60],
      backgroundColor: "rgba(75, 192, 192, 0.6)",
    },
  ],
};

function DashboardMid() {
  const location = useLocation();
  const { userAnswers, totalPoints } = location.state || {
    userAnswers: [],
    totalPoints: 0,
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <h1>Medium Carbon Footprint Score</h1>
        <p className="total-points">Total Points: {totalPoints}</p>
        <ul className="answers-list">
          {userAnswers.map((answer, index) => (
            <li key={index}>{`Question ${index + 1}: ${answer.text}`}</li>
          ))}
        </ul>
        <h2>Suggestions to Reduce Carbon Footprint</h2>
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
        <div className="charts-grid">
          <div className="chart-container">
            <h3>CO2 Emissions by Sector</h3>
            <Bar data={co2Data} />
          </div>
          <div className="chart-container">
            <h3>Energy Sources</h3>
            <Pie data={energyData} />
          </div>
          <div className="chart-container">
            <h3>Carbon Footprint Over Time</h3>
            <Line data={footprintData} />
          </div>
          <div className="chart-container">
            <h3>Waste Generation</h3>
            <Doughnut data={wasteData} />
          </div>
          <div className="chart-container">
            <h3>Efficiency Metrics</h3>
            <Radar data={efficiencyData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardMid;
