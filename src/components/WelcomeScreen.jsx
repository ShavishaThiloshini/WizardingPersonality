import React from 'react';

function WelcomeScreen({ onStart }) {
  return (
    <div className="page-container center-content">
      <div className="parchment-card center-content stack animate-slide-up">
        <h1 className="text-heading">Welcome to Wizarding Personality</h1>
        <p className="text-body">
          Discover your Hogwarts House or matching wizarding character in this magical journey!
        </p>
        <button className="btn-primary" onClick={onStart}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
