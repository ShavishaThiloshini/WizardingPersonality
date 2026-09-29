/**
 * calculatePercentages
 * --------------------
 * Converts raw scores to 0–100 percentage values.
 * Since each answer gives exactly 10 points and there are 10 questions,
 * the raw score is directly the percentage.
 */
export function calculatePercentages(questions, rawScores) {
  const percentages = {};

  Object.entries(rawScores).forEach(([resultId, score]) => {
    // raw score is the percentage. Clamp between 0 and 100.
    const safeScore = typeof score === 'number' && isFinite(score) ? score : 0;
    percentages[resultId] = Math.min(100, Math.max(0, Math.round(safeScore)));
  });

  return percentages;
}
