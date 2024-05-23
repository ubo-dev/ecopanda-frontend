import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Questions from './pages/questions/Questions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/questions" element={<Questions/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
