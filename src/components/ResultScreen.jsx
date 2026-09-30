import React from 'react';
import MagicalParticles from './MagicalParticles';
import '../styles/results.css';

function ResultScreen({
  quizType,
  winner,
  percentages,
  sortedResults,
  data,
  onPlayAgain,
  onChooseAnother,
  onStartPotion,
}) {
  const winnerData = data.find(d => d.id === winner);
  const winnerPct = percentages[winner] ?? 0;
  const label =
    quizType === 'character'
      ? '✨ Your Wizarding Character ✨'
      : '✨ Your Hogwarts House ✨';

  return (
    <div className="result-screen-container">
      <MagicalParticles />

      <div className="result-card">
        {/* Header label */}
        <p className="result-quiz-label">{label}</p>

        {/* Winner name */}
        <h1 className="result-winner-name">
          {winnerData?.name ?? winner}
        </h1>

        {/* Percentage match */}
        <div className="result-percentage-display">
          <div className="result-percentage-number">{winnerPct}%</div>
          <div className="result-percentage-label">compatibility match</div>
        </div>

        {/* Description */}
        {winnerData?.description && (
          <p className="result-description">{winnerData.description}</p>
        )}

        {/* Traits */}
        {winnerData?.traits?.length > 0 && (
          <div className="traits-row" aria-label="Personality traits">
            {winnerData.traits.map(trait => (
              <span key={trait} className="trait-badge">{trait}</span>
            ))}
          </div>
        )}

        <hr className="result-divider" />

        {/* Score breakdown */}
        <p className="breakdown-heading">Your Magical Profile</p>

        <div role="list" aria-label="Full compatibility breakdown">
          {sortedResults.map(({ id, percentage }, index) => {
            const entry = data.find(d => d.id === id);
            const isWinner = id === winner;
            const delayStyle = { animationDelay: `${0.8 + index * 0.08}s` };

            return (
              <div
                key={id}
                className="score-bar-row"
                role="listitem"
                style={delayStyle}
              >
                <span className={`score-bar-name${isWinner ? ' is-winner' : ''}`}>
                  {entry?.name ?? id}
                </span>

                <div
                  className="score-bar-track"
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${entry?.name ?? id}: ${percentage}%`}
                >
                  <div
                    className={`score-bar-fill${isWinner ? ' is-winner' : ''}`}
                    style={{
                      '--bar-width': `${percentage}%`,
                      width: `${percentage}%`,
                      animationDelay: `${0.9 + index * 0.08}s`,
                    }}
                  />
                </div>

                <span className={`score-bar-pct${isWinner ? ' is-winner' : ''}`}>
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>

        <hr className="result-divider" style={{ marginTop: '1.5rem' }} />

  // ─── Action buttons ──────────────────────────────────
        <div className="result-buttons">
          {onStartPotion && (
            <button className="btn-primary potion-journey-btn" onClick={onStartPotion} style={{ width: '100%', marginBottom: '0.5rem', background: 'var(--color-gold)', color: 'var(--color-dark-brown)', fontSize: '1.1rem' }}>
              ✨ Continue Your Wizarding Journey (Potion Game)
            </button>
          )}
          <button className="btn-primary" onClick={onPlayAgain}>
            Play Again
          </button>
          <button className="btn-secondary" onClick={onChooseAnother}>
            Choose Another Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultScreen;
