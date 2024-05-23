import React, { useState } from "react";
import "./Questions.css";
import Question from "./question/Question";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";

const questionsData = [
  {
    name: "How often do you eat animal-based products?",
    answers: [
      { text: "Never (Vegan)", points: 10 },
      { text: "Infrequently (vegetarian - eggs/dairy, no meat)", points: 8 },
      {
        text: "Occasionally (really like veggies - occasional meat, eggs/dairy)",
        points: 6,
      },
      {
        text: "Often (balanced meat/veggies - meat a few times a week, eggs/dairy almost daily)",
        points: 4,
      },
      { text: "Very Often (meat daily)", points: 2 },
    ],
  },
  {
    name: "How much of the food that you eat is unprocessed, unpackaged or locally grown?",
    answers: [
      { text: "0 < 20%", points: 2 },
      { text: "20% < 40%", points: 4 },
      { text: "40% < 60%", points: 6 },
      { text: "60% < 80%", points: 8 },
      { text: "80%+", points: 10 },
    ],
  },
  {
    name: "What material is your house constructed with?",
    answers: [
      { text: "Wood", points: 8 },
      { text: "Brick/Concrete", points: 6 },
      { text: "Steel", points: 4 },
      { text: "Adobe", points: 10 },
    ],
  },
  {
    name: "How many people live in your household?",
    answers: [
      { text: "1 (Just me)", points: 2 },
      { text: "2-4", points: 6 },
      { text: "4-6", points: 8 },
      { text: "6+", points: 10 },
    ],
  },
  {
    name: "What is the size of your home?",
    answers: [
      { text: "Small (24m²-45m²)", points: 10 },
      { text: "Medium (45m²-140m²)", points: 8 },
      { text: "Large (140m²-460m²)", points: 4 },
      { text: "Huge (460m²+)", points: 2 },
    ],
  },
  {
    name: "How energy efficient is your home?",
    answers: [
      {
        text: "Very inefficient (poor insulation, few LED lamps, heating/cooling systems used often)",
        points: 2,
      },
      {
        text: "Below average (inefficient lighting, standard appliances)",
        points: 4,
      },
      { text: "Average (modern appliances, climate controls)", points: 6 },
      {
        text: "Above average (well insulated, efficient lighting and appliances, careful use)",
        points: 8,
      },
      {
        text: "Efficiency-centered design (passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
        points: 10,
      },
    ],
  },
  {
    name: "What percentage of your home's electricity comes from renewable sources?",
    answers: [
      { text: "0 < 20%", points: 2 },
      { text: "20% < 40%", points: 4 },
      { text: "40% < 60%", points: 6 },
      { text: "60% < 80%", points: 8 },
      { text: "80%+", points: 10 },
    ],
  },
  {
    name: "Compared to your neighbors, how much trash do you generate?",
    answers: [
      { text: "Much less", points: 10 },
      { text: "Less", points: 8 },
      { text: "Same", points: 6 },
      { text: "More", points: 4 },
      { text: "Much more", points: 2 },
    ],
  },
  {
    name: "How far do you travel by car or motorcycle each week? (as a driver or passenger)",
    answers: [
      { text: "0 - 100km", points: 10 },
      { text: "100 - 200km", points: 8 },
      { text: "200 - 300km", points: 6 },
      { text: "300 - 400km", points: 4 },
      { text: "400km+", points: 2 },
    ],
  },
  {
    name: "How energy efficient is your home?",
    answers: [
      {
        text: "Very inefficient (poor insulation, few LED lamps, heating/cooling systems used often)",
        points: 2,
      },
      {
        text: "Below average (inefficient lighting, standard appliances)",
        points: 4,
      },
      { text: "Average (modern appliances, climate controls)", points: 6 },
      {
        text: "Above average (well insulated, efficient lighting and appliances, careful use)",
        points: 8,
      },
      {
        text: "Efficiency-centered design (passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
        points: 10,
      },
    ],
  },
];

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [fade, setFade] = useState(false);
  const navigate = useNavigate();

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setFade(true);
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setFade(false);
      }, 500);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setFade(true);
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
        setFade(false);
      }, 500);
    }
  };

  const handleAnswerSelect = (answer) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestionIndex] = answer;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const totalPoints = userAnswers.reduce(
      (acc, answer) => acc + answer.points,
      0
    );
    let dashboardPath = "/dashboard-low";

    if (totalPoints >= 60) {
      dashboardPath = "/dashboard-medium";
    }
    if (totalPoints >= 90) {
      dashboardPath = "/dashboard-high";
    }

    navigate(dashboardPath, {
      state: { userAnswers: userAnswers, totalPoints: totalPoints },
    });
  };

  const currentQuestion = questionsData[currentQuestionIndex];

  return (
    <div>
        <Navbar></Navbar>
      <div className="questions-container">
        <div className={fade ? "fade-out" : ""}>
          <Question
            question={currentQuestion}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={userAnswers[currentQuestionIndex]}
          />
        </div>
        <div className="navigation-buttons">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous Question
          </button>
          {currentQuestionIndex < questionsData.length - 1 ? (
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex >= questionsData.length - 1}
            >
              Next Question
            </button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Questions;
