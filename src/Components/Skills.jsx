


import React from 'react';
import { skillData } from '../assets/assets';
import { LayoutGroup, motion } from "framer-motion";

function Skills() {
  return (
    <div id="Skills" className='ml-15 sm:ml-5 w-full sm:w-3/4 lg:w-1/2 px-4'>
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center mb-9">
        Skills
      </h1>

      <div>
        {skillData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="mb-8 flex relative ml-3"
          >
            <div>
              <h2 className="text-xl font-semibold mb-4 capitalize">
                {category.category}
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex flex-col items-center gap-2">
                    <img
                      src={skill.logo}
                      alt={skill.title}
                      className="w-12 h-12"
                    />
                    <span className="text-center text-sm">
                      {skill.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
