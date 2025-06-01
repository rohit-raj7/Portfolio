import React from "react";
import { motion } from "framer-motion"; 

import { ExperienceData } from '../assets/assets';

const Timeline = () => {
  return (
    <div className="relative w-full sm:w-2/3 mx-auto py-16 bg-gray-900 text-gray-100 px-4 sm:px-8">
      <h1
        id="Experience"
        className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide"
      >
        Experience
      </h1>
      <ul className="relative grid gap-10 sm:gap-16 max-w-5xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-2 sm:before:left-6 before:w-[2px] before:bg-gray-700">
        {ExperienceData.map((item, index) => (
          <motion.li
            key={index}
            className={`relative flex flex-col items-start gap-4 pl-8 sm:pl-14`}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: index * 0.1 }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img}
                alt={item.title}
                className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" 
              />
              <h2 className="text-md sm:text-lg font-bold text-white">{item.title}</h2>
              {item.link_src && (
                <a href={item.link_src} target="_blank" rel="noopener noreferrer">
                  <img className="w-5 h-5" src={item.link} alt="link" />
                </a>
              )}
            </div>
            <div className="flex flex-col gap-2 sm:gap-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base font-semibold">
                <span className="text-gray-200">{item.position}</span>
                <span className="text-gray-400 mt-1 sm:mt-0">{item.year}</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base pl-4 sm:pl-6">
                {item.description}
              </p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
