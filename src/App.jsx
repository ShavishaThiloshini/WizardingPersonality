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
    <div className="app-container magical-background">
      {currentScreen === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStartJourney} />
      )}
      
      {currentScreen === "quiz-selection" && (
        <div className="page-container center-content animate-fade-in">
          <div className="parchment-card stack center-content">
            <h1 className="text-heading">Quiz Selection</h1>
            <p className="text-body text-muted">This section will be developed in a later phase.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
