# Wizarding Personality — Technical Requirements Document

## 1. Document Overview

### Project Name

Wizarding Personality

### Project Type

Frontend browser-based personality quiz game.

### Primary Framework

React

### Build Tool

Vite

### Programming Language

JavaScript

### Styling

CSS

### Data Storage

Local static JavaScript data / JSON-style structures

### Backend

Not required for the initial version.

### Database

Not required for the initial version.

---

# 2. Technical Objective

The objective of the technical implementation is to create a responsive, maintainable, component-based personality quiz game.

The application must:

- Load quickly.
- Maintain quiz state correctly.
- Process user answers.
- Calculate weighted personality scores.
- Convert scores into percentages.
- Display the appropriate result.
- Support two independent quiz modes.
- Work across desktop, tablet, and mobile.
- Keep quiz data separate from presentation components.
- Allow future questions and results to be added easily.

---

# 3. Technology Stack

## 3.1 Frontend

### React

React will be used to build the application interface.

React will manage:

- Application state.
- Quiz state.
- Current question.
- Selected answer.
- Quiz progress.
- Result data.
- Screen transitions.

---

## 3.2 Build Tool

### Vite

Vite will be used as the project build and development environment.

Responsibilities include:

- Development server.
- Fast hot module replacement.
- Production builds.
- Asset handling.
- Project bundling.

---

## 3.3 Programming Language

### JavaScript

JavaScript will handle:

- Quiz logic.
- Score calculation.
- Percentage calculation.
- State updates.
- User interactions.
- Result generation.
- Navigation logic.

Modern JavaScript syntax should be preferred.

Examples include:

- `const`
- `let`
- Arrow functions
- Array methods
- Object destructuring
- Template literals
- ES modules

---

## 3.4 Styling

### CSS

CSS will be used for:

- Layout.
- Responsive design.
- Typography.
- Animations.
- Transitions.
- Themed backgrounds.
- Cards.
- Buttons.
- Progress indicators.
- Result displays.

CSS should be organized so that the visual theme can be maintained easily.

---

# 4. Application Architecture

The application should use a component-based architecture.

High-level architecture:

```text
App
│
├── Loading Screen
│
├── Welcome Screen
│
├── Quiz Selection
│
├── House Quiz
│   ├── Question Card
│   ├── Answer Options
│   └── Progress Bar
│
├── Character Quiz
│   ├── Question Card
│   ├── Answer Options
│   └── Progress Bar
│
├── Result Screen
│
└── Shared Components

5. Recommended Folder Structure
wizarding-personality/
│
├── public/
│   └── assets/
│       ├── logo/
│       ├── fonts/
│       ├── houses/
│       ├── characters/
│       ├── backgrounds/
│       └── decorations/
│
├── src/
│   │
│   ├── components/
│   │   ├── LoadingScreen.jsx
│   │   ├── WelcomeScreen.jsx
│   │   ├── QuizSelection.jsx
│   │   ├── QuizIntro.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── AnswerOption.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── ResultScreen.jsx
│   │   ├── ScoreBreakdown.jsx
│   │   └── Button.jsx
│   │
│   ├── data/
│   │   ├── houseQuestions.js
│   │   ├── characterQuestions.js
│   │   ├── houses.js
│   │   └── characters.js
│   │
│   ├── utils/
│   │   ├── scoreCalculator.js
│   │   ├── percentageCalculator.js
│   │   └── quizHelpers.js
│   │
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── responsive.css
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
6. Application State

The application will use React state to control the game.

The primary application state should include:

{
  currentScreen: "welcome",
  selectedQuiz: null,
  currentQuestion: 0,
  answers: [],
  scores: {},
  result: null
}

The exact implementation can be divided into multiple state variables or managed through a reducer depending on implementation needs.

7. Screen States

The application should support the following major screen states:

loading
   ↓
welcome
   ↓
quiz-selection
   ↓
quiz-intro
   ↓
quiz
   ↓
calculating
   ↓
result

A user should not be able to accidentally access a result screen before completing the quiz.

8. Quiz Data Architecture

Quiz questions must be separated from React components.

Example structure:

{
  id: 1,

  question:
    "What quality do you value most?",

  answers: [
    {
      id: "a",
      text: "Courage",
      scores: {
        gryffindor: 10,
        hufflepuff: 2,
        ravenclaw: 1,
        slytherin: 3
      }
    },

    {
      id: "b",
      text: "Knowledge",
      scores: {
        gryffindor: 1,
        hufflepuff: 2,
        ravenclaw: 10,
        slytherin: 3
      }
    }
  ]
}

The Character Quiz will use the same concept but with character identifiers.

9. Quiz Engine

The quiz engine must:

Load the selected quiz.
Display the current question.
Allow one answer to be selected.
Store the selected answer.
Move to the next question.
Repeat until the final question.
Calculate the final score.
Normalize the score.
Generate the result.
Display the result.
10. Answer Selection

Only one answer should be selected for each question.

The selected answer should have a visually distinct state.

Example:

Unselected
┌──────────────────────┐
│  A. Courage          │
└──────────────────────┘

Selected
┌──────────────────────┐
│  ✓ A. Courage       │
└──────────────────────┘

The Next button should remain disabled until an answer has been selected.

11. Progress Tracking

The quiz must provide clear progress information.

Example:

Question 6 of 12

██████████░░░░░░

The progress bar should update after each question.

The player should always know how far they are through the quiz.

12. Scoring Engine

The scoring engine will use weighted values.

Each answer can contribute points to multiple possible results.

Example:

scores: {
  gryffindor: 8,
  hufflepuff: 3,
  ravenclaw: 5,
  slytherin: 2
}

After all questions are answered:

Total Score
     ↓
Normalize
     ↓
Calculate Percentages
     ↓
Sort Results
     ↓
Find Highest Match
13. Percentage Calculation

The scoring system must convert raw scores into percentages.

A normalized calculation should ensure that displayed values remain between:

0% → 100%

The implementation should safely handle:

Zero scores.
Equal scores.
Missing scores.
Unexpected values.

No result should display invalid mathematical values.

14. Result Sorting

Results should be sorted from highest compatibility to lowest compatibility.

For example:

[
  {
    id: "gryffindor",
    percentage: 82
  },
  {
    id: "ravenclaw",
    percentage: 67
  },
  {
    id: "hufflepuff",
    percentage: 54
  },
  {
    id: "slytherin",
    percentage: 41
  }
]

The first item represents the highest compatibility.

15. Tie Handling

If two or more results have the same percentage, the system should use a deterministic tie-breaking rule.

Possible approach:

Compare raw weighted scores.
If still tied, use the result with the stronger contribution from higher-priority questions.
If still tied, select the first configured result consistently.

The application must not produce random results for the same answers.

16. Result Data

House data should contain:

{
  id: "gryffindor",
  name: "Gryffindor",
  image: "...",
  description: "...",
  colors: {
    primary: "...",
    secondary: "..."
  }
}

Character data should contain:

{
  id: "hermione",
  name: "Hermione Granger",
  image: "...",
  description: "..."
}

The UI should obtain display information from these data objects rather than hard-coding it inside components.

17. Asset Management

Assets should be stored in the public assets directory.

Recommended structure:

public/assets/

├── logo/
│   └── ...
│
├── fonts/
│   └── ...
│
├── houses/
│   ├── gryffindor/
│   ├── hufflepuff/
│   ├── ravenclaw/
│   └── slytherin/
│
├── characters/
│   ├── harry/
│   ├── ron/
│   ├── hermione/
│   ├── draco/
│   ├── neville/
│   ├── luna/
│   └── ginny/
│
├── backgrounds/
│
└── decorations/

Asset filenames should use clear, consistent naming.

18. Typography

The project may use provided/licensed wizarding-themed fonts.

Fonts should be loaded through CSS.

Example:

@font-face {
  font-family: "WizardingFont";
  src: url("/assets/fonts/wizarding-font.woff2");
}

A secondary readable font should be used for longer text where necessary.

Decorative fonts should not be used for large amounts of body text if they reduce readability.

19. Theme Variables

The project should use CSS variables for the primary theme.

Example:

:root {
  --color-burgundy: #641E1E;
  --color-gold: #C39A1C;
  --color-dark-brown: #3D2F22;
  --color-grey: #717679;
  --color-parchment: #EFEEE9;

  --color-text: #2D241D;
  --color-background: #1E1713;
}

The exact final values should be adjusted according to the supplied design reference.

20. Responsive Architecture

The application must use responsive CSS.

Recommended breakpoints:

Mobile
320px+

Tablet
768px+

Desktop
1024px+

Large Desktop
1440px+

The layout should adapt rather than simply scale down.

21. Animation Requirements

Animations should be subtle and purposeful.

Possible animations include:

Loading
Logo fade-in.
Particle movement.
Progress animation.
Navigation
Screen fade.
Slide transitions.
Questions
Question entrance animation.
Answer selection animation.
Results
Percentage counter.
Progress bar animation.
Character/House reveal.

Animations should respect:

prefers-reduced-motion

Users who prefer reduced motion should still be able to use the full application.

22. Performance Requirements

The application should:

Avoid unnecessary libraries.
Optimize large images.
Use appropriate image dimensions.
Avoid unnecessary re-renders.
Keep quiz data lightweight.
Load only required assets where practical.
Avoid long blocking animations.

The initial application should remain lightweight enough for normal mobile connections.

23. Error Handling

The application should safely handle:

Missing question data.
Missing image assets.
Invalid answer selection.
Invalid scores.
Empty quiz data.
Unexpected navigation state.

For example, if an image fails to load, the UI should display an appropriate fallback rather than breaking the page.

24. Browser Compatibility

The game should support modern browsers including:

Google Chrome
Microsoft Edge
Mozilla Firefox
Safari

The application should use widely supported web APIs.

25. Security

Since the application does not require a backend or authentication system, security requirements are minimal.

The project should still:

Avoid storing sensitive information.
Avoid unnecessary third-party scripts.
Validate internal data.
Avoid unsafe HTML injection.
Keep dependencies updated.
26. Backend Requirements

No backend is required for Version 1.

The application will operate entirely on the client side.

React Application
       │
       ├── Quiz Data
       ├── Scoring Logic
       ├── UI State
       └── Result Calculation

Future versions may introduce a backend if features such as accounts, saved results, or leaderboards are added.

27. Database Requirements

No database is required for Version 1.

All quiz content will be stored in the source code.

Future versions may use a database for:

User accounts.
Saved results.
Quiz history.
Leaderboards.
Admin-managed questions.
28. Deployment

The application should be production-ready for static hosting.

Recommended deployment platform:

Netlify

The deployment process should:

Build the Vite project.
Generate production assets.
Connect the GitHub repository.
Configure the build command.
Configure the publish directory.
Deploy the application.

Typical Vite configuration:

Build Command:
npm run build

Publish Directory:
dist
29. Development Requirements

Before implementation:

Node.js must be installed.
npm must be available.
Git should be installed.
A modern code editor should be available.

Project initialization:

npm create vite@latest wizarding-personality

Select:

Framework: React
Variant: JavaScript

Then:

cd wizarding-personality
npm install
npm run dev
30. Code Quality Requirements

The code should:

Use meaningful component names.
Use meaningful variable names.
Keep components focused.
Separate data from UI.
Separate scoring logic from UI.
Avoid unnecessary duplication.
Use reusable components.
Keep CSS organized.
Avoid hard-coded quiz data inside JSX.
31. Reusable Components

The following components should be reusable where practical:

Button

Used for:

Begin.
Next.
Play Again.
Home.
QuestionCard

Responsible for displaying question content.

AnswerOption

Responsible for individual answer choices.

ProgressBar

Responsible for quiz progress.

ResultBreakdown

Responsible for percentage results.

ResultScreen

Responsible for final result presentation.

32. Utility Functions

Recommended utility functions include:

calculateScores()
calculatePercentages()
getHighestMatch()
sortResults()
resetQuiz()
validateQuizData()

These functions should remain independent from the visual components.

33. Version 1 Technical Scope

Version 1 will contain:

Loading screen.
Welcome screen.
Quiz selection.
House quiz.
Character quiz.
10–15 questions per quiz.
Weighted scoring.
Percentage calculation.
Result breakdown.
Result descriptions.
Restart functionality.
Responsive design.
Magical animations.
Asset integration.
Netlify deployment.
34. Technical Success Criteria

The technical implementation will be considered successful when:

The application starts without errors.
All screens render correctly.
Both quiz modes work independently.
Questions load correctly.
Answers are stored correctly.
Scores are calculated correctly.
Percentages remain between 0% and 100%.
Results are deterministic.
Assets load correctly.
Responsive layouts work correctly.
Animations do not interfere with gameplay.
Production build succeeds.
The application can be deployed successfully.

#  35. Technical Future Expansion


The architecture should allow future additions such as:

Patronus Quiz.
Wand Quiz.
Magical Profession Quiz.
More characters.
More questions.
Multiple question categories.
Result sharing.
Result image generation.
User accounts.
Saved results.
Leaderboards.
Online question management.

The initial architecture should remain simple while avoiding decisions that make these future features unnecessarily difficult.