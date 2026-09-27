import React, { useEffect, useState } from 'react';

const MagicalParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const count = 15;
    const generated = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1.5}px`,
      opacity: Math.random() * 0.35 + 0.1,
      duration: `${Math.random() * 5 + 4}s`,
      delay: `${Math.random() * 4}s`,
    }));
    setParticles(generated);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {particles.map(p => (
        <span
          key={p.id}
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: 'var(--color-light-gold)',
            opacity: p.opacity,
            boxShadow: '0 0 4px var(--color-light-gold)',
            animation: `particleFloat ${p.duration} ease-in-out infinite alternate`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};

export default MagicalParticles;
