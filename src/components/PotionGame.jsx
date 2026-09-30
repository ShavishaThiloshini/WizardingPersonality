import React, { useState } from 'react';
import { potionChallenges, potionIngredients } from '../data/potionData';
import '../styles/potion.css';
import MagicalParticles from './MagicalParticles';

function PotionGame({ onBack, onHome }) {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [score, setScore] = useState(0);
  const [successfulPotions, setSuccessfulPotions] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'success' | 'failure'
  const [animating, setAnimating] = useState(false);

  const isFinished = currentRoundIndex >= potionChallenges.length;
  const currentChallenge = potionChallenges[currentRoundIndex];

  // ── Ingredient selection ──────────────────────────────────────────────
  const handleToggleIngredient = (id) => {
    if (feedback || animating) return;
    setSelectedIngredients(prev => {
      if (prev.includes(id)) return prev.filter(item => item !== id);
      if (prev.length < currentChallenge.requiredCount) return [...prev, id];
      return prev;
    });
  };

  // ── Order controls (Round 2) ──────────────────────────────────────────
  const handleMoveUp = (index) => {
    if (index === 0 || feedback || animating) return;
    const a = [...selectedIngredients];
    [a[index - 1], a[index]] = [a[index], a[index - 1]];
    setSelectedIngredients(a);
  };

  const handleMoveDown = (index) => {
    if (index === selectedIngredients.length - 1 || feedback || animating) return;
    const a = [...selectedIngredients];
    [a[index + 1], a[index]] = [a[index], a[index + 1]];
    setSelectedIngredients(a);
  };

  // ── Brewing logic ─────────────────────────────────────────────────────
  const handleBrew = () => {
    if (selectedIngredients.length < currentChallenge.requiredCount) return;
    setAnimating(true);
    setTimeout(() => {
      setAnimating(false);
      let isSuccess = false;
      let roundScore = 0;

      if (currentChallenge.type === 'order') {
        // Round 2: ingredients AND order must match
        const correct = [...currentChallenge.correctIngredients].sort().join(',');
        const chosen  = [...selectedIngredients].sort().join(',');
        const ingredientsOk = correct === chosen;
        const orderOk       = currentChallenge.correctOrder.join(',') === selectedIngredients.join(',');
        if (ingredientsOk) roundScore += 5;
        if (orderOk)       roundScore += 5;
        isSuccess = orderOk;
      } else {
        // Round 1 & 3: only ingredients matter
        const correct = [...currentChallenge.correctIngredients].sort().join(',');
        const chosen  = [...selectedIngredients].sort().join(',');
        isSuccess = correct === chosen;
        if (isSuccess) roundScore = 10;
      }

      setScore(prev => prev + roundScore);
      if (isSuccess) setSuccessfulPotions(prev => prev + 1);
      setFeedback(isSuccess ? 'success' : 'failure');
    }, 1500);
  };

  const handleNextRound = () => {
    setFeedback(null);
    setSelectedIngredients([]);
    setCurrentRoundIndex(prev => prev + 1);
  };

  const handleTryAgain = () => {
    setCurrentRoundIndex(0);
    setSelectedIngredients([]);
    setScore(0);
    setSuccessfulPotions(0);
    setFeedback(null);
    setAnimating(false);
  };

  // ── POTION RESULT SCREEN ──────────────────────────────────────────────
  if (isFinished) {
    const percentage = Math.round((score / 30) * 100);
    const masteryLabel =
      percentage === 100 ? 'Grand Potioneer'   :
      percentage >= 67   ? 'Skilled Brewer'    :
      percentage >= 34   ? 'Apprentice Brewer' :
                           'Cauldron Novice';

    return (
      <div className="potion-screen-container">
        <MagicalParticles />
        <div className="potion-game-card potion-result-card">
          <div className="potion-result-cauldron" aria-hidden="true">&#x1F372;</div>

          <h1 className="potion-title">&#x1F9EA; Potion Mastery</h1>
          <p className="potion-subtitle">Your potion-making challenge is complete!</p>

          <div className="potion-mastery-stats">
            <div className="mastery-stat-block">
              <span className="mastery-stat-label">Successful Potions</span>
              <span className="mastery-stat-value">
                {successfulPotions}
                <span className="mastery-stat-of"> / 3</span>
              </span>
            </div>
            <div className="mastery-stat-block">
              <span className="mastery-stat-label">Score</span>
              <span className="mastery-stat-value">
                {score}
                <span className="mastery-stat-of"> / 30</span>
              </span>
            </div>
            <div className="mastery-stat-block mastery-stat-highlight">
              <span className="mastery-stat-label">Potion Mastery</span>
              <span className="mastery-pct">{percentage}%</span>
              <span className="mastery-rank">{masteryLabel}</span>
            </div>
          </div>

          <div
            className="potion-mastery-bar-track"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Potion mastery: ${percentage}%`}
          >
            <div className="potion-mastery-bar-fill" style={{ width: `${percentage}%` }} />
          </div>

          <div className="result-buttons potion-result-btns">
            <button id="potion-try-again-btn" className="btn-primary" onClick={handleTryAgain}>
              &#x1F9EA; Try Again
            </button>
            <button id="potion-back-btn" className="btn-secondary" onClick={onBack}>
              &#x2190; Back to Result
            </button>
            <button id="potion-home-btn" className="btn-secondary" onClick={onHome}>
              &#x1F3E0; Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── ACTIVE ROUND SCREEN ───────────────────────────────────────────────
  const ingredientsList = currentChallenge.ingredients.map(id =>
    potionIngredients.find(p => p.id === id)
  );

  return (
    <div className="potion-screen-container">
      <MagicalParticles />

      <div className="potion-header">
        <h1 className="potion-title">&#x1F9EA; Potion Mixing Challenge</h1>
        <p className="potion-subtitle">Choose wisely. Every ingredient changes the brew.</p>
      </div>

      <div className="potion-game-card">
        {/* Round indicator */}
        <div className="potion-round-indicator">
          ROUND {currentRoundIndex + 1} OF 3
          {currentChallenge.type === 'order' && (
            <span className="round-type-badge"> &middot; ORDER MATTERS</span>
          )}
          {currentChallenge.type === 'clue' && (
            <span className="round-type-badge"> &middot; CLUE CHALLENGE</span>
          )}
        </div>

        <h2 className="potion-challenge-title">{currentChallenge.title}</h2>
        <div className="potion-objective">{currentChallenge.description}</div>

        {/* Instruction line */}
        {!feedback && (
          <p className="potion-instruction">
            {currentChallenge.type === 'order'
              ? `Select ${currentChallenge.requiredCount} ingredients, then arrange them in the correct brewing order.`
              : `Select ${currentChallenge.requiredCount} ingredients from the options below.`}
          </p>
        )}

        {/* Ingredient grid */}
        {!feedback && !animating && (
          <div className="potion-grid" role="group" aria-label="Ingredient selection">
            {ingredientsList.map(ingredient => {
              const isSelected = selectedIngredients.includes(ingredient.id);
              const isFull =
                selectedIngredients.length >= currentChallenge.requiredCount && !isSelected;
              return (
                <div
                  key={ingredient.id}
                  className={`ingredient-card${isSelected ? ' selected' : ''}${isFull ? ' faded' : ''}`}
                  onClick={() => handleToggleIngredient(ingredient.id)}
                  role="button"
                  aria-pressed={isSelected}
                  tabIndex={0}
                  onKeyDown={e =>
                    (e.key === 'Enter' || e.key === ' ') &&
                    handleToggleIngredient(ingredient.id)
                  }
                >
                  <div className="ingredient-icon" aria-hidden="true">{ingredient.icon}</div>
                  <div className="ingredient-name">{ingredient.name}</div>
                  <div className="ingredient-desc">{ingredient.description}</div>
                  {isSelected && (
                    <div className="ingredient-selected-badge" aria-hidden="true">
                      &#x2713;
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Order section for Round 2 */}
        {!feedback &&
          !animating &&
          currentChallenge.type === 'order' &&
          selectedIngredients.length > 0 && (
            <div className="order-section">
              <h3 className="order-section-title">&#x2697;&#xFE0F; Your Brewing Order</h3>
              <p className="order-section-hint">
                Use &#x2191; &#x2193; to arrange the correct sequence.
              </p>
              <ul className="order-list" aria-label="Brewing order">
                {selectedIngredients.map((id, index) => {
                  const ing = potionIngredients.find(p => p.id === id);
                  return (
                    <li key={id} className="order-item">
                      <span className="order-step-num">{index + 1}</span>
                      <span className="order-item-label">
                        {ing.icon} {ing.name}
                      </span>
                      <div className="order-controls">
                        <button
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          aria-label={`Move ${ing.name} up`}
                        >
                          &#x2191;
                        </button>
                        <button
                          onClick={() => handleMoveDown(index)}
                          disabled={index === selectedIngredients.length - 1}
                          aria-label={`Move ${ing.name} down`}
                        >
                          &#x2193;
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

        {/* Cauldron visual */}
        <div
          className={`cauldron-container${animating ? ' cauldron-brewing' : ''}`}
          aria-hidden="true"
        >
          <div className="cauldron-body">
            {animating && (
              <>
                <span className="cauldron-bubble b1" />
                <span className="cauldron-bubble b2" />
                <span className="cauldron-bubble b3" />
                <span className="cauldron-steam s1">~</span>
                <span className="cauldron-steam s2">~</span>
              </>
            )}
            <span className="cauldron-emoji">{animating ? '🔮' : '🍲'}</span>
          </div>
        </div>

        {/* Selection status */}
        {!feedback && (
          <div className="selection-status" aria-live="polite">
            Selected: <strong>{selectedIngredients.length}</strong> /{' '}
            {currentChallenge.requiredCount}
          </div>
        )}

        {/* Brew button */}
        {!feedback && (
          <button
            id={`brew-btn-round-${currentRoundIndex + 1}`}
            className="brew-button"
            onClick={handleBrew}
            disabled={
              selectedIngredients.length < currentChallenge.requiredCount || animating
            }
          >
            {animating ? '♨️ Brewing...' : '✨ Brew Potion'}
          </button>
        )}

        {/* Feedback panel */}
        {feedback && (
          <div className={`potion-feedback ${feedback}`} role="alert">
            {feedback === 'success' ? (
              <>
                <p className="feedback-headline">✨ POTION SUCCESSFUL!</p>
                <p className="feedback-message">
                  &ldquo;The potion begins to glow with magical energy.&rdquo;
                </p>
                <p className="feedback-points">+10 points earned</p>
              </>
            ) : (
              <>
                <p className="feedback-headline">💨 POTION FAILED!</p>
                <p className="feedback-message">
                  &ldquo;The cauldron releases a cloud of magical smoke.&rdquo;
                </p>
                <p className="feedback-points">+0 points earned</p>
              </>
            )}
            <button
              id={`continue-btn-round-${currentRoundIndex + 1}`}
              className="brew-button next-round-btn"
              onClick={handleNextRound}
            >
              {currentRoundIndex < potionChallenges.length - 1
                ? 'Continue →'
                : 'See Results →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PotionGame;
