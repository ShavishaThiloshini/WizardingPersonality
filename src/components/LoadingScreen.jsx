import React, { useEffect, useState } from 'react';
import MagicalParticles from './MagicalParticles';
import '../styles/loading.css';

function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // 5.2 seconds total duration before calling onComplete
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        onComplete();
      }, 500); // 500ms fade out transition
    }, 5200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`loading-sequence-container ${isFadingOut ? 'fade-out-screen' : ''}`}>
      <MagicalParticles />
      
      <div className="enchanted-book-container" aria-hidden="true">
        <div className="book-glow"></div>
        <div className="book-wrapper">
          <div className="book-spine"></div>
          <div className="book-pages"></div>
          <div className="book-cover left">
            <div className="book-emblem"></div>
          </div>
          <div className="book-cover right">
            <div className="book-emblem"></div>
          </div>
        </div>
      </div>

      <div className="house-symbols" aria-hidden="true">
        <span className="symbol symbol-1">🦁</span>
        <span className="symbol symbol-2">🦡</span>
        <span className="symbol symbol-3">🦅</span>
        <span className="symbol symbol-4">🐍</span>
      </div>

      <div className="final-text-container">
        <h1 className="text-title" style={{ margin: 0, textShadow: '0 0 15px rgba(195, 154, 28, 0.8)', letterSpacing: '2px' }}>
          WIZARDING PERSONALITY
        </h1>
        <p className="text-subtitle" style={{ color: 'var(--color-light-gold)', marginTop: '0.5rem', fontStyle: 'italic', letterSpacing: '1px' }}>
          Discover what lies within.
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
