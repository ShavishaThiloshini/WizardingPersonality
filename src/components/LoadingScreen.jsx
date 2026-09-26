import React from 'react';

function LoadingScreen({ onComplete }) {
  return (
    <div className="page-container center-content animate-fade-in">
      <div className="stack center-content">
        <h1 className="text-title">Wizarding Personality</h1>
        <p className="text-subtitle animate-float" style={{ color: 'var(--color-light-gold)' }}>
          Loading magic...
        </p>
        <button className="btn-primary" onClick={onComplete}>Continue</button>
      </div>
    </div>
  );
}

export default LoadingScreen;
