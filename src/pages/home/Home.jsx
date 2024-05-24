import Navbar from "../components/Navbar";
import Herobanner from "../components/banner/Herobanner";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <body>
      <main>
        <header>
          <Navbar></Navbar>
        </header>
        <Herobanner></Herobanner>
        <section id="about-us">
          <div class="banner">
            <div class="slider">
              <div class="slide">
                <img src="./img/banner-1.png" />
                <div class="left-info">
                  <div class="penetrate-blur">
                    <h2>About</h2>
                  </div>
                  <div class="hero-content">
                    <div>
                      01.
                    </div>
                    <p>As EcoPanda, we aim to help reduce our environmental impact for a sustainable future. Our goal is to build a better future for our planet by enabling individuals and businesses to understand and reduce their carbon footprint.</p>
                    <p>In a time of increasing environmental challenges, the importance of carbon footprint is growing. It is therefore important for every individual and business to calculate and reduce their carbon footprint.</p>
                  </div>
                </div>
                <div class="right-info">
                  <h2>us</h2>
                </div>
              </div>
            </div>
            <div class="navigation">
              <button class="prev-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <button class="next-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        <section id="vision">
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
      <Footer></Footer>
      <script src="./script.js"></script>
    </body>
  );
}

export default Home;
