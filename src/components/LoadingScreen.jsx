import React, { useEffect, useState } from 'react';
import MagicalParticles from './MagicalParticles';
import '../styles/loading.css';

function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 600);
    }, 3600);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-sequence-container${isFadingOut ? ' fade-out-screen' : ''}`}>

      {/* Subtle background particles */}
      <MagicalParticles />

      {/* Enchanted Book */}
      <div className="enchanted-book-wrapper" aria-hidden="true">
        <div className="book-glow-halo" />
        <div className="enchanted-book">
          <div className="book-body" />
          <div className="book-spine" />
          <div className="book-border-inset" />
          <div className="book-center-emblem" />
          <div className="book-inner-glow" />
        </div>
      </div>

      {/* Title + subtitle */}
      <div className="loading-text-block">
        <h1 className="loading-title">Wizarding Personality</h1>
        <p className="loading-subtitle">Discover what lies within.</p>
      </div>

      {/* Animated dots */}
      <div className="loading-dots" aria-hidden="true">
        <span className="loading-dot" />
        <span className="loading-dot" />
        <span className="loading-dot" />
      </div>

    </div>
  );
}

export default LoadingScreen;
