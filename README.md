# Typing Test Clone

A simple typing test application implemented in React. This app displays a random quote that users can try to type as fast as possible. It calculates and displays the number of typing mistakes and words per minute (WPM).

## Features

- Fetches a random quote from an API each time a test starts or resets.
- Tracks and displays typing mistakes and WPM in real-time.
- Highlights the current character, previously typed characters, and incorrect characters in different colors.
- Allows users to restart the typing test with a new quote by pressing the refresh button.

## Project Structure

The main code for the app is in `TypingTest.js`, which is responsible for:

- Fetching random quotes
- Handling typing input and tracking mistakes
- Calculating and displaying WPM
- Resetting the test

## Technologies Used

- **React** for building UI components.
- **CSS** for styling and animations.
- **Fetch API** to retrieve quotes from `https://dummyjson.com/quotes`.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm (or Yarn) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/typing-test-clone.git
Navigate to the project directory:

bash
Copier le code
cd typing-test-clone
Install the dependencies:

bash
Copier le code
npm install