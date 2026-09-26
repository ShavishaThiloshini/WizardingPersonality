# UI/UX Design Brief
## Wizarding Personality

---

## 1. Document Overview

### Project Name
Wizarding Personality

### Document Name
UI/UX Design Brief

### Version
1.0

### Purpose

This document defines the visual identity, user interface, user experience, layout system, typography, colors, animations, and responsive behavior of the Wizarding Personality quiz game.

The goal is to create an immersive magical quiz experience rather than a standard web questionnaire.

The interface should feel like the player is entering a magical world, discovering their Hogwarts House or matching Harry Potter character.

---

# 2. Design Vision

The visual experience should communicate:

- Magic
- Mystery
- Hogwarts atmosphere
- Personality discovery
- Adventure
- Elegance
- Nostalgia
- Storytelling

The application should feel like:

> "You are about to discover something magical about yourself."

The design should combine:

- Dark atmospheric backgrounds
- Parchment-style content cards
- Gold decorative elements
- Magical particles
- Harry Potter themed typography where properly licensed/provided
- House imagery
- Character artwork where properly licensed/provided
- Elegant transitions
- Subtle magical effects

The interface should remain readable and usable despite the highly themed visual design.

---

# 3. Design Style

## Primary Style

### Magical Dark Fantasy

The main visual language should use:

- Deep burgundy
- Dark brown
- Black/dark atmospheric backgrounds
- Gold accents
- Parchment/cream content areas
- Grey supporting elements

The application should avoid looking like a generic modern dashboard.

---

# 4. Color Palette

The primary palette is based on the provided project theme.

| Color | Hex | Usage |
|---|---|---|
| Deep Burgundy | #641E1E | Main accent, headers, active states |
| Golden Yellow | #C39A1C | Borders, icons, highlights |
| Dark Brown | #3D2F22 | Backgrounds and text |
| Grey | #717679 | Secondary text and UI |
| Parchment | #EFEEE9 | Cards and readable content |
| Dark Background | #171313 | Main application background |
| Light Gold | #E0C45C | Hover/highlight effects |
| White | #FFFFFF | Important light text |

---

# 5. Color Usage Rules

### Burgundy

Use for:

- Primary buttons
- Selected states
- Important headings
- House-themed accents
- Decorative elements

### Gold

Use for:

- Borders
- Icons
- Dividers
- Progress indicators
- Magical highlights
- Hover effects

Gold should be used carefully.

The interface should feel elegant rather than overly bright.

### Parchment

Use for:

- Question cards
- Quiz instructions
- Result information
- Personality descriptions
- Score breakdowns

### Dark Background

Use for:

- Main page background
- Loading screen
- Welcome screen
- Quiz atmosphere

---

# 6. Typography

## Primary Display Font

Use the official/provided Harry Potter themed font if the project has a legitimate license or permitted asset.

Use it mainly for:

- Logo area
- Main headings
- Section titles
- Result titles
- Magical decorative text

Do not use a decorative font for every piece of text.

---

## Secondary Font

Use a clean readable font for:

- Questions
- Answers
- Descriptions
- Percentages
- Buttons
- Instructions

Recommended style:

- Serif or elegant humanist font
- High readability
- Good contrast
- Clear letter spacing

---

# 7. Typography Hierarchy

### Main Title

Large and dramatic.

Example:

> Which Hogwarts House Are You?

### Section Heading

Medium-large and elegant.

Example:

> Choose Your Path

### Question Text

Large enough to read comfortably on desktop and mobile.

### Answer Text

Medium size with strong readability.

### Supporting Text

Smaller but still accessible.

### Result Percentage

Large and visually prominent.

---

# 8. Asset Direction

The application can use official Harry Potter fonts, logos, house imagery, character artwork, and other assets **only when the project has the appropriate rights, license, or permission to use them**.

Recommended asset categories:

```text
public/assets/

├── logo/
├── fonts/
├── houses/
├── characters/
├── backgrounds/
├── decorations/
└── icons/

Possible assets:

Harry Potter logo
Hogwarts-related decorative artwork
House crests
Character artwork
Magical background images
Wand/spark decorations
Stars
Smoke/fog effects
Parchment textures

If an official asset cannot legally be used, replace it with an original or properly licensed alternative while maintaining the same visual direction.

9. Overall Layout

The application should use a full-screen experience.

Basic structure:

------------------------------------------------
|                                              |
|              Magical Background              |
|                                              |
|                  Main Content                |
|                                              |
|                                              |
------------------------------------------------

The background should remain visually interesting while keeping the main content readable.

10. Background Design

The main background should have:

Dark atmospheric colors
Subtle texture
Magical particles
Soft glow
Optional fog/smoke
Very subtle movement

Avoid excessive animation.

The background should support the content rather than compete with it.

11. Magical Particle System

Small particles can appear throughout the application.

Examples:

Golden sparks
Floating dust
Small glowing particles
Tiny stars
Magical light particles

Particles should:

Move slowly
Have different sizes
Have different opacity levels
Appear randomly
Avoid covering important text

The animation should be subtle.

12. Loading Screen

The loading screen is the first visual experience.

Layout
              Magical Background

                 [LOGO]

              ✦ ✧ ✦ ✧ ✦

             Loading Magic...

                ○ ○ ○
Elements
Harry Potter logo or permitted project logo
Dark atmospheric background
Magical particles
Gold glow
Loading animation
Optional magical sound if implemented later
Loading Animation

Possible animation:

Loading Magic
.
..
...
....

or a magical glowing progress animation.

The loading screen should remain short.

Recommended duration:

1.5 – 3 seconds

The application should not intentionally create a long loading delay.

13. Welcome Screen

After loading, the player enters the welcome experience.

Layout
              [MAGICAL LOGO]

         Welcome, Young Wizard

     Discover the magic within you.

        [ Begin Your Journey ]

             ✦ ✧ ✦ ✧

The screen should feel like the beginning of an adventure.

Welcome Button

Primary CTA:

Begin Your Journey

Button style:

Burgundy background
Gold border
Parchment/light text
Gold glow on hover
Slight scale animation
14. Quiz Selection Screen

The player chooses between the two quiz modes.

Heading

Choose Your Magical Path

Two large cards should be displayed.

┌─────────────────────┐
│                     │
│   🏰 HOUSE QUIZ     │
│                     │
│ Which Hogwarts      │
│ House Are You?      │
│                     │
│ [ Discover ]        │
└─────────────────────┘


┌─────────────────────┐
│                     │
│   ✨ CHARACTER      │
│                     │
│ Which Character     │
│ Are You?            │
│                     │
│ [ Discover ]        │
└─────────────────────┘
15. Quiz Selection Cards

Each card should contain:

Themed image
Title
Short description
Decorative border
Gold accent
CTA button
House Quiz

Title:

Which Hogwarts House Are You?

Description:

Discover the house that best matches your personality.

Character Quiz

Title:

Which Character Are You?

Description:

Discover which wizarding character shares your personality traits.

16. Quiz Intro Screen

Before starting the questions, show a short introduction.

Example:

         Which Hogwarts House Are You?

        Answer honestly.
        Trust your instincts.
        Let the magic decide.

             10 Questions

          [ Begin Quiz ]

The same pattern should be used for the Character Quiz.

17. Question Screen

The question screen is the primary interaction area.

Layout
------------------------------------------------
                  QUESTION 04 / 10

          What matters most to you?

     ┌──────────────────────────────┐
     │  Courage and bravery         │
     └──────────────────────────────┘

     ┌──────────────────────────────┐
     │  Loyalty and friendship      │
     └──────────────────────────────┘

     ┌──────────────────────────────┐
     │  Knowledge and discovery     │
     └──────────────────────────────┘

     ┌──────────────────────────────┐
     │  Ambition and achievement    │
     └──────────────────────────────┘

                 [ NEXT ]
------------------------------------------------
18. Progress Indicator

The player should always know their progress.

Example:

Question 4 of 10

████████░░░░░░ 40%

The progress bar should use:

Gold
Burgundy
Dark background

The progress indicator should animate smoothly.

19. Answer Options

Answer options should look like magical parchment cards.

Default:

┌────────────────────────────────────┐
│  Courage and bravery               │
└────────────────────────────────────┘

Hover:

┌────────────────────────────────────┐
│ ✦ Courage and bravery              │
└────────────────────────────────────┘

Selected:

┌════════════════════════════════════┐
│ ✦ Courage and bravery          ✓   │
└════════════════════════════════════┘
20. Answer Interaction

When an answer is selected:

The card receives a visual highlight.
A gold border appears.
A small glow appears.
A check indicator may appear.
The Next button becomes active.

Do not automatically move to the next question immediately.

The player should have control over the interaction.

21. Navigation

Primary buttons:

Next

Used to continue.

Back

Optional.

Used to return to the previous question.

See My Result

Displayed on the final question.

Buttons should remain visually consistent throughout the application.

22. Button Design

Primary button:

┌────────────────────────┐
│   BEGIN YOUR JOURNEY   │
└────────────────────────┘

Visual properties:

Burgundy background
Gold border
Rounded corners
Slight shadow
Gold hover glow
Smooth transition

Avoid excessive rounded/pill-shaped modern UI.

The design should feel elegant and themed.

23. Analyzing Screen

After the final answer, show a short transition.

Example:

             ✦ ✧ ✦

        Reading Your Magic...

             ✦ ✧ ✦

       Your result is forming...

Possible effects:

Magical particles
Rotating symbol
Glowing wand-like line
Fading parchment
Slow background movement

Duration:

1 – 2 seconds

The screen should create anticipation without becoming annoying.

24. Result Screen

The result screen is the most important emotional moment.

Layout
             YOUR RESULT

          You belong to...

              [CREST]

            GRYFFINDOR

          87% MATCH

     "Your courage and determination
      shine through."

-----------------------------------

        Your Compatibility

Gryffindor       87%
Hufflepuff       65%
Ravenclaw        54%
Slytherin        41%

       [ PLAY AGAIN ]

          [ HOME ]
25. Result Hero Area

The highest matching result should be visually dominant.

For House Quiz:

House crest
House name
Compatibility percentage
Short description
Optional house artwork

For Character Quiz:

Character artwork
Character name
Compatibility percentage
Personality description
26. Compatibility Percentage

Each result should display a percentage between:

0% – 100%

Example:

Gryffindor
87% Compatibility

The percentage can animate from:

0% → 87%

This creates a satisfying result-reveal effect.

27. Score Breakdown

The player should see all available results.

Example:

House	Match
Gryffindor	87%
Hufflepuff	65%
Ravenclaw	54%
Slytherin	41%

For Character Quiz:

Character	Match
Hermione Granger	89%
Luna Lovegood	76%
Harry Potter	69%
Ginny Weasley	62%
Neville Longbottom	58%
Ron Weasley	51%
Draco Malfoy	38%

The highest result should receive a visual emphasis, but every result should remain visible.

28. Personality Description

The result should include a short personality interpretation.

Example:

You value courage, loyalty, and standing up for the people you care about. You are willing to take risks when something truly matters to you.

Descriptions should be:

Short
Positive
Easy to understand
Thematically appropriate

Avoid overly serious psychological claims.

29. Result Actions

Two main buttons:

Play Again

Restarts the selected quiz.

Home

Returns to quiz selection.

Optional:

Try the Other Quiz

Allows the player to immediately explore the other quiz.

30. House Visual Identity

Each Hogwarts House can have its own accent treatment.

Gryffindor

Visual direction:

Red
Gold
Lion imagery
Hufflepuff

Visual direction:

Yellow
Black
Badger imagery
Ravenclaw

Visual direction:

Blue
Bronze/silver
Eagle imagery
Slytherin

Visual direction:

Green
Silver
Serpent imagery

These colors should primarily appear on the result screen and house-specific elements rather than replacing the application's overall palette.

31. Character Result Visuals

Character result pages should use character-specific artwork when legally permitted/provided.

Example structure:

          [CHARACTER ARTWORK]

             HERMIONE
            GRANGER

             89% MATCH

       Intelligent • Curious
       Determined • Loyal

The artwork should not make the text difficult to read.

32. Decorative Elements

Possible decorative elements:

Gold corner ornaments
Magical stars
Wand-like lines
Parchment edges
Hogwarts-inspired borders
Small house symbols
Floating particles
Decorative dividers

Example:

✦ ─────────────── ✦

Decorations should support the theme without overcrowding the interface.

33. Parchment Card Design

Cards should have:

Cream/parchment background
Slight texture
Dark brown text
Thin gold border
Soft shadow
Slightly irregular/decorative visual treatment

Avoid excessive glassmorphism.

The core visual language should be parchment + magical atmosphere.

34. Shadows and Glow

Use subtle shadows.

Example:

box-shadow:
  0 10px 30px rgba(0, 0, 0, 0.35);

Gold glow can be used for:

Selected answers
Primary buttons
Result highlights
Important decorative elements

Glow should remain subtle.

35. Animation System

Animations should feel magical and smooth.

Recommended animations:

Fade In

For screen transitions.

Slide Up

For cards.

Glow

For selected/hovered elements.

Float

For magical particles.

Scale

For buttons and result elements.

Progress Animation

For progress bars.

Percentage Count-Up

For result percentages.

36. Screen Transitions

Screen changes should not feel abrupt.

Recommended:

Current Screen
     ↓
Fade Out
     ↓
Small transition
     ↓
Fade In
     ↓
New Screen

Transition duration:

300ms – 600ms
37. Responsive Design

The game must work on:

Desktop
Laptop
Tablet
Mobile
Desktop

Use:

Large centered content
Two-column quiz selection cards
Large artwork
Spacious question cards
Tablet

Use:

Reduced spacing
Two cards where possible
Smaller artwork
Comfortable question width
Mobile

Use:

      [LOGO]

   Question 04 / 10

   What matters
   most to you?

 ┌─────────────────┐
 │ Courage         │
 └─────────────────┘

 ┌─────────────────┐
 │ Loyalty         │
 └─────────────────┘

 ┌─────────────────┐
 │ Knowledge       │
 └─────────────────┘

      [ NEXT ]

Cards should become one column.

38. Mobile UX Rules

On mobile:

Avoid horizontal scrolling.
Keep buttons large enough to tap.
Keep question text readable.
Maintain sufficient spacing between answers.
Avoid overly large artwork.
Keep progress visible.
Avoid animations that significantly affect performance.
39. Accessibility

The themed design should still remain accessible.

Requirements:

Good text contrast
Keyboard navigation
Visible focus states
Buttons must have meaningful labels
Images should have alt text
Do not rely only on color to indicate selection
Respect prefers-reduced-motion
Interactive elements should have sufficient touch size
40. Interaction Feedback

Every important interaction should provide visual feedback.

Examples:

Hover

Button slightly brightens.

Selection

Answer receives gold border and check icon.

Invalid Action

Show a subtle message if needed.

Completion

Result animation begins after the final answer.

41. Error and Empty States

The application is primarily static, but basic fallback states should exist.

If quiz data cannot load:

Something went wrong with the magic.

Please return to the home screen and try again.

[ RETURN HOME ]

If an image fails:

Show a themed fallback background.
Do not break the layout.
42. UX Principles

The application should follow these principles:

1. Immersion

Every screen should contribute to the magical experience.

2. Simplicity

The player should always understand what to do next.

3. Discovery

The interface should create curiosity about the final result.

4. Feedback

Every interaction should have a visible response.

5. Readability

The theme should never reduce usability.

6. Consistency

Buttons, cards, typography, and spacing should remain consistent.

7. Replayability

The player should easily be able to replay or try the other quiz.

43. Complete Visual Journey

The intended visual progression is:

Loading
   ↓
Magic Awakens
   ↓
Welcome
   ↓
Choose Your Path
   ↓
Quiz Introduction
   ↓
Question 01
   ↓
Question 02
   ↓
...
   ↓
Final Question
   ↓
Reading Your Magic
   ↓
Result Reveal
   ↓
Compatibility Scores
   ↓
Play Again / Home
44. Emotional UX Journey

The application should create the following emotional progression:

Curiosity
   ↓
Excitement
   ↓
Participation
   ↓
Anticipation
   ↓
Mystery
   ↓
Discovery
   ↓
Satisfaction
   ↓
Replay

The result screen should be the strongest visual moment in the experience.

45. Design Constraints

The following should be avoided:

Generic dashboard layouts
Excessive glassmorphism
Excessive neon effects
Too many colors
Excessive animations
Tiny text
Difficult navigation
Overloaded screens
Unreadable decorative fonts
Excessive rounded cards
Visual clutter

The application should feel magical, elegant, immersive, and readable.

46. Final Design Direction

The final interface should combine:

Harry Potter Magical Theme
          +
Dark Atmospheric Background
          +
Parchment UI
          +
Gold Decorative Elements
          +
Magical Particles
          +
Themed Typography
          +
House / Character Artwork
          +
Smooth Animations
          +
Responsive Design

The final result should feel like an interactive magical personality experience rather than a conventional online quiz.

47. Design Success Criteria

The UI/UX design is successful if:

The application immediately feels magical.
Users understand how to begin.
Quiz selection is clear.
Questions are easy to read.
Answer selection is obvious.
Progress is always visible.
The result reveal feels exciting.
Compatibility percentages are easy to understand.
House and character artwork enhance the experience.
The interface works well on mobile and desktop.
The visual theme remains consistent throughout the application.
Accessibility and readability are maintained.