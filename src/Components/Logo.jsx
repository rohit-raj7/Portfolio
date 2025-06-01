

import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import "../style/Logo.css";

const Logo = () => {
  useEffect(() => {
    const container = document.querySelector(".container");

    const createDroplet = () => {
      const droplet = document.createElement("div");
      droplet.classList.add("droplet");
      
      const randomImage = assets[`code_img${Math.floor(Math.random() * 5) + 2}`];
      droplet.style.backgroundImage = `url(${randomImage})`;
      droplet.style.backgroundSize = "cover";

      const size = Math.random() * 30 + 20;
      droplet.style.width = `${size}px`;
      droplet.style.height = `${size}px`;

      droplet.style.left = "50%";
      droplet.style.top = "50%";
      droplet.style.transform = "translate(-50%, -50%)";

      container.appendChild(droplet);
      const angle = Math.random() * 360; 
      const distance = Math.random() * 200 + 50;
      const x = Math.cos((angle * Math.PI) / 180) * distance;
      const y = Math.sin((angle * Math.PI) / 180) * distance;

      setTimeout(() => {
        droplet.style.transform = `translate(${x}px, ${y}px) scale(1.5)`;
        droplet.style.opacity = "0";
      }, 10);

      setTimeout(() => {
        droplet.remove();
      }, 3000);
    };

    const interval = setInterval(createDroplet, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="container relative w-[300px] h-[300px] p-0 m-0">
        <img
          src={assets.main_img}
          alt="Main Image"
          className="absolute w-full h-full object-cover z-10"
          style={{ backgroundColor: "transparent", margin: 0, padding: 0 }}  
        />
      </div>
    </div>
  );
};

export default Logo;
