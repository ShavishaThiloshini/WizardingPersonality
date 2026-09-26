# Local Data Schema
## Wizarding Personality

---

## 1. Document Overview

### Project Name
Wizarding Personality

### Document Name
Local Data Schema

### Version
1.0

### Purpose

This document defines the structure of all static quiz data used by the Wizarding Personality application.

The project does not require a backend or external database for Version 1.

All quiz questions, answers, scoring weights, houses, characters, descriptions, and result information will be stored locally inside JavaScript data files.

---

# 2. Data Architecture

The application will use four primary data collections:

1. House Data
2. Character Data
3. House Quiz Questions
4. Character Quiz Questions

Additional utility data may be created for:

- Quiz metadata
- Result descriptions
- Scoring configuration
- Validation

---

# 3. Data Storage Structure

Recommended structure:

```text
src/
├── data/
│   ├── houses.js
│   ├── characters.js
│   ├── houseQuestions.js
│   ├── characterQuestions.js
│   └── quizConfig.js
│
└── utils/
    ├── scoreCalculator.js
    ├── percentageCalculator.js
    └── quizHelpers.js

4. Quiz Types

The application contains two quiz types.

HOUSE
CHARACTER

Example:

const QUIZ_TYPES = {
  HOUSE: "house",
  CHARACTER: "character"
};
5. Hogwarts House Data

The House Quiz contains four possible results:

Gryffindor
Hufflepuff
Ravenclaw
Slytherin

Each house should contain:

ID
Name
Short description
Personality traits
Crest/image
Theme colors
Result description
Example House Object
{
  id: "gryffindor",
  name: "Gryffindor",
  traits: [
    "Brave",
    "Courageous",
    "Determined",
    "Loyal"
  ],
  description:
    "Known for courage, determination, and a willingness to stand up for what matters.",
  image: "/assets/houses/gryffindor.png",
  colors: {
    primary: "#740001",
    secondary: "#D3A625"
  }
}
6. House Data IDs

The IDs must remain consistent throughout the application.

gryffindor
hufflepuff
ravenclaw
slytherin

These IDs will be used by the scoring engine.

7. Character Data

The Character Quiz contains seven possible results:

Harry Potter
Ron Weasley
Hermione Granger
Draco Malfoy
Neville Longbottom
Luna Lovegood
Ginny Weasley

Each character should contain:

ID
Name
Short description
Personality traits
Image
Result description
Example Character Object
{
  id: "hermione",
  name: "Hermione Granger",
  traits: [
    "Intelligent",
    "Curious",
    "Hardworking",
    "Loyal"
  ],
  description:
    "A determined and intelligent person who values knowledge, preparation, and loyalty.",
  image: "/assets/characters/hermione.png"
}
8. Character IDs

Use stable IDs:

harry
ron
hermione
draco
neville
luna
ginny

These IDs will be used by the character scoring system.

9. Quiz Question Structure

Every question should contain:

Question ID
Question text
Answer options
Weight values for each possible result

Example:

{
  id: 1,
  question:
    "What matters most to you when facing a difficult situation?",

  answers: [
    {
      id: "a",
      text: "I face it bravely.",
      scores: {
        gryffindor: 4,
        hufflepuff: 1,
        ravenclaw: 1,
        slytherin: 2
      }
    }
  ]
}
10. Question IDs

Question IDs should be unique.

House Quiz:

H01
H02
H03
...
H15

Character Quiz:

C01
C02
C03
...
C15

This makes the data easier to maintain.

11. Number of Questions

The initial version should support:

House Quiz

10–15 questions.

Recommended initial implementation:

10 questions
Character Quiz

10–15 questions.

Recommended initial implementation:

10 questions

The data structure should allow additional questions to be added later without changing the scoring engine.

12. Answer Structure

Each question should normally contain four answer choices.

Example:

answers: [
  {
    id: "a",
    text: "I take charge.",
    scores: {
      gryffindor: 3,
      hufflepuff: 1,
      ravenclaw: 1,
      slytherin: 4
    }
  },

  {
    id: "b",
    text: "I help everyone stay together.",
    scores: {
      gryffindor: 2,
      hufflepuff: 4,
      ravenclaw: 1,
      slytherin: 1
    }
  }
]

The remaining answers follow the same structure.

13. Weighted Scoring System

The quiz must use weighted scoring.

An answer does not simply equal:

+1 point

Instead, each answer can contribute different values to different results.

Example:

Answer:
"I would investigate the problem first."

Ravenclaw → +4
Hermione → +4
Gryffindor → +1
Slytherin → +2

This allows the quiz to represent personality similarities more accurately than simple answer counting.

14. Score Range

Recommended answer weight range:

0 – 5

Meaning:

Score	Meaning
0	No meaningful relationship
1	Very weak relationship
2	Weak relationship
3	Moderate relationship
4	Strong relationship
5	Very strong relationship

The exact weights should be designed consistently across questions.

15. House Question Data Example
export const houseQuestions = [
  {
    id: "H01",
    question: "What quality do you value most?",
    answers: [
      {
        id: "a",
        text: "Courage",
        scores: {
          gryffindor: 5,
          hufflepuff: 2,
          ravenclaw: 1,
          slytherin: 3
        }
      },
      {
        id: "b",
        text: "Loyalty",
        scores: {
          gryffindor: 3,
          hufflepuff: 5,
          ravenclaw: 2,
          slytherin: 2
        }
      },
      {
        id: "c",
        text: "Knowledge",
        scores: {
          gryffindor: 1,
          hufflepuff: 2,
          ravenclaw: 5,
          slytherin: 3
        }
      },
      {
        id: "d",
        text: "Ambition",
        scores: {
          gryffindor: 2,
          hufflepuff: 1,
          ravenclaw: 3,
          slytherin: 5
        }
      }
    ]
  }
];
16. Character Question Data Example

Character questions use the same basic structure.

The scoring keys change to character IDs.

export const characterQuestions = [
  {
    id: "C01",
    question: "How do you approach a difficult problem?",
    answers: [
      {
        id: "a",
        text: "I study every detail before acting.",
        scores: {
          harry: 1,
          ron: 1,
          hermione: 5,
          draco: 2,
          neville: 2,
          luna: 4,
          ginny: 2
        }
      },

      {
        id: "b",
        text: "I trust my instincts and move forward.",
        scores: {
          harry: 5,
          ron: 3,
          hermione: 2,
          draco: 3,
          neville: 2,
          luna: 3,
          ginny: 4
        }
      }
    ]
  }
];
17. Initial Score Object

When a quiz begins, all results start at zero.

House Quiz
{
  gryffindor: 0,
  hufflepuff: 0,
  ravenclaw: 0,
  slytherin: 0
}
Character Quiz
{
  harry: 0,
  ron: 0,
  hermione: 0,
  draco: 0,
  neville: 0,
  luna: 0,
  ginny: 0
}
18. Score Calculation

When the player selects an answer:

Identify the selected answer.
Read its score object.
Add each score to the current result totals.
Move to the next question.

Example:

Initial:

Gryffindor: 0
Hufflepuff: 0
Ravenclaw: 0
Slytherin: 0

Selected answer:

Gryffindor: +4
Hufflepuff: +2
Ravenclaw: +1
Slytherin: +3

New totals:

Gryffindor: 4
Hufflepuff: 2
Ravenclaw: 1
Slytherin: 3
19. Maximum Possible Score

The application should calculate the maximum possible score dynamically from the question data.

Do not hard-code the maximum score.

Example:

maxScore =
  maximum possible score for a result across all questions

This allows the number of questions to change without breaking percentage calculations.

20. Compatibility Percentage

The final score should be converted into a percentage.

Conceptually:

Compatibility =
Player Score / Maximum Possible Score × 100

Example:

Player Score = 42
Maximum Possible Score = 50

42 / 50 × 100 = 84%

Result:

84% Compatibility
21. Percentage Normalization

The application should ensure that percentages remain within:

0% – 100%

Example:

Math.min(100, Math.max(0, percentage))

Percentages should be rounded to whole numbers for the UI.

Example:

83.67 → 84%
22. All Results Must Be Displayed

The result screen should show:

Highest compatibility
All other compatibility percentages

Example:

Gryffindor     87%
Hufflepuff     65%
Ravenclaw      54%
Slytherin      41%

The same principle applies to the Character Quiz.

23. Highest Match

The highest score determines the primary result.

Example:

{
  gryffindor: 87,
  hufflepuff: 65,
  ravenclaw: 54,
  slytherin: 41
}

Highest:

gryffindor

The result screen displays:

You belong to...

GRYFFINDOR

87% Match
24. Tie Handling

A tie should be handled deterministically.

If two results have the same percentage:

Gryffindor: 75%
Ravenclaw: 75%

The application should use a predefined stable order.

Recommended fallback:

Higher raw score
Earlier defined result
Stable ID order

The application must never randomly select a result.

25. Result Data

Each result should contain a personality description.

Example:

{
  id: "gryffindor",
  name: "Gryffindor",
  resultDescription:
    "You value courage, loyalty, and standing up for what you believe in."
}

Character example:

{
  id: "luna",
  name: "Luna Lovegood",
  resultDescription:
    "You see the world differently, trust your instincts, and value individuality."
}
26. Quiz Metadata

A separate configuration file can contain quiz-level information.

Example:

export const quizConfig = {
  house: {
    id: "house",
    title: "Which Hogwarts House Are You?",
    description:
      "Discover the Hogwarts House that matches your personality.",
    questionCount: 10
  },

  character: {
    id: "character",
    title: "Which Character Are You?",
    description:
      "Discover which wizarding character matches your personality.",
    questionCount: 10
  }
};
27. Selected Answer State

The application should store the selected answer for each question.

Example:

[
  {
    questionId: "H01",
    answerId: "a"
  },
  {
    questionId: "H02",
    answerId: "c"
  }
]

This allows the application to:

Track answers
Support Back navigation
Recalculate scores if needed
Prevent duplicate scoring
28. Recommended Answer State

The application state may contain:

{
  currentQuestion: 0,

  answers: [
    {
      questionId: "H01",
      answerId: "a"
    }
  ]
}
29. Preventing Duplicate Scores

The scoring system must not add the same answer multiple times if the player navigates backward and changes an answer.

Recommended approach:

Store the selected answer.
Recalculate scores from all selected answers when necessary.

This is safer than repeatedly adding and subtracting individual scores.

30. Score Recalculation

A utility function should support:

calculateScores(questions, selectedAnswers)

Expected result:

{
  gryffindor: 38,
  hufflepuff: 31,
  ravenclaw: 27,
  slytherin: 34
}

For character quiz:

{
  harry: 35,
  ron: 28,
  hermione: 42,
  draco: 24,
  neville: 30,
  luna: 36,
  ginny: 33
}
31. Required Utility Functions

The data system should support these utilities:

calculateScores()
calculateMaximumScores()
calculatePercentages()
getHighestMatch()
sortResults()
getResultById()
validateQuizData()
resetQuiz()
32. Data Validation

Quiz data should be validated during development.

Validation should check:

Every question has an ID.
Every question has question text.
Every question has answers.
Every answer has an ID.
Every answer has text.
Every answer contains valid score IDs.
Scores are numbers.
Scores are not negative.
Result IDs exist.
Image paths are valid where applicable.
33. Question Design Guidelines

Questions should focus on personality rather than Harry Potter trivia.

Good:

What do you do when someone you care about needs help?

Avoid:

What spell does Hermione use in a particular scene?

The purpose is to measure personality compatibility.

34. Personality Dimensions

Questions should cover multiple personality dimensions.

Recommended dimensions:

Courage
Taking risks
Facing difficult situations
Standing up for others
Loyalty
Friendship
Family
Trust
Intelligence
Learning
Problem solving
Curiosity
Ambition
Goals
Success
Leadership
Creativity
Imagination
Individuality
Unusual thinking
Kindness
Empathy
Helping others
Compassion
Determination
Persistence
Overcoming failure
Long-term goals
Independence
Self-confidence
Personal decisions
Individual thinking

Questions should be distributed across these dimensions rather than repeatedly asking the same type of question.

35. Avoiding Obvious Answers

Questions should not make the intended result too obvious.

Avoid:

Which quality sounds most like a Ravenclaw?

A. Intelligence
B. Knowledge
C. Curiosity
D. Learning

Instead, use realistic situations.

Example:

You discover something you don't understand. What do you do?

A. Research it until I understand it.
B. Ask someone I trust.
C. Experiment and see what happens.
D. Move on unless it affects my goals.

This makes the scoring less predictable.

36. Balanced Scoring

Questions should avoid giving one result an overwhelming advantage.

The scoring system should:

Distribute meaningful points across results.
Include multiple personality dimensions.
Avoid making one answer always correspond to one result.
Avoid obvious result patterns.
37. Question Order

Questions should be mixed.

Do not organize the quiz like:

Questions 1–3 → Courage
Questions 4–6 → Loyalty
Questions 7–9 → Intelligence

Instead:

Courage
Loyalty
Curiosity
Ambition
Kindness
Creativity
Courage
Independence
Loyalty
Determination

This keeps the quiz feeling natural.

38. Result Descriptions

Result descriptions should be concise.

Recommended length:

2–4 sentences

They should describe personality tendencies without presenting the quiz as a scientific psychological assessment.

39. Local Storage

Version 1 does not require persistent user accounts.

Optional browser localStorage may be used for:

Last selected quiz
Quiz progress
User preferences

However, persistent storage is not required for the initial release.

40. No Backend Database

Version 1 intentionally does not require:

MySQL
MongoDB
PostgreSQL
Firebase
Supabase
API server

All quiz information is bundled with the React application.

41. Future Data Expansion

The data structure should allow future features such as:

More questions
More characters
More quiz categories
Patronus quiz
Wand quiz
Favorite subject quiz
Combined personality profile
Saved results
User accounts

These features are outside the Version 1 scope.

42. Example Complete Data Relationship
QUIZ TYPE
    │
    ├── HOUSE QUIZ
    │      │
    │      ├── Questions
    │      │      └── Answers
    │      │             └── House Scores
    │      │
    │      └── Results
    │             ├── Gryffindor
    │             ├── Hufflepuff
    │             ├── Ravenclaw
    │             └── Slytherin
    │
    └── CHARACTER QUIZ
           │
           ├── Questions
           │      └── Answers
           │             └── Character Scores
           │
           └── Results
                  ├── Harry
                  ├── Ron
                  ├── Hermione
                  ├── Draco
                  ├── Neville
                  ├── Luna
                  └── Ginny
43. Data Flow
Question
   ↓
Player selects answer
   ↓
Answer ID stored
   ↓
Next question
   ↓
Repeat
   ↓
All answers collected
   ↓
Score calculation
   ↓
Maximum score calculation
   ↓
Percentage calculation
   ↓
Highest match identified
   ↓
Result data loaded
   ↓
Result screen
44. Data Design Principles

The local data system should follow these principles:

Separation

Keep quiz data separate from UI components.

Reusability

Use the same scoring utilities for both quizzes.

Maintainability

Adding a new question should not require changing the application logic.

Consistency

Use stable IDs across all files.

Validation

Invalid quiz data should be detected during development.

Scalability

The structure should allow additional quizzes in future versions.

45. Final Data Architecture

The final architecture should follow:

Static Quiz Data
       ↓
Question System
       ↓
Selected Answers
       ↓
Scoring Engine
       ↓
Percentage Calculator
       ↓
Highest Match
       ↓
Result Data
       ↓
Result Screen
46. Version 1 Data Scope

Version 1 includes:

4 Hogwarts Houses
7 Characters
10 House Quiz Questions
10 Character Quiz Questions
Weighted scoring
Compatibility percentages
Result descriptions
House/character images
Personality traits

Version 1 does not include:

User accounts
Cloud database
Online result storage
Multiplayer
Leaderboards
AI-generated results
Social accounts
Online quiz editor
47. Final Goal

The data architecture should make it possible to create a personality quiz that feels personalized while remaining simple to maintain.

The player should receive:

Your Result

        GRYFFINDOR

          87%

     Compatibility

Your personality shows strong
courage, determination, and loyalty.

Compatibility Breakdown:

Gryffindor       87%
Hufflepuff       65%
Ravenclaw        54%
Slytherin        41%

The same system should work for the Character Quiz.

48. Conclusion

The Local Data Schema provides the foundation for the Wizarding Personality quiz engine.

All questions, answers, scoring weights, results, and personality information will remain separate from the React UI.

This separation allows the project to:

Easily add questions
Modify scoring
Add characters
Add houses
Reuse components
Maintain clean code
Expand the quiz system in future versions

The scoring system must remain deterministic, transparent, maintainable, and independent from the visual presentation.