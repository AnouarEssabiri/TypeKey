import React, { useEffect, useRef, useState } from "react";
import Splitting from "splitting";
// import "splitting/dist/splitting.css"; // Ensure you have the CSS file for Splitting.js

function TypingEffect() {
  const headingRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current character index
  const [incorrectKey, setIncorrectKey] = useState(null);

  useEffect(() => {
    // Initialize Splitting with character splitting
    Splitting({ target: headingRef.current, by: "chars" });

    const handleKeyDown = (event) => {
      const keyPressed = event.key;
      const spans = headingRef.current.querySelectorAll("span");

      // Reset all spans to the default color
      spans.forEach((span, index) => {
        if (index < currentIndex) {
          span.style.color = "green"; // Previously typed characters
        } else {
          span.style.color = "black"; // Default color for untyped characters
        }
      });

      // Check if the current character matches the pressed key
      if (spans[currentIndex] && spans[currentIndex].textContent === keyPressed) {
        spans[currentIndex].style.color = "green"; // Correct match
        setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next character
        setIncorrectKey(null); // Reset incorrect key state
      } else {
        spans[currentIndex].style.color = "red"; // Incorrect match for current character
        setIncorrectKey(keyPressed); // Display incorrect key message
      }
    };

    // Add keydown event listener
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]); // Rerun effect when currentIndex changes

  return (
    <div>
      <h1 ref={headingRef} data-splitting="chars" style={{ fontSize: "2em" }}>
        Split by chars (default)
      </h1>
      {incorrectKey && <p style={{ color: "red" }}>Incorrect character: {incorrectKey}</p>}
    </div>
  );
}

export default TypingEffect;
