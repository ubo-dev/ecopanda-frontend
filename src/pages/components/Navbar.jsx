import { useNavigate } from "react-router";
import "../../index.css";

function Navbar() {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  return (
    <>
      <header>
        <nav>
          <div>
            <img
              onClick={handleHome}
              style={{ width: "100px", cursor: "pointer" }}
              src={require("./PNG.png")}
              alt="ecopanda"
            ></img>
            <ul>
              <li>
                <a href="#">ABOUT US</a>
              </li>
              <li>
                <a href="#">VISION</a>
              </li>
              <li>
                <a href="#">MISSION</a>
              </li>
              <li>
                <a href="/calculations">CALCULATIONS</a>
              </li>
            </ul>
            <a href="#">CONTACT US</a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 18L20 18"
                  stroke="#5dd597"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="#5dd597"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M4 6L20 6"
                  stroke="#5dd597"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
