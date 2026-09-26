import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="welcome-screen">
      <h1>Welcome to Wizarding Personality</h1>
      <p>Discover your Hogwarts House or matching wizarding character in this magical journey!</p>
      <button onClick={onStart}>Begin Your Journey</button>
    </div>
  );
}

export default WelcomeScreen;
