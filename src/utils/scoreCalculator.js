/**
 * calculateScores
 * ---------------
 * Takes the full question array and the user's answers array.
 * Returns a raw score object built dynamically from answer score keys.
 * Works for any quiz type (house: 4 keys, character: 7 keys).
 */
export function calculateScores(questions, answers) {
  const scores = {};

  answers.forEach(({ questionId, answerId }) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return;

    const choice = question.answers.find(a => a.id === answerId);
    if (!choice || !choice.scores) return;

    Object.entries(choice.scores).forEach(([resultId, value]) => {
      const safeValue = typeof value === 'number' && isFinite(value) ? value : 0;
      scores[resultId] = (scores[resultId] || 0) + safeValue;
    });
  });

  return scores;
}
