// import React from 'react';
// import { motion } from 'framer-motion';
// import { assets, projectData } from '../assets/assets';

// function Testimonials() {
//   return (
//     <div
//       className="mt-3 container mx-auto py-10 lg:px-32 w-full px-4 sm:px-6 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card"
//       id="Project"
//     >
//       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
//         Project <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
//       </h1>
//       <p className="text-center text-gray-400 mb-12 max-w-md mx-auto">
//         Please go through the project given below.
//       </p>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3" >
//         {projectData.map((project, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 50 }} // Start with hidden and slightly below
//             whileInView={{ opacity: 1, y: 0 }} // Fade in and move to original position
//             viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
//             transition={{ duration: 0.6, delay: index * 0.1 }} // Delay each animation slightly for staggered effect
//             className="max-w-full border shadow-lg rounded px-6 py-8 text-start hover:bg-gray-800"
//           >
//             <div className="flex flex-row gap-2 items-center">
//               <img
//                 className="w-12 h-12 rounded-full border-2 border-blue-400"
//                 src={project.image}
//                 alt={project.name}
//               />
//               <h2 className="text-lg sm:text-xl text-green-400 font-medium">{project.name}</h2>
//             </div>
//             <p className="text-gray-300 font-medium mb-4 text-sm">{project.title}</p>
//             <div className="flex flex-wrap gap-2 text-red-500 mb-4">
//               {project.techStack.map((tech, idx) => (
//                 <img
//                   key={idx}
//                   src={tech}
//                   alt="tech stack"
//                   className="w-6 h-6 sm:w-8 sm:h-8"
//                 />
//               ))}
//             </div>
//             <p className="text-gray-300 text-sm sm:text-base">{project.text}</p>
//             <div className="flex gap-4 mt-4">
//               <a href={project.link_src} target="_blank" rel="noopener noreferrer">
//                 <img src={project.link} alt="Project Link" className="w-8 h-8" />
//               </a>
//               <a href={project.github_src} target="_blank" rel="noopener noreferrer">
//                 <img src={project.github} alt="GitHub Link" className="w-8 h-8" />
//               </a>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Testimonials;


import React from 'react';
import { motion } from 'framer-motion';
import { assets, projectData } from '../assets/assets';

function Projects() {
  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8  overflow-hidden"
      id="projects"
    >

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Explore my collection of carefully crafted projects, showcasing innovative solutions 
            and cutting-edge technologies in modern web development.
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15,
                ease: [0.25, 0.25, 0, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden transition-all duration-500 group-hover:border-blue-400/50 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-purple-400/5 to-emerald-400/5"></div>
                </div>

                <div className="relative p-8 h-full flex flex-col">
                  {/* Project Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img
                        className="w-14 h-14 rounded-xl border-2 border-gray-600 group-hover:border-blue-400 transition-colors duration-300 object-cover"
                        src={project.image}
                        alt={project.name}
                      />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 mb-1">
                        {project.name}
                      </h3>
                      <p className="text-sm text-gray-400 font-medium">
                        {project.title}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="relative group/tech"
                      >
                        <img
                          src={tech}
                          alt="technology"
                          className="w-8 h-8 rounded-lg transition-all duration-300 group-hover:shadow-lg"
                        />
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="flex-1 mb-6">
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {project.text}
                    </p>
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-4 pt-4 border-t border-gray-700/50">
                    <motion.a
                      href={project.link_src}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                    >
                      <img src={project.link} alt="Live Demo" className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github_src}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
                    >
                      <img src={project.github} alt="GitHub" className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6">
            Interested in working together?
          </p>
          <motion.a  href="#Contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </motion.a>
        </motion.div> */}

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="text-center mt-20"  // increased margin top
>
  <p className="text-gray-400 mb-8 text-xl md:text-2xl">
    Interested in working together?
  </p>
  <motion.a  
    href="#Contact"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="px-12 py-5 text-lg md:text-xl bg-gradient-to-r from-purple-500 to-blue-500 
               hover:from-purple-600 hover:to-blue-600 text-white font-semibold rounded-xl 
               transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
  >
    Get In Touch
  </motion.a>
</motion.div>


      </div>
    </section>
  );
}

export default Projects;
 