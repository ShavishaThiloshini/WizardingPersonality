import React, { useEffect, useState } from 'react';

const MagicalParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 25 particles
    const particleCount = 25;
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 4 + 3}s`,
      animationDelay: `${Math.random() * 3}s`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="magical-particles-container" aria-hidden="true" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 0
    }}>
      {particles.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: 'var(--color-light-gold)',
            borderRadius: '50%',
            opacity: p.opacity,
            animation: `particleFloat ${p.animationDuration} ease-in-out infinite alternate`,
            animationDelay: p.animationDelay,
            boxShadow: '0 0 5px var(--color-light-gold)'
          }}
        />
      ))}
    </div>
  );
};

export default MagicalParticles;
