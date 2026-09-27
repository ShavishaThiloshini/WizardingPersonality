import React from 'react';

function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  
  return (
    <div className="progress-container stack" style={{ width: '100%', marginBottom: '1.5rem', alignItems: 'center' }}>
      <p className="text-subtitle" style={{ color: 'var(--color-gold)', margin: 0, fontSize: '1.1rem' }}>
        Question {current} of {total}
      </p>
      
      <div 
        role="progressbar" 
        aria-valuenow={percentage} 
        aria-valuemin="0" 
        aria-valuemax="100"
        style={{
          width: '100%',
          height: '8px',
          backgroundColor: 'rgba(61, 47, 34, 0.2)',
          borderRadius: '4px',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          position: 'relative'
        }}
      >
        <div 
          className="progress-fill"
          style={{
            height: '100%',
            width: `${percentage}%`,
            backgroundColor: 'var(--color-gold)',
            transition: 'width 0.4s ease-out',
            boxShadow: '0 0 8px var(--color-light-gold)'
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;
