import React from 'react';

function QuizSelection({ onSelectHouseQuiz, onSelectCharacterQuiz }) {
  return (
    <div className="page-container center-content animate-fade-in" style={{ padding: '2rem 1rem' }}>
      <h1 className="text-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Path</h1>
      
      <div className="row" style={{ alignItems: 'stretch', gap: '2rem', maxWidth: '1000px', width: '100%' }}>
        {/* CARD 01: House Quiz */}
        <div 
          className="parchment-card quiz-card center-content stack"
          onClick={onSelectHouseQuiz}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectHouseQuiz();
            }
          }}
        >
          <div className="decorative-border top"></div>
          <h2 className="text-heading" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Which Hogwarts House Are You?</h2>
          <p className="text-body" style={{ textAlign: 'center', flexGrow: 1 }}>
            Discover the Hogwarts House that best matches your personality.
          </p>
          <p className="text-subtitle" style={{ color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '1rem' }}>
            10 Questions
          </p>
          <button className="btn-primary" tabIndex={-1} aria-hidden="true" style={{ width: '100%', marginTop: 'auto', pointerEvents: 'none' }}>
            Enter the Quiz
          </button>
          <div className="decorative-border bottom"></div>
        </div>

        {/* CARD 02: Character Quiz */}
        <div 
          className="parchment-card quiz-card center-content stack"
          onClick={onSelectCharacterQuiz}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelectCharacterQuiz();
            }
          }}
        >
          <div className="decorative-border top"></div>
          <h2 className="text-heading" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Which Wizarding Character Are You?</h2>
          <p className="text-body" style={{ textAlign: 'center', flexGrow: 1 }}>
            Find the wizarding character whose personality is most like yours.
          </p>
          <p className="text-subtitle" style={{ color: 'var(--color-gold)', fontStyle: 'italic', marginBottom: '1rem' }}>
            10 Questions
          </p>
          <button className="btn-primary" tabIndex={-1} aria-hidden="true" style={{ width: '100%', marginTop: 'auto', pointerEvents: 'none' }}>
            Enter the Quiz
          </button>
          <div className="decorative-border bottom"></div>
        </div>
      </div>
    </div>
  );
}

export default QuizSelection;
