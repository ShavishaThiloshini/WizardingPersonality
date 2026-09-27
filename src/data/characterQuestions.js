const characterQuestions = [
  {
    id: "C01",
    question:
      "You are given an important goal, but achieving it will be difficult. What do you do?",
    answers: [
      {
        id: "a",
        text: "Face it head-on — the difficulty makes it worth pursuing.",
        scores: { harry: 5, ron: 2, hermione: 2, draco: 3, neville: 3, luna: 1, ginny: 5 },
      },
      {
        id: "b",
        text: "Research thoroughly and create a detailed plan before you begin.",
        scores: { harry: 2, ron: 1, hermione: 5, draco: 3, neville: 2, luna: 2, ginny: 2 },
      },
      {
        id: "c",
        text: "Figure out which approach gives you the strongest advantage.",
        scores: { harry: 2, ron: 1, hermione: 3, draco: 5, neville: 1, luna: 1, ginny: 3 },
      },
      {
        id: "d",
        text: "Take it step by step — even slow progress is still progress.",
        scores: { harry: 2, ron: 3, hermione: 2, draco: 1, neville: 5, luna: 3, ginny: 2 },
      },
    ],
  },
  {
    id: "C02",
    question:
      "One of your closest friends is going through a difficult time. How do you respond?",
    answers: [
      {
        id: "a",
        text: "Stay by their side and make sure they know you are not going anywhere.",
        scores: { harry: 4, ron: 5, hermione: 3, draco: 1, neville: 4, luna: 3, ginny: 3 },
      },
      {
        id: "b",
        text: "Find practical information or resources that could help them.",
        scores: { harry: 2, ron: 2, hermione: 5, draco: 2, neville: 2, luna: 2, ginny: 2 },
      },
      {
        id: "c",
        text: "Offer an unusual perspective that might help them see it differently.",
        scores: { harry: 1, ron: 2, hermione: 2, draco: 1, neville: 2, luna: 5, ginny: 2 },
      },
      {
        id: "d",
        text: "Encourage them to stand up for themselves and not let the situation win.",
        scores: { harry: 4, ron: 2, hermione: 2, draco: 2, neville: 3, luna: 1, ginny: 5 },
      },
    ],
  },
  {
    id: "C03",
    question:
      "You suddenly have a completely free day. How would you most likely spend it?",
    answers: [
      {
        id: "a",
        text: "Read, study, or learn something you have been curious about.",
        scores: { harry: 1, ron: 1, hermione: 5, draco: 2, neville: 3, luna: 4, ginny: 1 },
      },
      {
        id: "b",
        text: "Spend time with the people who matter most to you.",
        scores: { harry: 3, ron: 5, hermione: 2, draco: 1, neville: 4, luna: 2, ginny: 3 },
      },
      {
        id: "c",
        text: "Explore somewhere new or do something completely spontaneous.",
        scores: { harry: 4, ron: 3, hermione: 1, draco: 2, neville: 2, luna: 4, ginny: 5 },
      },
      {
        id: "d",
        text: "Work on something that brings you closer to a personal goal.",
        scores: { harry: 3, ron: 1, hermione: 4, draco: 5, neville: 2, luna: 1, ginny: 3 },
      },
    ],
  },
  {
    id: "C04",
    question:
      "You encounter a problem that has no obvious solution. What is your first instinct?",
    answers: [
      {
        id: "a",
        text: "Try something bold and see what happens — instinct can guide you.",
        scores: { harry: 5, ron: 3, hermione: 1, draco: 2, neville: 2, luna: 2, ginny: 4 },
      },
      {
        id: "b",
        text: "Gather as much information as possible before making a move.",
        scores: { harry: 2, ron: 1, hermione: 5, draco: 3, neville: 2, luna: 2, ginny: 2 },
      },
      {
        id: "c",
        text: "Consider a completely unconventional approach that others might overlook.",
        scores: { harry: 2, ron: 2, hermione: 3, draco: 2, neville: 1, luna: 5, ginny: 2 },
      },
      {
        id: "d",
        text: "Ask for help from someone you trust and work through it together.",
        scores: { harry: 3, ron: 5, hermione: 2, draco: 1, neville: 4, luna: 2, ginny: 2 },
      },
    ],
  },
  {
    id: "C05",
    question:
      "Someone strongly disagrees with you during an important conversation. How do you react?",
    answers: [
      {
        id: "a",
        text: "Defend your position calmly but firmly — you believe in it.",
        scores: { harry: 4, ron: 2, hermione: 4, draco: 3, neville: 2, luna: 1, ginny: 5 },
      },
      {
        id: "b",
        text: "Listen carefully and try to find common ground.",
        scores: { harry: 3, ron: 4, hermione: 3, draco: 1, neville: 4, luna: 3, ginny: 2 },
      },
      {
        id: "c",
        text: "Back up your argument with facts and evidence.",
        scores: { harry: 2, ron: 1, hermione: 5, draco: 3, neville: 1, luna: 2, ginny: 2 },
      },
      {
        id: "d",
        text: "Stay confident in your view but remain unbothered by what they think.",
        scores: { harry: 3, ron: 2, hermione: 2, draco: 5, neville: 1, luna: 4, ginny: 3 },
      },
    ],
  },
  {
    id: "C06",
    question:
      "You make a mistake that affects something important. What do you do next?",
    answers: [
      {
        id: "a",
        text: "Own it immediately, apologise, and do everything you can to make it right.",
        scores: { harry: 5, ron: 4, hermione: 3, draco: 1, neville: 5, luna: 2, ginny: 3 },
      },
      {
        id: "b",
        text: "Analyse exactly what went wrong so you never repeat it.",
        scores: { harry: 2, ron: 1, hermione: 5, draco: 3, neville: 2, luna: 2, ginny: 2 },
      },
      {
        id: "c",
        text: "Minimise the impact and find a way to redirect attention.",
        scores: { harry: 1, ron: 2, hermione: 1, draco: 5, neville: 1, luna: 1, ginny: 2 },
      },
      {
        id: "d",
        text: "Take a quiet moment to reflect, then move forward with more care.",
        scores: { harry: 2, ron: 3, hermione: 3, draco: 2, neville: 4, luna: 5, ginny: 3 },
      },
    ],
  },
  {
    id: "C07",
    question:
      "You are placed in a group where nobody wants to take responsibility. What do you do?",
    answers: [
      {
        id: "a",
        text: "Step up and take the lead — someone has to.",
        scores: { harry: 5, ron: 2, hermione: 3, draco: 4, neville: 2, luna: 1, ginny: 5 },
      },
      {
        id: "b",
        text: "Organise the group and make sure everyone is included and feels heard.",
        scores: { harry: 3, ron: 4, hermione: 3, draco: 1, neville: 5, luna: 2, ginny: 3 },
      },
      {
        id: "c",
        text: "Create a structured plan and present it clearly to get things moving.",
        scores: { harry: 2, ron: 2, hermione: 5, draco: 3, neville: 2, luna: 1, ginny: 2 },
      },
      {
        id: "d",
        text: "Do your part well and trust that the group will eventually find its way.",
        scores: { harry: 1, ron: 3, hermione: 2, draco: 2, neville: 3, luna: 5, ginny: 2 },
      },
    ],
  },
  {
    id: "C08",
    question:
      "You discover something unusual that nobody else seems interested in understanding. What do you do?",
    answers: [
      {
        id: "a",
        text: "Investigate it thoroughly — you need to understand it completely.",
        scores: { harry: 3, ron: 1, hermione: 5, draco: 2, neville: 3, luna: 4, ginny: 2 },
      },
      {
        id: "b",
        text: "Embrace it with genuine curiosity and enjoy exploring it on your own terms.",
        scores: { harry: 2, ron: 1, hermione: 3, draco: 1, neville: 2, luna: 5, ginny: 2 },
      },
      {
        id: "c",
        text: "Share it with someone close to you and explore it together.",
        scores: { harry: 3, ron: 5, hermione: 2, draco: 1, neville: 4, luna: 3, ginny: 3 },
      },
      {
        id: "d",
        text: "Assess whether it could give you a meaningful advantage.",
        scores: { harry: 2, ron: 1, hermione: 3, draco: 5, neville: 1, luna: 1, ginny: 3 },
      },
    ],
  },
  {
    id: "C09",
    question:
      "You are offered an opportunity that could lead to something great, but there is also a significant risk. What do you do?",
    answers: [
      {
        id: "a",
        text: "Take it without hesitation — the potential is worth the risk.",
        scores: { harry: 5, ron: 2, hermione: 1, draco: 3, neville: 2, luna: 3, ginny: 5 },
      },
      {
        id: "b",
        text: "Research every angle and calculate the risk carefully before deciding.",
        scores: { harry: 2, ron: 2, hermione: 5, draco: 4, neville: 2, luna: 2, ginny: 2 },
      },
      {
        id: "c",
        text: "Talk it through with someone you trust before making a decision.",
        scores: { harry: 3, ron: 5, hermione: 3, draco: 1, neville: 4, luna: 2, ginny: 3 },
      },
      {
        id: "d",
        text: "Follow your instincts — if it feels right, that is enough for you.",
        scores: { harry: 3, ron: 2, hermione: 1, draco: 2, neville: 2, luna: 5, ginny: 4 },
      },
    ],
  },
  {
    id: "C10",
    question:
      "If people remembered one quality about you, which would you most want it to be?",
    answers: [
      {
        id: "a",
        text: "That you were always there for the people who needed you.",
        scores: { harry: 4, ron: 5, hermione: 2, draco: 1, neville: 5, luna: 2, ginny: 3 },
      },
      {
        id: "b",
        text: "That you were exceptionally knowledgeable and always prepared.",
        scores: { harry: 1, ron: 1, hermione: 5, draco: 3, neville: 2, luna: 3, ginny: 1 },
      },
      {
        id: "c",
        text: "That you were brave enough to act when it truly mattered.",
        scores: { harry: 5, ron: 3, hermione: 2, draco: 2, neville: 4, luna: 1, ginny: 5 },
      },
      {
        id: "d",
        text: "That you saw the world differently and were never afraid to be yourself.",
        scores: { harry: 2, ron: 2, hermione: 2, draco: 3, neville: 3, luna: 5, ginny: 3 },
      },
    ],
  },
];

export default characterQuestions;
