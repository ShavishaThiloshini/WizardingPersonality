import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState("loading");

  const handleLoadingComplete = () => {
    setCurrentScreen("welcome");
  };

  const handleStartJourney = () => {
    setCurrentScreen("quiz-selection");
  };

  return (
    <div className="app-container">
      {currentScreen === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStartJourney} />
      )}
      
      {currentScreen === "quiz-selection" && (
        <div className="quiz-selection-screen">
          <h1>Quiz Selection</h1>
          <p>This section will be developed in a later phase.</p>
        </div>
      )}
    </div>
  );
}

export default App;
