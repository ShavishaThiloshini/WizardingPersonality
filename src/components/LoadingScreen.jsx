import React, { useEffect, useState } from 'react';
import MagicalParticles from './MagicalParticles';

function LoadingScreen({ onComplete }) {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Total duration ~2.5 seconds before transition
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(onComplete, 500); // 500ms for fade out transition
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`page-container center-content ${isFadingOut ? 'animate-fade-out' : 'animate-fade-in'}`} style={{ position: 'relative', zIndex: 1, backgroundColor: 'var(--color-background)', height: '100vh', width: '100vw', padding: 0 }}>
      <MagicalParticles />
      <div className="stack center-content" style={{ zIndex: 2 }}>
        
        <div className="logo-placeholder" style={{ marginBottom: '2rem' }}>
          <h1 className="text-title" style={{ 
            textShadow: '0 0 15px rgba(195, 154, 28, 0.5)',
            margin: 0,
            lineHeight: 1.2
          }}>
            Wizarding<br/>Personality
          </h1>
        </div>
        
        <div className="loading-indicator">
          <div className="magical-spinner"></div>
        </div>
        
        <p className="text-subtitle animate-float" style={{ color: 'var(--color-light-gold)', marginTop: '1.5rem', letterSpacing: '2px' }}>
          Loading magic...
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
