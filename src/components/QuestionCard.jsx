import React from 'react';
import ProgressBar from './ProgressBar';
import AnswerOption from './AnswerOption';

function QuestionCard({ 
  question, 
  questionIndex, 
  totalQuestions, 
  selectedAnswerId, 
  onSelectAnswer, 
  onNext, 
  onBack 
}) {
  const isLastQuestion = questionIndex === totalQuestions - 1;
  const canGoNext = selectedAnswerId !== null;
  const canGoBack = questionIndex > 0;

  return (
    <div className="page-container center-content animate-fade-in" style={{ padding: '1rem' }}>
      <div className="parchment-card stack" style={{ maxWidth: '850px', width: '100%', padding: '2rem' }}>
        
        <ProgressBar current={questionIndex + 1} total={totalQuestions} />
        
        <h2 className="text-heading" style={{ marginBottom: '2rem', textAlign: 'center', lineHeight: '1.4' }}>
          {question.question}
        </h2>
        
        <div className="answers-grid">
          {question.answers.map((ans) => (
            <AnswerOption 
              key={ans.id}
              answer={ans}
              isSelected={selectedAnswerId === ans.id}
              onSelect={onSelectAnswer}
            />
          ))}
        </div>
        
        <div className="row" style={{ justifyContent: 'space-between', marginTop: '1rem' }}>
          <button 
            className="btn-secondary" 
            onClick={onBack} 
            disabled={!canGoBack}
            style={{ opacity: canGoBack ? 1 : 0, pointerEvents: canGoBack ? 'auto' : 'none' }}
          >
            Back
          </button>
          
          <button 
            className="btn-primary" 
            onClick={onNext} 
            disabled={!canGoNext}
          >
            {isLastQuestion ? "See My Result" : "Next"}
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default QuestionCard;
