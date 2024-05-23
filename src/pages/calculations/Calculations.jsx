import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faBolt,
  faUtensils,
  faTrash,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import "../../App.css";

const EMISSION_FACTORS = {
  India: {
    Transportation: 0.14, // kgCO2/km
    Electricity: 0.82, // kgCO2/kWh
    Diet: 1.25, // kgCO2/meal
    Waste: 0.1, // kgCO2/kg
  },
  Turkey: {
    Transportation: 0.16, // kgCO2/km
    Electricity: 0.9, // kgCO2/kWh
    Diet: 1.3, // kgCO2/meal
    Waste: 0.12, // kgCO2/kg
  },
};

const Calculations = () => {
  const [country, setCountry] = useState("India");
  const [distance, setDistance] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [meals, setMeals] = useState(0);
  const [waste, setWaste] = useState(0);
  const [totalEmissions, setTotalEmissions] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const calculateEmissions = () => {
    const factors = EMISSION_FACTORS[country];
    const transportationEmissions =
      (factors.Transportation * distance * 365) / 1000;
    const electricityEmissions =
      (factors.Electricity * electricity * 12) / 1000;
    const dietEmissions = (factors.Diet * meals * 365) / 1000;
    const wasteEmissions = (factors.Waste * waste * 52) / 1000;

    const total = (
      transportationEmissions +
      electricityEmissions +
      dietEmissions +
      wasteEmissions
    ).toFixed(2);

    setTotalEmissions(total);
    setModalIsOpen(true);
  };

  const modalAnimation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? `translateY(0)` : `translateY(-100%)`,
  });

  return (
    <div>
      <Navbar />
      <div className="App">
        <div className="questions-container">
          <div className="question">
            <h2>
              <FontAwesomeIcon icon={faCar} /> Daily commute distance (in km)
            </h2>
            <input
              type="number"
              value={distance}
              onChange={(e) => setDistance(parseFloat(e.target.value))}
            />
          </div>
          <div className="question">
            <h2>
              <FontAwesomeIcon icon={faBolt} /> Monthly electricity consumption
              (in kWh)
            </h2>
            <input
              type="number"
              value={electricity}
              onChange={(e) => setElectricity(parseFloat(e.target.value))}
            />
          </div>
          <div className="question">
            <h2>
              <FontAwesomeIcon icon={faUtensils} /> Number of meals per day
            </h2>
            <input
              type="number"
              value={meals}
              onChange={(e) => setMeals(parseFloat(e.target.value))}
            />
          </div>
          <div className="question">
            <h2>
              <FontAwesomeIcon icon={faTrash} /> Waste generated per week (in
              kg)
            </h2>
            <input
              type="number"
              value={waste}
              onChange={(e) => setWaste(parseFloat(e.target.value))}
            />
          </div>
          <div className="navigation-buttons">
            <button onClick={calculateEmissions}>
              Calculate CO2 Emissions
            </button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Results Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <animated.div style={modalAnimation}>
          <h2>Results</h2>
          <p>
            <FontAwesomeIcon icon={faGlobe} /> Your total Carbon footprint is:{" "}
            {totalEmissions} tonnes CO2 per year
          </p>

          <p>
            <FontAwesomeIcon icon={faCar} /> Transportation:{" "}
            {(
              (EMISSION_FACTORS[country].Transportation * distance * 365) /
              1000
            ).toFixed(2)}{" "}
            tonnes CO2 per year
          </p>
          <p>
            <FontAwesomeIcon icon={faBolt} /> Electricity:{" "}
            {(
              (EMISSION_FACTORS[country].Electricity * electricity * 12) /
              1000
            ).toFixed(2)}{" "}
            tonnes CO2 per year
          </p>
          <p>
            <FontAwesomeIcon icon={faUtensils} /> Diet:{" "}
            {((EMISSION_FACTORS[country].Diet * meals * 365) / 1000).toFixed(2)}{" "}
            tonnes CO2 per year
          </p>
          <p>
            <FontAwesomeIcon icon={faTrash} /> Waste:{" "}
            {((EMISSION_FACTORS[country].Waste * waste * 52) / 1000).toFixed(2)}{" "}
            tonnes CO2 per year
          </p>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </animated.div>
      </Modal>
    </div>
  );
};

export default Calculations;
