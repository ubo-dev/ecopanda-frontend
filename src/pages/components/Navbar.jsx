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
              style={{ width: "100px", "cursor":"pointer" }}
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
            </ul>
            <a href="#">CONTACT US</a>
          </div>
        </nav>
      </header>
      ;
    </>
  );
}
export default Navbar;
