# Wizarding Personality — Product Requirements Document

## 1. Project Overview

### Project Name

Wizarding Personality

### Project Type

Harry Potter–themed personality quiz game.

### Project Description

Wizarding Personality is an interactive personality quiz game inspired by the Harry Potter universe.

The game allows players to discover:

1. Which Hogwarts House best matches their personality.
2. Which Harry Potter character best matches their personality.

Players answer a series of personality-based questions. The game analyzes their answers using a weighted scoring system and generates compatibility percentages from 0% to 100%.

The game focuses on an immersive magical visual experience, combining a wizarding-inspired interface with parchment surfaces, gold accents, magical animations, themed typography, house imagery, character artwork, and atmospheric backgrounds.

The project is designed as a small frontend game that can be played directly in a web browser without requiring user accounts, a backend server, or a database.

---

# 2. Project Goals

The main goals of the project are:

- Create an engaging personality quiz experience.
- Allow users to discover their Hogwarts House compatibility.
- Allow users to discover their Harry Potter character compatibility.
- Provide percentage-based personality matching.
- Create an immersive magical visual experience.
- Provide a responsive experience across desktop, tablet, and mobile.
- Demonstrate frontend development, UI/UX design, state management, data handling, and scoring logic.
- Deploy the completed game as a publicly accessible web application.

---

# 3. Target Users

The primary target users are:

- Harry Potter fans.
- Users who enjoy personality quizzes.
- Casual browser game players.
- Students and young adults.
- Users who enjoy interactive entertainment experiences.

The game should be simple enough for a first-time visitor to understand without instructions.

---

# 4. Game Modes

The game contains two main quiz modes.

## 4.1 Hogwarts House Quiz

The player answers 10–15 personality questions.

The game calculates compatibility with four Hogwarts Houses:

- Gryffindor
- Hufflepuff
- Ravenclaw
- Slytherin

The final result displays:

- Highest matching House.
- Compatibility percentage.
- Percentage for every House.
- Short personality interpretation.

### Example Result

Gryffindor — 82%
Ravenclaw — 67%
Hufflepuff — 54%
Slytherin — 41%

The highest percentage becomes the player's primary House match.

---

## 4.2 Character Quiz

The player answers 10–15 personality questions.

The game calculates compatibility with seven selected characters:

- Harry Potter
- Ron Weasley
- Hermione Granger
- Draco Malfoy
- Neville Longbottom
- Luna Lovegood
- Ginny Weasley

The final result displays:

- Highest matching character.
- Compatibility percentage.
- Percentage for every character.
- Short personality interpretation.

### Example Result

Hermione Granger — 84%
Harry Potter — 76%
Luna Lovegood — 63%
Ginny Weasley — 59%
Ron Weasley — 55%
Neville Longbottom — 48%
Draco Malfoy — 32%

---

# 5. Core Game Flow

The overall game flow is:

Loading Screen
↓
Welcome Screen
↓
Quiz Selection
↓
Selected Quiz Introduction
↓
Question 1
↓
Question 2
↓
...
↓
Final Question
↓
Answer Analysis
↓
Result Screen
↓
Play Again / Return Home

---

# 6. Loading Screen

Before the game begins, the application should display a themed loading experience.

### Requirements

The loading screen should include:

- Harry Potter/wizarding-themed logo or title asset.
- Dark atmospheric background.
- Magical particle effects.
- Gold decorative elements.
- Loading animation.
- Smooth transition into the welcome screen.

### Purpose

The loading screen establishes the magical atmosphere before the player begins interacting with the game.

---

# 7. Welcome Screen

The welcome screen introduces the game.

### Required Elements

- Game title.
- Short introduction.
- Magical background.
- Primary "Begin" button.
- Themed decorative elements.

### Example

"Discover which Hogwarts House or character matches your personality."

Primary action:

`BEGIN`

---

# 8. Quiz Selection

After entering the game, the player chooses one of two quiz modes.

### Option 1

## Which Hogwarts House Are You?

Discover your compatibility with:

- Gryffindor
- Hufflepuff
- Ravenclaw
- Slytherin

### Option 2

## Which Character Are You?

Discover your compatibility with:

- Harry Potter
- Ron Weasley
- Hermione Granger
- Draco Malfoy
- Neville Longbottom
- Luna Lovegood
- Ginny Weasley

---

# 9. Question System

Each quiz contains approximately 10–15 questions.

Each question contains:

- Question text.
- Multiple answer choices.
- Progress indicator.
- Current question number.
- Answer selection state.
- Continue/Next action.

### Example

Question 5 of 12

"Which quality do you value most?"

A. Courage  
B. Loyalty  
C. Knowledge  
D. Ambition

The player selects one answer before continuing.

---

# 10. Scoring System

The game will use a weighted scoring system.

Answers will contribute points to one or more possible results.

For the House quiz, points contribute to:

- Gryffindor
- Hufflepuff
- Ravenclaw
- Slytherin

For the Character quiz, points contribute to:

- Harry
- Ron
- Hermione
- Draco
- Neville
- Luna
- Ginny

The scoring system should avoid relying only on simple answer counting.

Each answer may contribute different weights to different results.

---

# 11. Percentage Calculation

After the final question, the game calculates compatibility percentages.

The percentage should be normalized so that each possible result is represented on a 0–100% scale.

The system must:

- Calculate all result scores.
- Normalize scores.
- Prevent invalid values.
- Identify the highest compatibility.
- Display results in descending compatibility order.

The game should never display:

- Negative percentages.
- Values above 100%.
- NaN.
- Infinity.
- Missing result values.

---

# 12. Result Screen

The result screen is the main reward after completing a quiz.

## House Result

The screen should display:

- House name.
- House crest/artwork.
- Compatibility percentage.
- Personality description.
- All four House percentages.
- Play Again button.
- Return Home button.

## Character Result

The screen should display:

- Character name.
- Character artwork.
- Compatibility percentage.
- Personality description.
- All seven character percentages.
- Play Again button.
- Return Home button.

---

# 13. Visual Theme

The application should have a strong wizarding aesthetic.

The provided project color palette will be used as the primary visual reference.

### Main Colors

- Deep Burgundy
- Golden Yellow
- Dark Brown
- Grey
- Parchment/Cream

The interface should use these colors carefully rather than presenting them as flat blocks.

### Visual Style

The design should include:

- Parchment-style cards.
- Dark magical backgrounds.
- Gold decorative borders.
- Magical particles.
- Subtle shadows.
- Themed typography.
- House-related visual elements.
- Character imagery.
- Smooth transitions.
- Atmospheric decorative elements.

---

# 14. Assets

The project may use Harry Potter-related visual assets such as:

- Logo.
- House crests.
- Character artwork.
- Background artwork.
- Fonts.
- Decorative graphics.

Assets provided by the project owner may be incorporated into the application.

For any third-party or official copyrighted assets, the project should respect applicable licensing, copyright, and usage permissions.

Where possible, original decorative UI elements and effects should be created specifically for this project.

---

# 15. Responsive Requirements

The game must work on:

- Desktop.
- Laptop.
- Tablet.
- Mobile phone.

The UI should adapt to different screen sizes without:

- Horizontal overflow.
- Overlapping content.
- Cut-off buttons.
- Unreadable text.
- Broken images.
- Incorrect quiz layouts.

Touch targets should be comfortable for mobile users.

---

# 16. Accessibility Requirements

The game should provide:

- Readable text contrast.
- Keyboard-accessible controls.
- Visible focus states.
- Accessible button labels.
- Alternative text for meaningful images.
- Clear selected-answer states.
- Logical navigation order.

Animations should not prevent users from completing the quiz.

---

# 17. Functional Requirements

### FR-01 — Loading

The application must display a loading experience before the main game.

### FR-02 — Welcome

The application must provide a clear entry point into the game.

### FR-03 — Quiz Selection

The user must be able to select either quiz mode.

### FR-04 — Questions

The selected quiz must display questions sequentially.

### FR-05 — Answer Selection

The user must be able to select one answer per question.

### FR-06 — Progress

The application must display the user's progress through the quiz.

### FR-07 — Scoring

The application must calculate scores based on the selected answers.

### FR-08 — Percentage

The application must convert scores into compatibility percentages.

### FR-09 — Results

The application must display the user's strongest match and complete percentage breakdown.

### FR-10 — Restart

The user must be able to restart the quiz.

### FR-11 — Home

The user must be able to return to the quiz selection/home screen.

### FR-12 — Responsive UI

The application must adapt to different screen sizes.

---

# 18. Non-Functional Requirements

## Performance

The game should load quickly and avoid unnecessary dependencies.

## Reliability

The quiz should not lose its state during normal navigation within the application.

## Maintainability

Questions, scoring rules, houses, and characters should be stored separately from UI components where practical.

## Scalability

The architecture should make it possible to add:

- More questions.
- More characters.
- More quiz categories.
- Additional result types.

without rebuilding the entire application.

## Usability

The player should understand how to start, answer questions, and view results without additional instructions.

---

# 19. Technology Direction

The project will primarily use:

- React
- Vite
- JavaScript
- HTML
- CSS

The application will use local/static data.

No backend or database is required for the initial version.

---

# 20. Data Storage

The initial version will not require user accounts or permanent user data.

Quiz data will be stored locally within the application source.

Potential data structures include:

- House data.
- Character data.
- Question data.
- Answer scoring data.
- Result descriptions.

---

# 21. Out of Scope

The initial version will NOT include:

- User registration.
- Login.
- Backend API.
- Database.
- Multiplayer.
- Online leaderboards.
- User profiles.
- Social networking.
- Real-time gameplay.
- Payment functionality.
- AI-generated personality analysis.

These may be considered for future versions.

---

# 22. Future Enhancements

Possible future features include:

- More quiz categories.
- Patronus personality quiz.
- Wand personality quiz.
- Wizarding profession quiz.
- More characters.
- More detailed personality analysis.
- Shareable result cards.
- Downloadable result images.
- Sound effects and background music.
- Additional animations.
- Saved quiz results.
- Social sharing.
- Dark/light magical themes.

---

# 23. Success Criteria

The project will be considered successful when:

- The game loads correctly.
- The player can select either quiz.
- Each quiz contains 10–15 questions.
- Answers are recorded correctly.
- Scores are calculated correctly.
- Percentages are displayed from 0–100%.
- The highest matching result is identified.
- Results are visually appealing.
- The interface is responsive.
- The game can be restarted.
- The application can be deployed successfully.
- The final experience feels like a polished interactive personality quiz.

---

# 24. Final Product Vision

Wizarding Personality should feel less like a traditional web form and more like a small magical interactive experience.

The player should feel that they are entering a wizarding world, answering personality questions, and eventually discovering where they fit within that world.

The combination of:

- Themed artwork
- Magical animations
- Parchment UI
- Gold accents
- Wizarding-inspired typography
- Personality questions
- Weighted scoring
- Percentage-based results

should create a memorable and engaging browser game experience.