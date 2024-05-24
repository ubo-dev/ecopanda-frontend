import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import "../../index.css";
import "./navbar.css"; // Import the navbar.css file

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  function handleHome() {
    navigate("/");
  }

  function handleCalculate() {
    navigate("/calculations");
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <nav>
          <div>
            <img
              style={{ width: "100px", cursor: "pointer" }}
              src={require("./PNG.png")}
              alt="ecopanda"
              onClick={handleHome}
            />
            <ul>
              <li>
                <a href="#about-us">ABOUT US</a>
              </li>
              <li>
                <a href="#vision">VISION</a>
              </li>
              <li>
                <a href="#mission">MISSION</a>
              </li>
              <li>
                <a onClick={handleCalculate}>CALCULATE</a>
              </li>
            </ul>
            <a href="#">CONTACT US</a>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M4 18L20 18" stroke="#5dd597" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12L20 12" stroke="#5dd597" strokeWidth="2" strokeLinecap="round" />
                <path d="M4 6L20 6" stroke="#5dd597" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
