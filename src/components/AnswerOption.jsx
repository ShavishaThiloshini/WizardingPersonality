import React from 'react';

function AnswerOption({ answer, isSelected, onSelect }) {
  return (
    <button
      onClick={() => onSelect(answer.id)}
      className={`answer-option ${isSelected ? 'is-selected' : ''}`}
      aria-pressed={isSelected}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(answer.id);
        }
      }}
    >
      {answer.text}
    </button>
  );
}

export default AnswerOption;
