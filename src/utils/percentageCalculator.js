/**
 * calculateMaxScores
 * ------------------
 * For each result ID, finds the highest possible score per question,
 * then sums those maximums across all questions.
 * This is the denominator for accurate percentage calculation.
 */
function calculateMaxScores(questions) {
  const maxPerQuestion = {}; // { resultId: { questionId: maxValue } }

  questions.forEach(question => {
    question.answers.forEach(answer => {
      if (!answer.scores) return;
      Object.entries(answer.scores).forEach(([resultId, value]) => {
        const safeValue = typeof value === 'number' && isFinite(value) ? value : 0;
        if (!maxPerQuestion[resultId]) maxPerQuestion[resultId] = {};
        const prev = maxPerQuestion[resultId][question.id] || 0;
        if (safeValue > prev) {
          maxPerQuestion[resultId][question.id] = safeValue;
        }
      });
    });
  });

  const totals = {};
  Object.entries(maxPerQuestion).forEach(([resultId, qMap]) => {
    totals[resultId] = Object.values(qMap).reduce((sum, v) => sum + v, 0);
  });

  return totals;
}

/**
 * calculatePercentages
 * --------------------
 * Converts raw scores to 0–100 percentage values.
 * Uses the actual maximum possible score as the denominator
 * so percentages are fair regardless of question count or weight changes.
 */
export function calculatePercentages(questions, rawScores) {
  const maxScores = calculateMaxScores(questions);
  const percentages = {};

  Object.entries(rawScores).forEach(([resultId, score]) => {
    const max = maxScores[resultId] || 0;
    if (max === 0) {
      percentages[resultId] = 0;
      return;
    }
    const pct = Math.round((score / max) * 100);
    percentages[resultId] = Math.min(100, Math.max(0, pct));
  });

  return percentages;
}
