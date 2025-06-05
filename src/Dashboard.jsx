import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';


function App() {
  return (
    <div>
  <Header/>
      <About />
      <Education />
      <div className="flex flex-col justify-around gap-8 md:flex-row">
        <Skills />
        <Experience />
      </div>
      <Project />
      <Certification/>
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
