import React, { useState, useRef } from 'react';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';
import QuizSelection from './components/QuizSelection';
import QuizIntro from './components/QuizIntro';
import QuestionCard from './components/QuestionCard';
import BackgroundMusic from './components/BackgroundMusic';
import MagicalParticles from './components/MagicalParticles';
import { houseQuestions } from './data/houseQuestions';
import characterQuestions from './data/characterQuestions';

function App() {
  const [currentScreen, setCurrentScreen] = useState("loading");
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const musicRef = useRef(null);

  // Dynamically resolve the active question set
  const questions =
    selectedQuiz === "character" ? characterQuestions : houseQuestions;

  // ─── Navigation handlers ──────────────────────────────
  const handleLoadingComplete = () => {
    setCurrentScreen("welcome");
  };

  const handleStartJourney = () => {
    if (musicRef.current) musicRef.current.startMusic();
    setCurrentScreen("quiz-selection");
  };

  const handleSelectHouseQuiz = () => {
    setSelectedQuiz("house");
    setCurrentScreen("quiz-intro");
  };

  const handleSelectCharacterQuiz = () => {
    setSelectedQuiz("character");
    setCurrentScreen("quiz-intro");
  };

  const handleBeginQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setCurrentScreen("quiz");
  };

  // ─── Answer handling ──────────────────────────────────
  const handleSelectAnswer = (answerId) => {
    const questionId = questions[currentQuestion].id;
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a =>
          a.questionId === questionId ? { ...a, answerId } : a
        );
      }
      return [...prev, { questionId, answerId }];
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentScreen("quiz-complete");
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  // ─── Current question data ────────────────────────────
  const currentQuestionData = questions[currentQuestion];
  const currentAnswer =
    answers.find(a => a.questionId === currentQuestionData?.id)?.answerId || null;

  // ─── Render ───────────────────────────────────────────
  return (
    <div className="app-container magical-background">
      <BackgroundMusic ref={musicRef} />

      {currentScreen === "loading" && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {currentScreen === "welcome" && (
        <WelcomeScreen onStart={handleStartJourney} />
      )}

      {currentScreen === "quiz-selection" && (
        <QuizSelection
          onSelectHouseQuiz={handleSelectHouseQuiz}
          onSelectCharacterQuiz={handleSelectCharacterQuiz}
        />
      )}

      {currentScreen === "quiz-intro" && (
        <QuizIntro quizType={selectedQuiz} onBeginQuiz={handleBeginQuiz} />
      )}

      {currentScreen === "quiz" && (
        <QuestionCard
          question={currentQuestionData}
          questionIndex={currentQuestion}
          totalQuestions={questions.length}
          selectedAnswerId={currentAnswer}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentScreen === "quiz-complete" && (
        <div className="page-container center-content animate-fade-in" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
          <MagicalParticles />
          <div className="parchment-card center-content stack animate-slide-up" style={{ maxWidth: '520px', width: '100%', position: 'relative', zIndex: 2, textAlign: 'center' }}>
            <p style={{ fontSize: '2.5rem', margin: '0 0 1rem', lineHeight: 1 }} aria-hidden="true">✨</p>
            <h1 className="text-heading" style={{ marginBottom: '0.75rem' }}>
              Your magical profile is being prepared...
            </h1>
            <p className="text-body text-muted" style={{ marginBottom: '2rem', lineHeight: '1.6' }}>
              The magic is analyzing your answers.
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }} aria-hidden="true">
              <span className="loading-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.4, animation: 'dotPulse 1.5s ease-in-out 0.0s infinite' }} />
              <span className="loading-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.4, animation: 'dotPulse 1.5s ease-in-out 0.3s infinite' }} />
              <span className="loading-dot" style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--color-gold)', opacity: 0.4, animation: 'dotPulse 1.5s ease-in-out 0.6s infinite' }} />
            </div>
            <p className="text-small" style={{ marginTop: '2rem', opacity: 0.5 }}>
              Results coming in Phase 06
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
