 

 import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "./Components/Header";
import About from "./Components/About";
import Project from "./Components/Project";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Rlogo = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 100 100"
      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
      aria-label="Hexagon with R"
    >
      {/* Hexagon stroke animation (draw effect) */}
      <motion.polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke="#00FFFF"
        strokeWidth="4"
        strokeDasharray="300"   // total path length (approx)
        strokeDashoffset="300"  // hidden initially
        animate={{ strokeDashoffset: 0 }} // draw full stroke
        transition={{ duration: 2, ease: "easeInOut" }}
      />

      {/* Static R */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        fill="#00FFFF"
        fontSize="45px"
        fontFamily="Consolas, monospace"
        dominantBaseline="middle"
        fontWeight="bold"
      >
        R
      </text>
    </svg>
  </div>
);

function Home() {
  return (
    <>
      <Header />
      <About />
      <Education />
      <div className="flex flex-col justify-around gap-8 md:flex-row">
        <Skills />
        <Experience />
      </div>
      <Project />
      <Certification />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  const [showRlogo, setShowRlogo] = useState(true);

  useEffect(() => {
    // Always show logo for 2 seconds on every load/refresh
    const timer = setTimeout(() => {
      setShowRlogo(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {showRlogo ? (
        <Rlogo />
      ) : (
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

 


 