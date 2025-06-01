import React, { useState, useEffect, useRef } from "react";

const RotatingText = () => {
  const words = [
    { text: "awesome.", color: "text-red-600" },
    { text: "beautiful.", color: "text-purple-600" },
    { text: "creative.", color: "text-blue-600" },
    { text: "fabulous.", color: "text-green-600" },
    { text: "interesting.", color: "text-yellow-600" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letters, setLetters] = useState([]);
  const wordRefs = useRef([]);

  useEffect(() => {
    // Split words into individual letters
    const splitWords = words.map((word) => {
      const letters = word.text.split("").map((letter, index) => ({
        letter,
        id: index,
        className: "letter",
      }));
      return { ...word, letters };
    });
    setLetters(splitWords);

    // Rotate text function
    const rotateText = () => {
      const currentWord = wordRefs.current[currentWordIndex];
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = wordRefs.current[nextWordIndex];

      // Rotate out current word letters
      currentWord.children.forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });

      // Show the next word
      nextWord.style.opacity = "1";
      nextWord.children.forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      setCurrentWordIndex(nextWordIndex);
    };

    // Initial animation
    wordRefs.current[currentWordIndex].style.opacity = "1";
    const interval = setInterval(rotateText, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [currentWordIndex]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative text-white text-4xl font-semibold">
        <p className="inline-flex m-0">CSS Animation is</p>
        <div className="relative overflow-hidden">
          {letters.map((word, index) => (
            <p
              key={index}
              ref={(el) => (wordRefs.current[index] = el)}
              className={`absolute ${index === currentWordIndex ? "opacity-100" : "opacity-0"}`}
            >
              {word.letters.map((letter, i) => (
                <span key={i} className={letter.className}>
                  {letter.letter}
                </span>
              ))}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingText;


