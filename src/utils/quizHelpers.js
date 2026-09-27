/**
 * getHighestMatch
 * ---------------
 * Returns the result ID with the highest percentage.
 * Stable: ties preserve the first-encountered order (insertion order of the object).
 */
export function getHighestMatch(percentages) {
  let winner = null;
  let highest = -1;

  Object.entries(percentages).forEach(([id, pct]) => {
    if (pct > highest) {
      highest = pct;
      winner = id;
    }
  });

  return winner;
}

/**
 * getSortedResults
 * ----------------
 * Returns an array of { id, percentage } sorted by percentage descending.
 * Stable: equal percentages preserve original object insertion order.
 */
export function getSortedResults(percentages) {
  return Object.entries(percentages)
    .sort(([, a], [, b]) => b - a)
    .map(([id, percentage]) => ({ id, percentage }));
}

/**
 * computeQuizResult
 * -----------------
 * Convenience wrapper that runs the full pipeline:
 *   questions + answers → rawScores → percentages → winner + sorted results
 */
export function computeQuizResult(questions, answers, calculateScoresFn, calculatePercentagesFn) {
  const rawScores = calculateScoresFn(questions, answers);
  const percentages = calculatePercentagesFn(questions, rawScores);
  const winner = getHighestMatch(percentages);
  const sortedResults = getSortedResults(percentages);
  return { rawScores, percentages, winner, sortedResults };
}
