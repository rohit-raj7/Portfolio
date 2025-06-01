import React, { useState } from "react";

const ContactImge = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="letter-image"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`animated-mail transition-all duration-400 ${isHovered ? "translate-y-[50px]" : ""}`}
      >
        <div className="back-fold"></div>
        <div
          className={`letter absolute bottom-0 left-[20px] z-1 overflow-hidden transition-all duration-400 ${isHovered ? "h-[180px]" : "h-[60px]"}`}
        >
          <img src="code.png" alt="Code Image" className="w-[10rem] h-auto" />
          <div className="letter-border"></div>
          <div className="letter-title"></div>
          <div className="letter-context"></div>
          <div className="letter-stamp">
            <div className="letter-stamp-inner"></div>
          </div>
        </div>
        <div
          className={`top-fold absolute top-[50px] w-0 h-0 border-solid border-[50px_100px_0_100px] border-[#cf4a43] origin-top transition-all duration-400 ${isHovered ? "rotate-x-180 z-0" : ""}`}
        ></div>
        <div className="body absolute bottom-0 w-0 h-0 border-solid border-[0_0_100px_200px] border-transparent border-b-[#e95f55] z-2"></div>
        <div className="left-fold absolute bottom-0 w-0 h-0 border-solid border-[50px_0_50px_100px] border-transparent border-l-[#e15349] z-2"></div>
      </div>
      <div
        className={`shadow absolute top-[200px] left-1/2 w-[400px] h-[30px] transition-all duration-400 transform -translate-x-1/2 rounded-full bg-[radial-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0))] ${isHovered ? "w-[250px]" : ""}`}
      ></div>
    </div>
  );
};

export default ContactImge;
