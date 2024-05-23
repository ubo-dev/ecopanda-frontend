import { useNavigate } from "react-router";
import "./Herobanner.css"

function Herobanner() {
    const navigate = useNavigate();

    function handleGetStarted() {
      navigate("/questions");
    }
  
    return (
    <>
      <section id="section-1">
        <div class="white-space"></div>
        <div class="circle-1"></div>
        <div class="circle-2"></div>
        <div class="circle-3"></div>
        <div class="content">
          <div class="shape">
            <svg
              x="0px"
              y="0px"
              width="1207px"
              height="903px"
              viewBox="134 -65 1207 903"
            >
              <path
                fill="#FFFFFF"
                d="M1115.3-65H888.6H662.9H134v293.8v158.3V838h528.9V609.5c123.4-0.3,223.6-99,225.7-221.2c0-125.2,101.4-226.7,226.6-226.7C1239.9,161.7,1341,60.2,1341-65H1115.3z"
              ></path>
            </svg>
          </div>
          <div class="shape-mobile">
            <svg width="830" height="621" viewBox="0 0 830 621" fill="none">
              <path
                d="M674.769 0H518.917H363.686H0V202.032V310.914V621H363.686V463.887C448.545 463.68 517.468 395.784 518.917 311.742C518.917 225.63 588.667 155.871 674.769 155.871C760.456 155.871 830 86.112 830 0H674.769Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div class="info">
            <h1>Welcome to EcoPanda</h1>
            <p>
              Our mission is to make calculating and reducing carbon footprint
              accessible to everyone.
            </p>
            <button onClick={handleGetStarted}>Get Started</button>
          </div>
        </div>
      </section>
    </>
  );
}
export default Herobanner;
