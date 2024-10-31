import React, { useState, useEffect } from "react";

const TypingTest = () => {
  const [text, setText] = useState("");
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [mistakeIndices, setMistakeIndices] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);

  // Fetch a single random quote
  const fetchRandomQuote = () => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        const randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)].quote;
        setText(randomQuote);
        setCurrentLetterIndex(0);
        setMistakes(0);
        setMistakeIndices([]);
        setStartTime(null);
        setWpm(0);
      });
  };

  useEffect(() => {
    fetchRandomQuote(); // Fetch a quote on component mount
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const typedLetter = event.key;

      if (startTime === null) {
        setStartTime(Date.now()); // Start timer on first key press
      }

      if (typedLetter === text[currentLetterIndex]) {
        setCurrentLetterIndex((prevIndex) => prevIndex + 1);
      } else {
        setMistakes((prevMistakes) => prevMistakes + 1);
        setMistakeIndices((prevIndices) => [...prevIndices, currentLetterIndex]);
        setCurrentLetterIndex((prevIndex) => prevIndex + 1); // Move to the next character
      }

      // Check if the user has finished typing
      if (currentLetterIndex + 1 === text.length) {
        calculateWPM();
        setTimeout(() => {
          fetchRandomQuote(); // Refresh the quote
        }, 2000); // Change this value to set how long to wait before refreshing (in milliseconds)
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, [currentLetterIndex, mistakes, startTime, text]);

  const calculateWPM = () => {
    const endTime = Date.now();
    const timeTakenInMinutes = (endTime - startTime) / 60000; // Convert milliseconds to minutes
    const typedWords = Math.floor(currentLetterIndex / 5); // Approximate WPM calculation
    setWpm(Math.round(typedWords / timeTakenInMinutes));
  };

  return (
    <div className="typezone">
      <h1>TRY TO TYPE FAST AS YOU CAN</h1>
      <p className="text">
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              color:
                index < currentLetterIndex
                  ? mistakeIndices.includes(index)
                    ? "red" 
                    : "white" 
                  : "#b2afaf9d", 
              backgroundColor: index === currentLetterIndex ? "rgba(255, 255, 255, 0.3)" : "transparent", // Highlight current character
              transition: "background-color 0.1s",
              fontWeight:
              index < currentLetterIndex
                ? mistakeIndices.includes(index)
                  ? "bold" 
                  : "bolder" 
                : "light", 
            }}
          >
            {char}
          </span>
        ))}
      </p>
      <div className="zoneinfo">
        <p className="Mistake">
          MISTAKES <span>{mistakes}</span>
        </p>
        <p className="WPM">
          WPM <span>{wpm}</span>
        </p>
      </div>
      <button className="refresh" onClick={fetchRandomQuote}>↺</button>
    </div>
  );
};

export default TypingTest;
