// import React from "react";
// import { motion } from "framer-motion"; 

// import { ExperienceData } from '../assets/assets';

// const Timeline = () => {
//   return (
//     <div className="relative w-full sm:w-2/3 mx-auto py-16 bg-gray-900 text-gray-100 px-4 sm:px-8">
//       <h1
//         id="Experience"
//         className="text-3xl sm:text-4xl font-extrabold text-center mb-10 tracking-wide"
//       >
//         Experience
//       </h1>
//       <ul className="relative grid gap-10 sm:gap-16 max-w-5xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-2 sm:before:left-6 before:w-[2px] before:bg-gray-700">
//         {ExperienceData.map((item, index) => (
//           <motion.li
//             key={index}
//             className={`relative flex flex-col items-start gap-4 pl-8 sm:pl-14`}
//             initial={{ scale: 0.9, opacity: 0 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             viewport={{ once: false, amount: 0.5 }}
//             transition={{ duration: 0.75, delay: index * 0.1 }}
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.img}
//                 alt={item.title}
//                 className="block w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" 
//               />
//               <h2 className="text-md sm:text-lg font-bold text-white">{item.title}</h2>
//               {item.link_src && (
//                 <a href={item.link_src} target="_blank" rel="noopener noreferrer">
//                   <img className="w-5 h-5" src={item.link} alt="link" />
//                 </a>
//               )}
//             </div>
//             <div className="flex flex-col gap-2 sm:gap-4">
//               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-sm sm:text-base font-semibold">
//                 <span className="text-gray-200">{item.position}</span>
//                 <span className="text-gray-400 mt-1 sm:mt-0">{item.year}</span>
//               </div>
//               <p className="text-gray-300 leading-relaxed text-sm sm:text-base pl-4 sm:pl-6">
//                 {item.description}
//               </p>
//             </div>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Timeline;
import React from "react";
import { motion } from "framer-motion";
import { ExperienceData } from '../assets/assets';

const Timeline = () => {
  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 text-gray-100 px-4 sm:px-8 py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            id="Experience"
            className="text-5xl sm:text-6xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
          >
            Experience
          </motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <motion.div
            className="absolute left-6 sm:left-1/2 sm:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {ExperienceData.map((item, index) => (
              <motion.div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                } flex-row`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Timeline Node */}
                <motion.div
                  className="absolute left-6 sm:left-1/2 sm:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(147, 51, 234, 0.8)" }}
                />

                {/* Content Card */}
                <motion.div
                  className={`ml-16 sm:ml-0 flex-1 max-w-md mx-auto sm:mx-0 ${
                    index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'
                  }`}
                  whileHover={{ 
                    y: -8,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="relative"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover ring-2 ring-purple-500/30 hover:ring-purple-400 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-purple-600/20 to-transparent" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 hover:text-purple-300 transition-colors">
                          {item.title}
                        </h3>
                        {item.link_src && (
                          <motion.a
                            href={item.link_src}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img className="w-4 h-4" src={item.link} alt="link" />
                            <span className="text-sm">Visit</span>
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Position and Year */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
                      <span className="text-purple-300 font-semibold text-base">
                        {item.position}
                      </span>
                      <span className="text-gray-400 text-sm font-medium px-3 py-1 bg-gray-700/50 rounded-full">
                        {item.year}
                      </span>
                    </div>

                    {/* Description */}
                    <div className="relative">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                      <p className="text-gray-300 leading-relaxed pl-4 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Animation Elements */}
                <motion.div
                  className="absolute -z-10 opacity-20"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
         
        </motion.div>
      </div>
    </div>
  );
};

export default Timeline;






 