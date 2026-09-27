import React from 'react';
import MagicalParticles from './MagicalParticles';

function WelcomeScreen({ onStart }) {
  return (
    <div className="page-container center-content animate-fade-in" style={{ position: 'relative', minHeight: '100vh', width: '100vw', overflow: 'hidden', padding: '1rem' }}>
      <MagicalParticles />
      <div className="parchment-card center-content stack animate-slide-up" style={{ zIndex: 2, maxWidth: '600px', width: '100%', position: 'relative' }}>
        
        <h1 className="text-heading" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Wizarding Personality</h1>
        
        <p className="text-subtitle" style={{ color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '1rem', textAlign: 'center' }}>
          Discover the magic within you.
        </p>
        
        <div className="text-body text-muted" style={{ textAlign: 'center', marginBottom: '2rem', lineHeight: '1.6' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>Unveil which Hogwarts House matches your true nature,</p>
          <p style={{ margin: 0 }}>and reveal which legendary wizarding character shares your path.</p>
        </div>
        
        <button className="btn-primary" onClick={onStart} style={{ padding: '1rem 2.5rem', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Begin Your Journey
        </button>
        
      </div>
    </div>
  );
}

export default WelcomeScreen;
