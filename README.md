# Wizarding Personality

## Overview

Wizarding Personality is an interactive magical personality quiz that analyzes users' answers to determine their Hogwarts House and matching wizarding character.

## Features

- Hogwarts House Quiz
- Character Personality Quiz
- Personality-based questions
- Weighted scoring
- Compatibility percentages
- Highest-match result
- Score breakdown
- Personality descriptions
- Responsive design
- Magical animations
- Background music / sound control
- Accessibility support

## Quiz Types

**House Quiz:**
- Gryffindor
- Hufflepuff
- Ravenclaw
- Slytherin

**Character Quiz:**
- Harry Potter
- Ron Weasley
- Hermione Granger
- Draco Malfoy
- Neville Longbottom
- Luna Lovegood
- Ginny Weasley

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS

## Project Structure

- `src/components`: Contains all React components (UI elements, screens, navigation).
- `src/data`: Contains the static data for quizzes, houses, characters, and questions.
- `src/utils`: Contains utility functions for scoring and logic calculation.
- `src/styles`: Contains CSS files including global styles, animations, variables, and responsive behavior.
- `public/assets`: Contains public assets such as audio files and images.

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Production Build

To build the project for production, run:
```bash
npm run build
```

To preview the production build locally, run:
```bash
npm run preview
```

## Deployment

This project is configured as a static site and is ready to be deployed to platforms like Netlify or Vercel. Simply point the deployment to the `dist` directory and use `npm run build` as the build command.

## Accessibility

The application was built with accessibility in mind, including:
- Keyboard navigability with visible focus outlines on interactive elements.
- ARIA roles and labels to ensure screen readers provide necessary context.
- Semantic HTML tags for better structure.
- Respecting the user's `prefers-reduced-motion` settings by reducing animations when requested.
- Consistent contrast ratios and readable typography.

## Credits / Assets

- Audio assets and fonts are used for educational/portfolio purposes. No unauthorized copyrighted materials were distributed.
- Developed utilizing standard web technologies with a focus on UI/UX best practices.

## Author

Developed by Shavisha Thiloshini.
