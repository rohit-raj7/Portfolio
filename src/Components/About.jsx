import React from 'react';
import { motion } from 'framer-motion';

function About() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },  
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.1, ease: "easeOut" } },
  };

  return (
    <motion.div
      id="About"
      className="flex flex-col items-center justify-center container mx-auto p-6 sm:p-14 md:px-20 lg:px-32 w-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-4 underline"
        initial={{ y: -15, opacity: 0, scale: 0.95 }}  
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        About
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start mt-10 text-white w-full">
        
        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 gap-6 md:gap-10 w-full md:w-1/2 md:pr-16 border-b-2 md:border-b-0 md:border-r-2 border-gray-700 pb-8 md:pb-0"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Year of Experience", value: "1+" },
            { label: "Projects Completed", value: "4+", link: "#Project" },
            { label: "Questions Solved on LeetCode", value: "300+", link: "https://leetcode.com/u/rohit-raj7/" },
            { label: "Ongoing Projects", value: "2" }
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`pr-6 ${index % 2 === 1 ? 'border-r-0' : 'border-r-2 border-gray-600'}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <p className="text-4xl font-medium">{item.value}</p>
                  <p className='text-gray-300'>{item.label}</p>
                </a>
              ) : (
                <>
                  <p className="text-4xl font-medium">{item.value}</p>
                  <p className='text-gray-300'>{item.label}</p>
                </>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* About Description */}
        <motion.div
          className="text-white p-4 md:p-4 rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto shadow-lg relative"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-1 left-1 w-9 h-9 border-t-4 border-l-4 border-sky-400"></div>
          <div className="absolute bottom-1 right-1 w-9 h-9 border-b-4 border-r-4 border-sky-400"></div>

          <p className="text-gray-200 text-[17px] md:text-xl">
            I’m <span className="text-blue-300 cursor-pointer">Rohit Raj</span>, a B.Tech student in Computer Science and Engineering (IoT).
            Passionate about technology, I specialize in <span className="text-blue-200 cursor-pointer">full-stack development</span>,<span className="text-blue-200 cursor-pointer"> problem-solving</span>, and <span className="text-blue-200 cursor-pointer">project</span> building.
            With hands-on experience in programming, I strive to create impactful solutions that drive innovation andproblem-solving
            enhance user experiences in the evolving tech landscape.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
