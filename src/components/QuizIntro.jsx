import React from 'react';

const quizContent = {
  house: {
    title: "Which Hogwarts House Are You?",
    description:
      "Answer the questions honestly and discover which Hogwarts House reflects the qualities within you.",
    info: ["10 Questions", "Personality-based", "No right or wrong answers"],
  },
  character: {
    title: "Which Wizarding Character Are You?",
    description:
      "Answer the questions honestly and discover which wizarding character best matches your personality.",
    info: ["10 Personality Questions", "No Right or Wrong Answers", "Discover Your Character Match"],
  },
};

function QuizIntro({ quizType, onBeginQuiz }) {
  const content = quizContent[quizType] ?? quizContent.house;

  return (
    <div className="page-container center-content animate-fade-in">
      <div className="parchment-card center-content stack animate-slide-up" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="decorative-border top"></div>

        <h1 className="text-heading" style={{ textAlign: 'center', marginBottom: '1rem' }}>
          {content.title}
        </h1>

        <p className="text-body" style={{ textAlign: 'center', marginBottom: '1.5rem', lineHeight: '1.6' }}>
          {content.description}
        </p>

        <div className="row" style={{ gap: '1.5rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {content.info.map((item) => (
            <div key={item} className="stack" style={{ alignItems: 'center', gap: '0.25rem' }}>
              <span className="text-subtitle" style={{ color: 'var(--color-gold)' }}>{item}</span>
            </div>
          ))}
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
