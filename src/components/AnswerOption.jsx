import React from 'react';

function AnswerOption({ answer, isSelected, onSelect }) {
  const baseStyle = {
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid',
    borderColor: isSelected ? 'var(--color-gold)' : 'var(--color-border)',
    borderRadius: 'var(--border-radius-sm)',
    backgroundColor: isSelected ? 'rgba(195, 154, 28, 0.1)' : 'transparent',
    color: 'var(--color-text-dark)',
    cursor: 'pointer',
    transition: 'all var(--transition-fast)',
    textAlign: 'left',
    width: '100%',
    fontFamily: 'var(--font-family-body)',
    fontSize: 'var(--font-size-body)',
    boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
    outline: 'none'
  };

  return (
    <button
      style={baseStyle}
      onClick={() => onSelect(answer.id)}
      className="answer-option"
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
