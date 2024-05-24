import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Questions from "./pages/questions/Questions";
import DashboardLow from "./pages/dashboard/DashboardLow";
import DashboardMid from "./pages/dashboard/DashboardMid";
import DashboardHigh from "./pages/dashboard/DashboardHigh";
import Calculations from "./pages/calculations/Calculations";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/questions" element={<Questions />}></Route>
          <Route path="/dashboard-low" element={<DashboardLow />} />
          <Route path="/dashboard-medium" element={<DashboardMid />} />
          <Route path="/dashboard-high" element={<DashboardHigh />} />
          <Route path="/calculations" element={<Calculations />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
