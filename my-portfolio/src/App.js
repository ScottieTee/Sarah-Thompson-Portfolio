import React from "react";
import Navbar from './componets/Navbar.jsx';
import Hero from './componets/hero';
import Contact from './componets/contact';
import About from './componets/about';
import Projects from './componets/projects';
import Tech from './componets/technologies'
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tech" element={<Tech />} />
    </Routes>
  </Router>
  );
}
export default App;