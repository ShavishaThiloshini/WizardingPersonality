// ─── Ingredient Dictionary ─────────────────────────────────────────────────
export const potionIngredients = [
  {
    id: 'mandrake',
    name: 'Mandrake Leaf',
    icon: '🌿',
    description: 'Powerful restorative properties. Revives the weary.',
  },
  {
    id: 'snake_skin',
    name: 'Snake Skin',
    icon: '🐍',
    description: 'Sheds old magical blockages and renews the spirit.',
  },
  {
    id: 'lavender',
    name: 'Lavender',
    icon: '🌸',
    description: 'Calms the mind and eases magical exhaustion.',
  },
  {
    id: 'mooncalf',
    name: 'Mooncalf Wing',
    icon: '🦋',
    description: 'Enhances clarity and focus under moonlight.',
  },
  {
    id: 'puffapod',
    name: 'Puffapod',
    icon: '🍄',
    description: 'Releases sudden, invigorating bursts of energy.',
  },
  {
    id: 'fluxweed',
    name: 'Fluxweed',
    icon: '🪻',
    description: "Adapts to the brewer's magical intentions.",
  },
  {
    id: 'bezoar',
    name: 'Bezoar Stone',
    icon: '🪨',
    description: 'Counters toxic magical effects and heals injuries.',
  },
  {
    id: 'unicorn_hair',
    name: 'Unicorn Hair',
    icon: '✨',
    description: 'Provides pure, protective magical energy.',
  },
];

// ─── Potion Challenges ─────────────────────────────────────────────────────
// Round 1: Basic ingredient selection (choose 3 of 6, order does NOT matter)
// Round 2: Ingredient selection + correct order (choose 3 of 6, ORDER matters)
// Round 3: Clue-based challenge (choose best 3 of 6 using subtle reasoning)

export const potionChallenges = [
  // ── ROUND 1 ────────────────────────────────────────────────────────
  {
    id: 'potion-01',
    round: 1,
    title: 'Energy Restoration Potion',
    description:
      '"Create a potion that restores energy after a long day of magical study. Choose the three ingredients most associated with renewal and vitality."',
    type: 'basic',
    requiredCount: 3,
    ingredients: ['mandrake', 'snake_skin', 'lavender', 'mooncalf', 'puffapod', 'fluxweed'],
    correctIngredients: ['mandrake', 'puffapod', 'fluxweed'],
    points: 10,
    hint: 'Think: restoration, energy bursts, and adaptability.',
  },

  // ── ROUND 2 ────────────────────────────────────────────────────────
  {
    id: 'potion-02',
    round: 2,
    title: 'Concentration Draught',
    description:
      '"Prepare a draught that sharpens the mind before a crucial exam. Select the correct three ingredients AND arrange them in the exact brewing order — the sequence is critical!"',
    type: 'order',
    requiredCount: 3,
    ingredients: ['lavender', 'mooncalf', 'bezoar', 'mandrake', 'unicorn_hair', 'snake_skin'],
    correctIngredients: ['lavender', 'mooncalf', 'unicorn_hair'],
    correctOrder: ['lavender', 'mooncalf', 'unicorn_hair'],
    points: 10,
    hint: 'Calm the mind first, then enhance focus, then bind with pure magic.',
  },

  // ── ROUND 3 ────────────────────────────────────────────────────────
  {
    id: 'potion-03',
    round: 3,
    title: "The Traveler's Brew",
    description:
      '"A witch stumbles into the apothecary after a perilous journey. She has sustained minor magical injuries and is deeply exhausted. Which three ingredients will best restore her to full health?"',
    type: 'clue',
    requiredCount: 3,
    ingredients: ['snake_skin', 'bezoar', 'puffapod', 'mandrake', 'lavender', 'fluxweed'],
    correctIngredients: ['mandrake', 'bezoar', 'lavender'],
    points: 10,
    hint: 'She needs healing, restoration, and calm — not just energy.',
  },
];
