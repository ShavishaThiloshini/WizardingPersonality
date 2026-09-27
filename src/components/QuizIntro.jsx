import React from 'react';

function QuizIntro({ onBeginQuiz }) {
  return (
    <div className="page-container center-content animate-fade-in">
      <div className="parchment-card center-content stack animate-slide-up" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="decorative-border top"></div>
        
        <h1 className="text-heading" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          Which Hogwarts House Are You?
        </h1>
        
        <p className="text-body" style={{ textAlign: 'center', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          Answer the questions honestly and discover which Hogwarts House reflects the qualities within you.
        </p>
        
        <div className="row" style={{ gap: '1.5rem', marginBottom: '2rem', justifyContent: 'center' }}>
          <div className="stack" style={{ alignItems: 'center', gap: '0.25rem' }}>
            <span className="text-subtitle" style={{ color: 'var(--color-gold)' }}>10 Questions</span>
          </div>
          <div className="stack" style={{ alignItems: 'center', gap: '0.25rem' }}>
            <span className="text-subtitle" style={{ color: 'var(--color-gold)' }}>Personality-based</span>
          </div>
          <div className="stack" style={{ alignItems: 'center', gap: '0.25rem' }}>
            <span className="text-subtitle" style={{ color: 'var(--color-gold)' }}>No right or wrong answers</span>
          </div>
        </div>
        
        <button className="btn-primary" onClick={onBeginQuiz} style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
          Begin the Quiz
        </button>
        
        <div className="decorative-border bottom"></div>
      </div>
    </div>
  );
}

export default QuizIntro;
