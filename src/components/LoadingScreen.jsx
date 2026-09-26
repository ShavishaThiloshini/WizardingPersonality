import React from 'react';

function LoadingScreen({ onComplete }) {
  return (
    <div className="loading-screen">
      <h1>Wizarding Personality</h1>
      <p>Loading magic...</p>
      <button onClick={onComplete}>Continue</button>
    </div>
  );
}

export default LoadingScreen;
