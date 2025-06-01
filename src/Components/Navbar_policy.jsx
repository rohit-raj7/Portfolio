// Navbar.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutMenu, setShowAboutMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Rlogo />
          </div>
        </div>

        <ul className="hidden md:flex gap-7 text-lg text-white">
          <li>
            <Link to="/" className="cursor-pointer hover:text-gray-400">
              Home
            </Link>
          </li>

          <li className="relative group">
            <span className="cursor-pointer hover:text-gray-400">About</span>
            <ul className="absolute hidden group-hover:flex flex-col gap-2 bg-gray-800 p-4 rounded mt-2 shadow-lg">
              <li><Link to="/" className="hover:text-white">Introduction</Link></li>
              <li><Link to="/" className="hover:text-white">Education</Link></li>
              <li><Link to="/" className="hover:text-white">Skills</Link></li>
              <li><Link to="/" className="hover:text-white">Certifications</Link></li>
            </ul>
          </li>

          <li><Link to="/" className="cursor-pointer hover:text-gray-400">Projects</Link></li>
          <li><Link to="/" className="cursor-pointer hover:text-gray-400">Experience</Link></li>
        </ul>

        <div className="cursor-pointer">
          <p onClick={() => setShowMobileMenu(true)} className="md:hidden w-14 h-14 text-4xl mr-2 text-white rounded-full cursor-pointer">
            &#8801;
          </p>
        </div>
      </div>

      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-opacity-50 bg-black z-20"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed top-0 right-0 w-72 h-screen bg-gray-800 z-30">
            <div className="flex justify-end p-6 cursor-pointer">
              <p
                onClick={() => setShowMobileMenu(false)}
                className="md:hidden w-12 h-12 text-2xl text-white rounded-full"
              >
                &#10005;
              </p>
            </div>
            <ul className="flex flex-col items-start gap-2 mt-5 px-5 text-lg font-medium">
              <li><Link to="/" className="px-4 py-2 rounded-full inline-block">Home</Link></li>
              <li className="relative w-full">
                <span
                  className="px-4 py-2 rounded-full inline-block cursor-pointer"
                  onClick={() => setShowAboutMenu(!showAboutMenu)}
                >
                  About
                </span>
                {showAboutMenu && (
                  <ul className="flex flex-col gap-4 bg-gray-800 p-4 rounded mt-2 shadow-lg w-full">
                    <li><Link to="/" className="hover:text-white">Introduction</Link></li>
                    <li><Link to="/" className="hover:text-white">Education</Link></li>
                    <li><Link to="/" className="hover:text-white">Skills</Link></li>
                    <li><Link to="/" className="hover:text-white">Certifications</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/" className="px-4 py-2 rounded-full inline-block">Projects</Link></li>
              <li><Link to="/" className="px-4 py-2 rounded-full inline-block">Experience</Link></li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

const Rlogo = () => (
  <div className="flex justify-center items-center w-12 h-12 mr-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 100 100"
      width="100"
      height="100"
      aria-label="Hexagon with R"
    >
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke="#00FFFF"
        strokeWidth="6"
        className="rounding-border"
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

export default Navbar;
