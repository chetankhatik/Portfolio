import React, { useEffect, useState } from "react";

const SentencePrinter = ({ sentences }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentLetterIndex < sentences[currentIndex].length) {
        setCurrentLetterIndex((prevLetterIndex) => prevLetterIndex + 1);
      } else {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
        setCurrentLetterIndex(0);
      }
    }, 200); // Adjust the interval to control the speed of letter printing

    return () => clearInterval(interval);
  }, [currentIndex, currentLetterIndex, sentences]);

  return <h2>{sentences[currentIndex].slice(0, currentLetterIndex)}</h2>;
};

export default SentencePrinter;
