 


 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function About() {
  const [inView, setInView] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const paragraphs = [
    "A dedicated Computer Science & Engineering (IoT) student pursuing my B.Tech with an unwavering passion for technological innovation. I specialize in full-stack development, advanced problem-solving, and creating robust scalable solutions that make a real-world impact. With extensive hands-on experience in modern programming paradigms, I'm committed to crafting innovative solutions that enhance user experiences and drive technological advancement in our rapidly evolving digital landscape."
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },  
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.1, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      } 
    },
  };

  const statItems = [
    { label: "Years of Experience", value: "1+", icon: "🚀" },
    { label: "Projects Completed", value: "4+", link: "#Project", icon: "💼" },
    { label: "LeetCode Solutions", value: "300+", link: "https://leetcode.com/u/rohit-raj7/", icon: "⚡" },
    { label: "Active Projects", value: "2", icon: "🔧" }
  ];

  // Typewriter effect logic
  useEffect(() => {
    if (!inView) return;

    let timeout;
    const currentText = paragraphs[currentParagraph];
    
    if (typewriterText.length < currentText.length) {
      timeout = setTimeout(() => {
        setTypewriterText(currentText.substring(0, typewriterText.length + 1));
      }, 30); // Typing speed
    } else if (currentParagraph < paragraphs.length - 1) {
      timeout = setTimeout(() => {
        setCurrentParagraph(prev => prev + 1);
        setTypewriterText('');
      }, 1000); // Pause between paragraphs
    } else {
      // ✅ All typing done → hide cursor
      setShowCursor(false);
    }

    return () => clearTimeout(timeout);
  }, [typewriterText, currentParagraph, inView, paragraphs]);

  // Cursor blinking effect
  useEffect(() => {
    if (!showCursor) return; // Stop blinking if cursor hidden
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  const renderStyledText = (text, paragraphIndex) => {
    const highlights = {
      0: [
        { text: "Computer Science & Engineering (IoT)", className: "text-blue-300 font-semibold" },
        { text: "technological innovation", className: "text-purple-300 font-semibold" },
        { text: "full-stack development", className: "text-purple-300 font-semibold" },
        { text: "problem-solving", className: "text-cyan-300 font-semibold" },
        { text: "scalable solutions", className: "text-blue-300 font-semibold" },
        { text: "modern programming paradigms", className: "text-green-300 font-semibold" },
        { text: "innovative solutions", className: "text-purple-300 font-semibold" },
        { text: "technological advancement", className: "text-blue-300 font-semibold" }
      ]
    };

    let styledText = text;
    const currentHighlights = highlights[paragraphIndex] || [];

    currentHighlights.forEach(highlight => {
      if (text.includes(highlight.text)) {
        styledText = styledText.replace(
          highlight.text,
          `<span class="${highlight.className}">${highlight.text}</span>`
        );
      }
    });

    return <span dangerouslySetInnerHTML={{ __html: styledText }} />;
  };

  return (
    <motion.section
      id="About"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    > 
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: -30, opacity: 0 }}  
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About 
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"> Me</span>
          </motion.h1>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
            {statItems.map((item, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div className="w-full">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block transition-colors duration-200"
                        >
                          <p className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {item.value}
                          </p>
                          <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors">
                            {item.label}
                          </p>
                        </a>
                      ) : (
                        <>
                          <p className="text-3xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                            {item.value}
                          </p>
                          <p className="text-slate-400 text-sm font-medium group-hover:text-slate-300 transition-colors">
                            {item.label}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                  {item.link && (
                    <div className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Click to visit →
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* About Description */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            onViewportEnter={() => setInView(true)}
          >
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-10">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-16 h-16">
                <div className="absolute top-4 left-4 w-8 h-8 border-t-3 border-l-3 border-blue-400 rounded-tl-lg"></div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-3 border-r-3 border-purple-400 rounded-br-lg"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <motion.h3 
                  className="text-2xl font-semibold text-white"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-bold">Rohit Raj</span>
                </motion.h3>

                <motion.div 
                  className="space-y-4 text-slate-300 leading-relaxed min-h-[240px]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Typewriter Effect Container */}
                  <div className="space-y-4">
                    {paragraphs.map((paragraph, index) => (
                      <motion.p
                        key={index}
                        className="text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: index <= currentParagraph ? 1 : 0.3 
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {index < currentParagraph ? (
                          // Completed paragraphs with full styling
                          renderStyledText(paragraph, index)
                        ) : index === currentParagraph ? (
                          // Currently typing paragraph
                          <span>
                            {renderStyledText(typewriterText, index)}
                            {showCursor && (
                              <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
                            )}
                          </span>
                        ) : (
                          // Future paragraphs (dimmed)
                          <span className="opacity-30">
                            {renderStyledText(paragraph, index)}
                          </span>
                        )}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;



 