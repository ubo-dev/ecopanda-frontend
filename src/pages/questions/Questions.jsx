import React, { useState } from "react";
import "./Questions.css";
import Question from "./question/Question";
import Navbar from "../components/Navbar";

const questionsData = [
  {
    name: "How often do you eat animal-based products?",
    answers: [
      "Never(Vegan)",
      "Infrequently(vegetarian - eggs/dairy, no meat)",
      "Occasionally(really like veggies - occasional meat, eggs/dairy)",
      "Often(balanced meat/veggies - meat a few times a week, eggs/dairy almost daily)",
      "Very Often(meat daily)",
    ],
  },
  {
    name: "How much of the food that you eat is unprocessed, unpackaged or locally grown?",
    answers: ["0 < 20%", "20% < 40%", "40% < 60%", "60% < 80%", "80%+"],
  },
  {
    name: "What material is your house constructed with?",
    answers: ["Wood", "Brick/Concrete", "Steel", "Adobe"],
  },
  {
    name: "How many people live in your household? ",
    answers: ["1(Just me)", "2-4", "4-6", "6+"],
  },
  {
    name: "What is the size of your home?",
    answers: [
      "Small(24m^2-45m^2)",
      "Medium(45m^2-140m^2)",
      "Large(140m^2-460m^2)",
      "Huge(460m^2+)",
    ],
  },
  {
    name: "How energy efficient is your home? ",
    answers: [
      "Very inefficient(poor insulation, few LED lamps, heating/cooling systems used often)",
      "Below average(inefficient lighting, standard appliances)",
      "Average(modern appliances, climate controls)",
      "Above average(well insulated, efficient lighting and appliances, careful use)",
      "Efficiency-centered design(passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
    ],
  },
  {
    name: "What percentage of your home's electricity comes from renewable sources? ",
    answers: ["0 < 20%", "20% < 40%", "40% < 60%", "60% < 80%", "80%+"],
  },
  {
    name: "Compared to your neighbors, how much trash do you generate? ",
    answers: ["Much less", "Less", "Same", "More", "Much more"],
  },
  {
    name: "How far do you travel by car or motorcycle each week? (as a driver or passenger) ",
    answers: [
      "0 - 100km",
      "100 - 200km",
      "200 - 300km",
      "300 - 400km",
      "400km+",
    ],
  },
  {
    name: "How energy efficient is your home? ",
    answers: [
      "Very inefficient(poor insulation, few LED lamps, heating/cooling systems used often)",
      "Below average(inefficient lighting, standard appliances)",
      "Average(modern appliances, climate controls)",
      "Above average(well insulated, efficient lighting and appliances, careful use)",
      "Efficiency-centered design(passive heating/cooling, advanced temperature control and ventilation, low electricity use)",
    ],
  },
];

function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [fade, setFade] = useState(false);

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
          <button
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex >= questionsData.length - 1}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
