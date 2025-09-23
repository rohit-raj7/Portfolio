 



import React from 'react';
import { skillData } from '../assets/assets';
import { LayoutGroup, motion } from "framer-motion";

function Skills() {
  return (
    <div id="Skills" className='w-full sm:px-8 lg:px-16'>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Skills & Technologies
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto"></div>
        </motion.div>

        {/* Skills Categories */}
        <LayoutGroup>
          <div className="space-y-12">
            {skillData.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                layout
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.1,
                  ease: "easeOut"
                }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/10">
                  {/* Category Title */}
                  <motion.h2 
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl sm:text-3xl font-bold mb-8 capitalize bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  >
                    {category.category}
                  </motion.h2>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                        whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -8,
                          transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        viewport={{ once: false, amount: 0.1 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: skillIndex * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }}
                        className="group/skill"
                      >
                        <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg hover:bg-white/10 cursor-pointer">
                          {/* Skill Icon */}
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 blur-sm"></div>
                            <img
                              src={skill.logo}
                              alt={skill.title}
                              className="w-12 h-12 sm:w-14 sm:h-14 relative z-10 filter drop-shadow-md group-hover/skill:drop-shadow-lg transition-all duration-300"
                            />
                          </div>
                          
                          {/* Skill Name */}
                          <span className="text-center text-xs sm:text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors duration-300 leading-tight">
                            {skill.title}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default Skills;

 