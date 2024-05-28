import { useState } from 'react';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Layout from './Components/Layout';

function App() {
  return (
    <div className="bg-black text-white">
    <Router>
    <NavBar/>
      <Routes>
        <Route element ={<Layout/>}/>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
   <Layout/>
    </Router>
  </div>
  );
}

export default App;
