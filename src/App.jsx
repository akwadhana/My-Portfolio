import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Modal from './Components/Modal';
import Together from './pages/Together';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="bg-black text-white">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
