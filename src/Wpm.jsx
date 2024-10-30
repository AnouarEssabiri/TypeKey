import React, { useState, useEffect } from 'react';
// import './App.css';

const sampleText = "The quick brown fox jumps over the lazy dog"; // Example text

function Wpm() {
    const [inputText, setInputText] = useState('');
    const [startTime, setStartTime] = useState(null);
    const [result, setResult] = useState(null);

    useEffect(() => {
        if (inputText.length === 0) {
            setResult(null); // Reset result on input clear
        }
    }, [inputText]);

    const handleInputChange = (e) => {
        const text = e.target.value;
        setInputText(text);

        // Start timer if input is not empty and timer hasn't started
        if (text.length === 1 && !startTime) {
            setStartTime(new Date());
        }

        // Check if the input is complete
        if (text.length === sampleText.length) {
            calculateResults(text);
        }
    };

    const calculateResults = (typedText) => {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 60000; // Time in minutes
        const wpm = (typedText.split(' ').length / timeTaken).toFixed(2);
        
        const totalWords = sampleText.split(' ').length;
        const correctCount = typedText.split(' ').filter((word, index) => word === sampleText.split(' ')[index]).length;
        const accuracy = ((correctCount / totalWords) * 100).toFixed(2);

        setResult(`WPM: ${wpm}, Accuracy: ${accuracy}%`);
        setInputText(''); // Clear input for the next attempt
        setStartTime(null); // Reset timer
    };

    return (
        <div className="container">
            <h1>Typing Test</h1>
            <div className="text-display">{sampleText}</div>
            <textarea
                className="input-field"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Start typing..."
            />
            {result && <div className="result-display">{result}</div>}
        </div>
    );
}

export default Wpm;
