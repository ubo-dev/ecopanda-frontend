import Navbar from "../components/Navbar";
import Herobanner from "../components/banner/Herobanner";

function Home() {
  return (
    <body>
      <main>
        <header>
          <Navbar></Navbar>
        </header>
        <Herobanner></Herobanner>
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
      <footer>
        <div class="waves">
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
        </div>
        <ul class="social-icon">
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                <path d="M30.996 16.091c-0.001-8.281-6.714-14.994-14.996-14.994s-14.996 6.714-14.996 14.996c0 7.455 5.44 13.639 12.566 14.8l0.086 0.012v-10.478h-3.808v-4.336h3.808v-3.302c-0.019-0.167-0.029-0.361-0.029-0.557 0-2.923 2.37-5.293 5.293-5.293 0.141 0 0.281 0.006 0.42 0.016l-0.018-0.001c1.199 0.017 2.359 0.123 3.491 0.312l-0.134-0.019v3.69h-1.892c-0.086-0.012-0.185-0.019-0.285-0.019-1.197 0-2.168 0.97-2.168 2.168 0 0.068 0.003 0.135 0.009 0.202l-0.001-0.009v2.812h4.159l-0.665 4.336h-3.494v10.478c7.213-1.174 12.653-7.359 12.654-14.814v-0z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 1920 1920">
                <path d="M1920 311.856c-70.701 33.769-146.598 56.47-226.221 66.86 81.317-52.517 143.774-135.529 173.252-234.691-76.236 48.678-160.716 84.028-250.391 103.002-71.718-82.56-174.268-134.06-287.435-134.06-217.75 0-394.165 189.966-394.165 424.206 0 33.318 3.614 65.619 10.165 96.678C617.9 616.119 327.304 447.385 133.045 190.67c-33.77 62.57-53.309 135.53-53.309 213.233 0 147.162 91.031 276.818 196.744 353.054-64.602-2.26-157.101-21.46-157.101-53.309v5.648c0 205.327 114.41 376.658 294.55 415.849-32.978 9.487-78.38 14.795-114.409 14.795-25.412 0-55.454-2.71-79.624-7.793 50.26 168.509 193.13 291.163 365.478 294.777-134.852 113.506-306.07 181.383-490.616 181.383-31.85 0-64.038-2.033-94.758-5.873 174.494 120.17 381.176 190.532 603.67 190.532 724.97 0 1121.055-646.136 1121.055-1206.55 0-18.41-.452-36.932-1.356-55.116 77.026-59.746 143.887-134.4 196.631-219.444" fill-rule="evenodd" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                <title>linkedin</title>
                <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z" />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#fff" />
                <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#fff" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#fff" />
              </svg>
            </a>
          </li>
        </ul>
        <ul class="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Mission</a></li>
        </ul>
        <p>©2024 Ecopanda.io | All Rights Reserved</p>
      </footer>
      <script src="./script.js"></script>
    </body>
  );
}

export default Home;
