 
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Components/Footer';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import './style/Logo.css';
import PrivacyPolicy from './Components/PrivacyPolicy.jsx';
import ForgotPassword from '../../src/Login-Signup/ForgotPassword.jsx';
import Login from '../../src/Login-Signup/Login.jsx';
import Signup from '../../src/Login-Signup/Signup.jsx'; 
import Dashboard from './Dashboard.jsx'



const Rlogo = () => (
  <div className="flex justify-center items-center min-h-screen bg-gray-900">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 100 100"
      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
      aria-label="Hexagon with R"
    >
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke="#00FFFF"
        strokeWidth="4"
      />
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
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSignup(true);
    }, 5000); // Show after 5 seconds

    return () => clearTimeout(timer);
  }, []);

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

      {/* Signup Popup */}
     {showSignup && (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    onClick={() => setShowSignup(false)} // Close on outside click
  >
    <div
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()} // Prevent close on modal click
    >
      <button
        onClick={() => setShowSignup(false)}
        className="absolute top-2 right-1 text-gray-900 hover:text-red-600 text-2xl font-bold transition duration-200"
      >
        ✕
      </button>
      <Signup />
    </div>
  </div>
)}

    </>
  );
}

function App() {
  const [showRlogo, setShowRlogo] = useState(true);

  useEffect(() => {
    const logoShown = sessionStorage.getItem('RlogoShown');
    if (!logoShown) {
      const timer = setTimeout(() => {
        setShowRlogo(false);
        sessionStorage.setItem('RlogoShown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setShowRlogo(false);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {showRlogo ? <Rlogo /> : (
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;

