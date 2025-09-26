

import React from 'react';
import { assets } from '../assets/assets';
import '../style/Education.css';
import { motion } from "framer-motion";

function Education() {
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.75, delay: 0.1 } },
  };

  return (
    <div id='Education'>
       <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center mb-9">
        Education<span className="underline underline-offset-4 decoration-1 font-light"> Details</span>
      </h1>
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
     
    >
     
      <div className="timeline">
        {/* Left Container */}
        <motion.div
          className="containers left-containers"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={assets.gec_banka_img}
            alt="Government Engineering College, Banka"
            className="rounded-lg shadow-lg"
          />
          <div className="text-box bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-sky-300">
              Government Engineering College, Banka
            </h2>
            <small className="text-gray-400 block font-medium mt-1">2022-2026</small>
            <p className="text-gray-300 mt-2">
              Bachelor of Technology (
              <span className="text-sky-500 font-medium">Computer Science & Engineering-IOT</span>
              )
            </p>
            <span className="left-containers-arrow"></span>
          </div>
        </motion.div>

        {/* Right Container */}
        <motion.div
          className="containers right-containers"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src={assets.inter_college_img}
            alt="Sarvajanik Inter College Samukhiamore, Banka"
            className="rounded-lg shadow-lg"
          />
          <div className="text-box bg-gray-800 p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-sky-300">
              Sarvajanik Inter College Samukhiamore, Banka
            </h2>
            <small className="text-gray-400 block font-medium mt-1">2019-2021</small>
            <p className="text-gray-300 mt-2">
              12th Grade (<span className="text-sky-500 font-medium">Science - PCM</span>)
            </p>
            <span className="right-containers-arrow"></span>
          </div>
        </motion.div>
      </div>
    </motion.div>
    </div>
  );
}

export default Education;
 