# TypeKey - Typing Test Clone

[![Typing Test](https://img.shields.io/badge/Typing-Test-brightgreen.svg)](https://github.com/AnouarEssabiri/TypeKey)

A typing test application implemented in React, where users can challenge their typing speed by typing a random quote. The app calculates and displays typing mistakes and words per minute (WPM).

## Features

- Fetches a new random quote every time the test starts or resets.
- Tracks typing mistakes and displays them in real-time.
- Highlights the current character, previously typed characters, and any mistakes with distinct colors.
- Allows users to restart the typing test with a fresh quote by clicking the refresh button.

## Project Structure

The primary code for the app is in `TypingTest.js`, which handles:

- Fetching random quotes.
- Tracking user input and mistakes.
- Calculating WPM (Words Per Minute).
- Resetting the test with a new random quote.

## Technologies Used

- **React** for building the interactive UI.
- **CSS** for styling and animations.
- **Fetch API** to retrieve quotes from `https://dummyjson.com/quotes`.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or Yarn) installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnouarEssabiri/TypeKey.git
2. **Navigate to the project directory**:
   ```bash
   cd TypeKey
3. **Install the dependencies**:
   ```bash
   npm install
4. **Start the development server**:
   ```bash
   npm run dev
5. **Open your browser** and go to http://localhost:3000 to see the app in action.