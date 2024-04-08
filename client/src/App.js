import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/about">About</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
          <li><Link to= "/project">Projects</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </div>
  );
}

export default App;
