# Wizarding Personality — Application Flow Document

## 1. Document Overview

This document defines the complete navigation and user interaction flow of the Wizarding Personality game.

The application contains two main quiz experiences:

1. Hogwarts House Quiz
2. Character Quiz

The player enters through a magical loading experience, selects a quiz, answers a series of questions, receives a personality analysis, and can restart or return to the home screen.

---

# 2. Overall Application Flow

The main application flow is:

Loading
  ↓
Welcome
  ↓
Quiz Selection
  ↓
Quiz Introduction
  ↓
Question Loop
  ↓
Answer Selection
  ↓
Next Question
  ↓
Final Question
  ↓
Score Calculation
  ↓
Result
  ↓
Play Again / Home

---

# 3. Complete Screen Map

```text
                         ┌───────────────┐
                         │ Loading Screen│
                         └───────┬───────┘
                                 │
                                 ▼
                         ┌───────────────┐
                         │ Welcome Screen│
                         └───────┬───────┘
                                 │
                                 ▼
                       ┌──────────────────┐
                       │  Quiz Selection  │
                       └────────┬─────────┘
                                │
                 ┌──────────────┴──────────────┐
                 │                             │
                 ▼                             ▼
        ┌─────────────────┐          ┌──────────────────┐
        │  House Quiz     │          │ Character Quiz   │
        │ Introduction    │          │ Introduction     │
        └────────┬────────┘          └─────────┬────────┘
                 │                             │
                 ▼                             ▼
        ┌─────────────────┐          ┌──────────────────┐
        │ House Questions │          │ Character        │
        │ 10–15 Questions │          │ Questions        │
        └────────┬────────┘          └─────────┬────────┘
                 │                             │
                 └──────────────┬──────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │ Score Analysis  │
                       └────────┬────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │ Result Screen  │
                       └───────┬─────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
              Play Again                Home


4. Screen 01 — Loading Screen
Purpose

Create the first magical impression while the application initializes.

Visual Elements
Harry Potter/wizarding-themed logo or title.
Dark atmospheric background.
Magical particles.
Gold decorative elements.
Loading indicator.
Subtle animation.
Flow
Application Starts
       ↓
Loading Screen
       ↓
Assets / Application Ready
       ↓
Welcome Screen
Behavior

The loading screen should remain visible long enough to create a smooth opening experience.

The transition should not unnecessarily delay the user.

Transition

Fade or magical reveal into the Welcome Screen.

5. Screen 02 — Welcome Screen
Purpose

Introduce the player to the game.

Content

The screen should contain:

Game title.
Short description.
Magical artwork/background.
Begin button.
Example
        WIZARDING PERSONALITY

     Discover where you belong
       in the wizarding world.

             [ BEGIN ]
Actions
BEGIN

Navigates to:

Welcome
   ↓
Quiz Selection
6. Screen 03 — Quiz Selection
Purpose

Allow the player to choose what they want to discover.

The screen contains two primary options.

Option A — House Quiz
Title

"Which Hogwarts House Are You?"

Description

Discover which Hogwarts House best matches your personality.

Houses
Gryffindor
Hufflepuff
Ravenclaw
Slytherin
Action

DISCOVER MY HOUSE

Option B — Character Quiz
Title

"Which Character Are You?"

Description

Discover which selected Harry Potter character best matches your personality.

Characters
Harry Potter
Ron Weasley
Hermione Granger
Draco Malfoy
Neville Longbottom
Luna Lovegood
Ginny Weasley
Action

DISCOVER MY CHARACTER

7. Quiz Selection Flow
                  Quiz Selection
                        │
              ┌─────────┴─────────┐
              │                   │
              ▼                   ▼
        House Quiz          Character Quiz
              │                   │
              ▼                   ▼
       House Introduction   Character Introduction

The selected quiz type must be stored in application state.

8. Screen 04 — House Quiz Introduction
Purpose

Explain what the player is about to do.

Content
         WHICH HOUSE ARE YOU?

     Answer a series of questions
     and discover which Hogwarts
     House matches your personality.

        10–15 Questions

             [ START ]
Actions
START

Begins the House Quiz.

Flow:

House Introduction
        ↓
House Question 1
9. Screen 05 — Character Quiz Introduction
Purpose

Introduce the Character Quiz.

Content
        WHICH CHARACTER ARE YOU?

     Answer a series of questions
     and discover which character
     matches your personality.

        10–15 Questions

             [ START ]
Actions
START

Begins the Character Quiz.

Flow:

Character Introduction
        ↓
Character Question 1
10. Screen 06 — Quiz Question

Both quiz modes use the same basic question interface.

The data and scoring differ between the modes.

Layout
              QUESTION 4 OF 12

          ███████████░░░░░░

       What would you do when
       faced with a difficult
              situation?

      ┌─────────────────────┐
      │ A. Face it directly │
      └─────────────────────┘

      ┌─────────────────────┐
      │ B. Think carefully  │
      └─────────────────────┘

      ┌─────────────────────┐
      │ C. Ask a friend     │
      └─────────────────────┘

      ┌─────────────────────┐
      │ D. Find an advantage│
      └─────────────────────┘

              [ NEXT ]
11. Question Interaction

When the player selects an answer:

Before Selection
Answer
After Selection
✓ Answer

The selected answer receives a clear visual state.

The player cannot continue until an answer has been selected.

12. Question Navigation

The player progresses sequentially.

Question 1
   ↓
Question 2
   ↓
Question 3
   ↓
...
   ↓
Question 15

The player cannot skip questions.

The current question number and progress indicator update after each answer.

13. Back Navigation

For Version 1, questions should be completed sequentially.

A Back button may be included if implemented carefully.

If Back navigation is supported:

Question 5
   ↓
Back
   ↓
Question 4

The previous answer should remain selected.

If Back navigation is not required for Version 1, the interface should omit it to keep the gameplay simple.

14. Final Question

After the player answers the final question:

Final Question
      ↓
Select Answer
      ↓
Finish
      ↓
Score Calculation

The final action may display:

SEE MY RESULT

instead of NEXT.

15. Score Calculation Screen

After completing the quiz, the game may briefly display a magical analysis state.

Example:

          ✦ ANALYZING ✦

      Reading your magical
          personality...

             ✦ ✦ ✦
Purpose

Create anticipation before revealing the result.

Requirements

The analysis screen should be brief.

It must not create unnecessary waiting.

16. House Result Flow

After House Quiz analysis:

House Questions
       ↓
Score Calculation
       ↓
House Percentages
       ↓
Highest Match
       ↓
House Result
17. House Result Screen

The result screen should prominently display the highest matching House.

Example:

             ✦ YOUR HOUSE ✦

                  🦁

              GRYFFINDOR

                 82%

       Your personality shows
       courage, loyalty and
       determination.

       HOUSE COMPATIBILITY

       Gryffindor    82%
       Ravenclaw     67%
       Hufflepuff    54%
       Slytherin     41%

          [ PLAY AGAIN ]

             [ HOME ]
18. Character Result Flow

After Character Quiz analysis:

Character Questions
       ↓
Score Calculation
       ↓
Character Percentages
       ↓
Highest Match
       ↓
Character Result
19. Character Result Screen

Example:

            ✦ YOUR MATCH ✦

                 ⚡

           HARRY POTTER

                86%

       Your personality shows
       courage, loyalty and
       determination.

       CHARACTER COMPATIBILITY

       Harry       86%
       Hermione    72%
       Luna        63%
       Ginny       59%
       Ron         55%
       Neville     48%
       Draco       32%

          [ PLAY AGAIN ]

             [ HOME ]
20. Result Actions

The result screen contains two primary actions.

PLAY AGAIN

The current quiz restarts from Question 1.

State should be reset:

currentQuestion = 0
answers = []
scores = {}
result = null

The user remains in the same quiz mode.

Example:

House Result
     ↓
Play Again
     ↓
House Question 1
HOME

Returns the player to quiz selection.

Result
  ↓
Home
  ↓
Quiz Selection

Quiz state must be cleared.

21. Home Navigation

The Home action should always return the player to the main quiz selection rather than directly starting a quiz.

HOME
 ↓
Quiz Selection

This allows the player to choose either quiz.

22. Complete House Quiz Flow
Loading
   ↓
Welcome
   ↓
Quiz Selection
   ↓
House Quiz
   ↓
House Introduction
   ↓
Question 1
   ↓
Question 2
   ↓
Question 3
   ↓
...
   ↓
Question 10–15
   ↓
Analyzing
   ↓
House Result
   ↓
┌───────────────┐
│               │
▼               ▼
Play Again     Home
│               │
▼               ▼
Question 1   Quiz Selection
23. Complete Character Quiz Flow
Loading
   ↓
Welcome
   ↓
Quiz Selection
   ↓
Character Quiz
   ↓
Character Introduction
   ↓
Question 1
   ↓
Question 2
   ↓
Question 3
   ↓
...
   ↓
Question 10–15
   ↓
Analyzing
   ↓
Character Result
   ↓
┌───────────────┐
│               │
▼               ▼
Play Again     Home
│               │
▼               ▼
Question 1   Quiz Selection
24. Application State Flow

The application should maintain the following conceptual state:

currentScreen
      ↓
selectedQuiz
      ↓
currentQuestion
      ↓
selectedAnswer
      ↓
answers
      ↓
scores
      ↓
percentages
      ↓
result
25. Invalid State Handling

The application must prevent invalid navigation.

Examples:

User tries to access Result without completing quiz

Redirect to:

Quiz Introduction

or restart the selected quiz.

User tries to continue without selecting an answer

Keep the player on the current question.

Quiz data unavailable

Display a safe error state rather than a blank screen.

26. Restart Flow

The player should be able to restart after receiving a result.

Result
  ↓
Play Again
  ↓
Reset Quiz State
  ↓
Question 1

The previous score must not affect the new attempt.

27. Error Flow

If an unexpected application error occurs:

Application Error
       ↓
Friendly Error Message
       ↓
Return Home

Example:

Something went wrong.

Let's return to the
magical beginning.

       [ HOME ]

The error interface should maintain the overall visual theme.

28. Responsive Flow

The application flow remains the same across:

Desktop
Tablet
Mobile

Only the layout changes.

For example:

Desktop

Two quiz options may appear side by side.

Mobile

The options should stack vertically.

House Quiz
     ↓
Character Quiz
29. Animation Flow

Transitions should help communicate movement through the game.

Loading → Welcome

Fade / magical reveal.

Welcome → Selection

Soft page transition.

Selection → Quiz

Parchment/card transition.

Question → Question

Short slide or fade.

Final Question → Analysis

Magical transition.

Analysis → Result

Result reveal animation.

30. Keyboard Flow

The game should support keyboard navigation.

Recommended sequence:

Tab
 ↓
Answer Options
 ↓
Next

The selected answer should have a visible focus/selection state.

Enter/Space should activate focused buttons.

31. Complete User Journey

The complete player experience is:

                ✨ GAME START
                     │
                     ▼
              🪄 LOADING
                     │
                     ▼
              🏰 WELCOME
                     │
                     ▼
            CHOOSE YOUR QUIZ
                /        \
               /          \
              ▼            ▼
          🏰 HOUSE      🧙 CHARACTER
              │            │
              ▼            ▼
          INTRODUCTION  INTRODUCTION
              │            │
              ▼            ▼
          10–15 QUESTIONS
                │
                ▼
             ANALYSIS
                │
          ┌─────┴─────┐
          ▼           ▼
       HOUSE       CHARACTER
       RESULT       RESULT
          │           │
          └─────┬─────┘
                │
        ┌───────┴────────┐
        ▼                ▼
     PLAY AGAIN         HOME
        │                │
        ▼                ▼
    NEW QUIZ        QUIZ SELECTION
32. Navigation Principles

The application should follow these principles:

Keep the player focused on one task at a time.
Avoid unnecessary screens.
Clearly communicate progress.
Always provide a clear next action.
Make quiz completion feel rewarding.
Make results visually significant.
Allow easy replay.
Allow easy return to the quiz selection.
Prevent accidental loss of quiz state.
Maintain the magical theme throughout the entire journey.
33. Final Application Flow

The final application experience should feel like a small interactive magical journey rather than a standard questionnaire.

The intended emotional progression is:

Curiosity
   ↓
Discovery
   ↓
Participation
   ↓
Anticipation
   ↓
Revelation
   ↓
Replay

The player should enter the experience wondering:

"Which House am I?"

or

"Which character am I?"

and finish with a personalized result that encourages them to try the other quiz.