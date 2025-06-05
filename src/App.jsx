// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Header from './Components/Header';
// import About from './Components/About';
// import Project from './Components/Project';
// import Certification from './Components/Certification';
// import Contact from './Components/Contact';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Footer from './Components/Footer';
// import Education from './Components/Education';
// import Skills from './Components/Skills';
// import Experience from './Components/Experience';
// import './style/Logo.css';
// import PrivacyPolicy from './Components/PrivacyPolicy';

// const Rlogo = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-900">
//       <div className="flex justify-center items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           role="img"
//           viewBox="0 0 100 100"
//           className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48" // Adjust sizes for breakpoints
//           aria-label="Hexagon with R"
//         >
//           {/* Hexagon */}
//           <polygon
//             points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
//             fill="none"
//             stroke="#00FFFF"
//             strokeWidth="4"
//             className="rounding-border"
//           />
//           {/* Letter R */}
//           <text
//             x="50%"
//             y="50%"
//             textAnchor="middle"
//             fill="#00FFFF"
//             fontSize="45px"
//             fontFamily="Consolas, monospace"
//             dominantBaseline="middle"
//             fontWeight="bold"
//           >
//             R
//           </text>
//         </svg>
//       </div>
//     </div>
//   );
// };


// function App() {
//   const [showRlogo, setShowRlogo] = useState(true);

//   useEffect(() => {
//     const logoShown = sessionStorage.getItem('RlogoShown');

//     if (!logoShown) {
//       const timer = setTimeout(() => {
//         setShowRlogo(false); // Hide Rlogo after 2 seconds
//         sessionStorage.setItem('RlogoShown', 'true'); // Persist in session
//       },2000);

//       // Cleanup
//       return () => clearTimeout(timer);
//     } else {
//       setShowRlogo(false);
//     }
//   }, []);

//   return (
//     <div className="w-full overflow-hidden">
//       {/* Display Rlogo only when showRlogo is true */}
//       {showRlogo ? <Rlogo /> : null}

//       <ToastContainer />
//       <Header />
//       <About />
//       <Education />
//       <div className="flex flex-col justify-around gap-8 md:flex-row">
//         <Skills />
//         <Experience />
//       </div>
//       <Project />
//       <Certification />
//       <Contact />
//       <Footer />
//        <Route path="/" element={<Home />} />
//         <Route path='/PrivacyPolicy' element={<PrivacyPolicy />}></Route>
//       {/* <PrivacyPolicy/> */}
//     </div>
//   );
// }

// export default App;
     






// App.jsx or main file

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Footer from './Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      {showRlogo ? (
        <Rlogo />
      ) : (
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            {/* Add other routes here */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
