import React, { useState, useRef, useEffect } from 'react';
import './styles/results.css';
import LoadingScreen from './components/LoadingScreen';
import WelcomeScreen from './components/WelcomeScreen';
import QuizSelection from './components/QuizSelection';
import QuizIntro from './components/QuizIntro';
import QuestionCard from './components/QuestionCard';
import BackgroundMusic from './components/BackgroundMusic';
import MagicalParticles from './components/MagicalParticles';
import ResultScreen from './components/ResultScreen';
import PotionGame from './components/PotionGame';
import { houseQuestions } from './data/houseQuestions';
import characterQuestions from './data/characterQuestions';
import { houses } from './data/houses';
import characters from './data/characters';
import { calculateScores } from './utils/scoreCalculator';
import { calculatePercentages } from './utils/percentageCalculator';
import { getHighestMatch, getSortedResults } from './utils/quizHelpers';

// ─── Analyzing Screen ──────────────────────────────────
function AnalyzingScreen({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className="analyzing-screen">
      <MagicalParticles />
      <p style={{ fontSize: '2rem', margin: 0 }} aria-hidden="true">✨</p>
      <p className="analyzing-text">Analyzing your magical personality...</p>
      <p className="analyzing-sub">The magic is revealing your result...</p>
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }} aria-hidden="true">
        {[0, 0.35, 0.7].map((d, i) => (
          <span key={i} style={{
            width: 8, height: 8, borderRadius: '50%',
            background: 'var(--color-gold)', display: 'block',
            animation: `dotPulse 1.4s ease-in-out ${d}s infinite`
          }} />
        ))}
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────
function App() {
  const [currentScreen, setCurrentScreen] = useState('loading');
  const [selectedQuiz, setSelectedQuiz]   = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers]             = useState([]);
  const [quizResult, setQuizResult]       = useState(null);
  const musicRef = useRef(null);

  // Resolve active dataset based on quiz type
  const questions   = selectedQuiz === 'character' ? characterQuestions : houseQuestions;
  const resultData  = selectedQuiz === 'character' ? characters : houses;

  // ─── Navigation ───────────────────────────────────
  const handleLoadingComplete = () => setCurrentScreen('welcome');

  const handleStartJourney = () => {
    if (musicRef.current) musicRef.current.startMusic();
    setCurrentScreen('quiz-selection');
  };

  const handleSelectHouseQuiz = () => {
    setSelectedQuiz('house');
    setCurrentScreen('quiz-intro');
  };

  const handleSelectCharacterQuiz = () => {
    setSelectedQuiz('character');
    setCurrentScreen('quiz-intro');
  };

  const handleBeginQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
    setCurrentScreen('quiz');
  };

  // ─── Answer handling ──────────────────────────────
  const handleSelectAnswer = (answerId) => {
    const questionId = questions[currentQuestion].id;
    setAnswers(prev => {
      const existing = prev.find(a => a.questionId === questionId);
      if (existing) {
        return prev.map(a => a.questionId === questionId ? { ...a, answerId } : a);
      }
      return [...prev, { questionId, answerId }];
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate result immediately, then show analyzing screen
      const rawScores   = calculateScores(questions, answers);
      const percentages = calculatePercentages(questions, rawScores);
      const winner      = getHighestMatch(percentages);
      const sortedResults = getSortedResults(percentages);
      setQuizResult({ rawScores, percentages, winner, sortedResults });
      setCurrentScreen('quiz-analyzing');
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) setCurrentQuestion(prev => prev - 1);
  };

  // ─── Results ──────────────────────────────────────
  const handleAnalyzingDone = () => setCurrentScreen('quiz-result');

  const handlePlayAgain = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
    setCurrentScreen('quiz-intro');
  };

  const handleChooseAnother = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
    setSelectedQuiz(null);
    setCurrentScreen('quiz-selection');
  };

  // ─── Potion Game ──────────────────────────────────
  const handleStartPotion = () => setCurrentScreen('potion-game');

  const handlePotionBack = () => setCurrentScreen('quiz-result');

  const handlePotionHome = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setQuizResult(null);
    setSelectedQuiz(null);
    setCurrentScreen('welcome');
  };

  // ─── Current question ─────────────────────────────
  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers.find(
    a => a.questionId === currentQuestionData?.id
  )?.answerId || null;

  // ─── Render ───────────────────────────────────────
  return (
    <div className="app-container magical-background">
      <BackgroundMusic ref={musicRef} />

      {currentScreen === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}

      {currentScreen === 'welcome' && (
        <WelcomeScreen onStart={handleStartJourney} />
      )}

      {currentScreen === 'quiz-selection' && (
        <QuizSelection
          onSelectHouseQuiz={handleSelectHouseQuiz}
          onSelectCharacterQuiz={handleSelectCharacterQuiz}
        />
      )}

      {currentScreen === 'quiz-intro' && (
        <QuizIntro quizType={selectedQuiz} onBeginQuiz={handleBeginQuiz} />
      )}

      {currentScreen === 'quiz' && (
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

      {currentScreen === 'quiz-analyzing' && (
        <AnalyzingScreen onDone={handleAnalyzingDone} />
      )}

      {currentScreen === 'quiz-result' && quizResult && (
        <ResultScreen
          quizType={selectedQuiz}
          winner={quizResult.winner}
          percentages={quizResult.percentages}
          sortedResults={quizResult.sortedResults}
          data={resultData}
          onPlayAgain={handlePlayAgain}
          onChooseAnother={handleChooseAnother}
          onStartPotion={handleStartPotion}
        />
      )}

      {currentScreen === 'potion-game' && (
        <PotionGame
          onBack={handlePotionBack}
          onHome={handlePotionHome}
        />
      )}
    </div>
  );
}

export default App;
