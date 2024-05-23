import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  function handleGetStarted() {
    navigate("/questions");
  }

  return (
    <body>
      <main>
        <header>
          <Navbar></Navbar>
        </header>
        {/*Burda başlıyor*/}
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
            <svg width="830" height="621" viewBox="0 0 830 621" fill="none"><path d="M674.769 0H518.917H363.686H0V202.032V310.914V621H363.686V463.887C448.545 463.68 517.468 395.784 518.917 311.742C518.917 225.63 588.667 155.871 674.769 155.871C760.456 155.871 830 86.112 830 0H674.769Z" fill="white"></path></svg>
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
        {/*Umudi buraya kadar ayrıcaksın*/}
        <section id="section-3">
          <div class="faqs">
            <div class="faqs-header">
              <span>Have any questions?</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>What is a carbon footprint?</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                A carbon footprint is a metric that measures the amount of
                direct or indirect greenhouse gas emissions of an individual or
                organisation. It is usually measured in tonnes of CO2 and is
                used to measure the impact of a person or organisation on the
                environment.
              </p>
            </button>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>Why should I calculate my carbon footprint?</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                Calculating your carbon footprint helps you understand your
                personal or organisational environmental impact and develop
                mitigation strategies. So you can adopt a more sustainable
                lifestyle for our planet.
              </p>
            </button>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>How do I calculate my carbon footprint?</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                A carbon calculator is usually used to calculate the carbon
                footprint. These tools calculate your carbon footprint by taking
                into account energy consumption, transport habits, shopping
                habits and other factors.
              </p>
            </button>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>What are the ways to reduce carbon footprint?</h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                There are many ways to reduce your carbon footprint. For
                example, you can take steps such as using energy-efficient
                appliances, recycling, choosing sustainable transport options
                and implementing effective waste management.
              </p>
            </button>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>
                  What data does this application use to calculate my carbon
                  footprint?
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                Our app calculates your carbon footprint by taking into account
                energy consumption, transport habits, shopping habits and other
                environmental factors.
              </p>
            </button>
            <button class="faqser active">
              <div class="faqs-content-header">
                <h6>
                  What should I pay attention to when calculating my carbon
                  footprint?
                </h6>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    d="M17 9.5L12 14.5L7 9.5"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>
                When calculating your carbon footprint, you should take care to
                keep your data as accurate and up-to-date as possible. It is
                also important to understand the methodology of the calculation
                tool.
              </p>
            </button>
          </div>
        </section>
      </main>
      <script src="./script.js"></script>
    </body>
  );
}

export default Home;
