


import React, { useEffect, useRef, useState } from "react";
import { projectsData } from "../assets/assets";
import { motion } from "framer-motion";

function Project() {
  const [cardsToShow, setCardsToShow] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0); 
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(Math.min(projectsData.length, 3));
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollPosition = container.scrollLeft;
        const cardWidth = container.offsetWidth / cardsToShow;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => container?.removeEventListener("scroll", handleScroll);
  }, [cardsToShow]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.offsetWidth / cardsToShow;
      container.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      id="Certification"
      className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 py-20 w-full"
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.75, delay: 0.1 }}
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Certification{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Achieved
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Please go through the Certification given below.
      </p>

      <div
        ref={scrollContainerRef}
        className="overflow-x-auto flex gap-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex-shrink-0 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] border shadow-lg rounded px-6 sm:px-8 py-8 sm:py-12 text-start hover:bg-gray-800"
            style={{
              flex: `0 0 ${100 / cardsToShow}%`,
              scrollSnapAlign: "start",
            }}
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-xl text-gray-200 font-medium">
                {project.title}
              </h2>
              <img
                className="w-13 h-13 mr-auto mb-4"
                src={project.image}
                alt={project.title}
              />
            </div>
            <div className="flex flex-row justify-center items-center gap-4 mt-2">
              <p className="text-gray-300">Certificate Link:</p>
              <a href={project.src} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.links_img}
                  alt="Project Link"
                  className="w-8 h-8 bg-transparent"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Dot navigation */}
      <div className="flex justify-center mt-4">
        {projectsData.map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 w-2 mx-1 rounded-full cursor-pointer ${
              activeIndex === index ? "bg-blue-700" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </motion.div>
  );
}

export default Project;




// import React, { useEffect, useState } from "react";
// import { assets, projectsData } from "../assets/assets";
// import { motion } from "framer-motion";

// function Project() {
//   const [cardsToShow, setCardsToShow] = useState(1);

//   useEffect(() => {
//     const updateCardsToShow = () => {
//       if (window.innerWidth >= 1024) {
//         setCardsToShow(Math.min(projectsData.length, 3));
//       } else if (window.innerWidth >= 768) {
//         setCardsToShow(2);
//       } else {
//         setCardsToShow(1);
//       }
//     };
//     updateCardsToShow();
//     window.addEventListener("resize", updateCardsToShow);

//     return () => window.removeEventListener("resize", updateCardsToShow);
//   }, []);

//   return (
//     <motion.div
//       id="Certification"
//       className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 py-20 w-full"
//       initial={{ y: -30, opacity: 0 }}
//       whileInView={{ y: 0, opacity: 1 }}
//       viewport={{ once: false, amount: 0.5 }}
//       transition={{ duration: 0.75, delay: 0.1 }}
//     >
//       <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
//         Certification{" "}
//         <span className="underline underline-offset-4 decoration-1 font-light">
//           Achieved
//         </span>
//       </h1>
//       <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
//         Please go through the Certification given below.
//       </p>

//       <div className="overflow-x-auto flex gap-6 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
//         {projectsData.map((project, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 max-w-[300px] sm:max-w-[350px] md:max-w-[400px] border shadow-lg rounded px-6 sm:px-8 py-8 sm:py-12 text-start hover:bg-gray-800"
//             style={{ flex: `0 0 ${100 / cardsToShow}%` }}
//           >
//             <div className="flex flex-col gap-2">
//               <h2 className="text-xl text-gray-200 font-medium">
//                 {project.title}
//               </h2>
//               <img
//                 className="w-13 h-13 mr-auto mb-4"
//                 src={project.image}
//                 alt={project.title}
//               />
//             </div>
//             <div className="flex flex-row justify-center items-center gap-4 mt-2">
//               <p className="text-gray-300">Certificate Link:</p>
//               <a href={project.src} target="_blank" rel="noopener noreferrer">
//                 <img
//                   src={project.links_img}
//                   alt="Project Link"
//                   className="w-8 h-8 bg-transparent"
//                 />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// export default Project;
