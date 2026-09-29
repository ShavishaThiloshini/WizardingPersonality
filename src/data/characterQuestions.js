const characterQuestions = [
  {
    id: "C01",
    question: "You walk into a room and realize everyone has suddenly gone silent. What do you assume?",
    answers: [
      {
        id: "a",
        text: "Someone was probably talking about me.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "Something weird is definitely happening.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 10, ginny: 0 }
      },
      {
        id: "c",
        text: "I'll just ask what's going on.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      },
      {
        id: "d",
        text: "I'll pretend I didn't notice and observe everyone.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 10, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C02",
    question: "Your friend wants to do something completely ridiculous.",
    answers: [
      {
        id: "a",
        text: "\"This is a terrible idea... let's do it.\"",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "\"Absolutely not. Here's why.\"",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "\"Wait, that actually sounds interesting.\"",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 10, ginny: 0 }
      },
      {
        id: "d",
        text: "\"Fine, but I'll handle the risky part.\"",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C03",
    question: "You unexpectedly become really good at something.",
    answers: [
      {
        id: "a",
        text: "I act like it's no big deal.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 10, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "I immediately want to get even better.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "I'm surprised that I managed it.",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "I'm quietly proud of myself.",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C04",
    question: "Someone you dislike suddenly needs your help.",
    answers: [
      {
        id: "a",
        text: "I'll help. I'm not leaving someone in trouble.",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "I'll help, but I'm definitely going to complain about it.",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "I'll help if there's a sensible way to do it.",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "I'll help, but I'm not becoming their best friend.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      }
    ]
  },
  {
    id: "C05",
    question: "You're sitting alone at Hogwarts when someone you've never spoken to sits beside you.",
    answers: [
      {
        id: "a",
        text: "Start a conversation.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      },
      {
        id: "b",
        text: "Wonder why they chose to sit there.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "Continue what I'm doing and see if they speak first.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 10, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "Say something completely random just to see their reaction.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 10, ginny: 0 }
      }
    ]
  },
  {
    id: "C06",
    question: "You discover that your best friend has been keeping a major secret from you.",
    answers: [
      {
        id: "a",
        text: "I'm hurt, but I want to know why.",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "I'm immediately suspicious.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "I'll give them time to explain.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 10, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "I'll probably confront them directly.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      }
    ]
  },
  {
    id: "C07",
    question: "You're offered a chance to join a competition, but there's a good chance you'll embarrass yourself.",
    answers: [
      {
        id: "a",
        text: "I'm doing it anyway.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      },
      {
        id: "b",
        text: "I'll prepare until I'm confident.",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "I'll probably need someone to convince me.",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "I'll do it just to prove something to myself.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C08",
    question: "Which kind of person would you naturally become friends with?",
    answers: [
      {
        id: "a",
        text: "Someone funny who makes boring days better.",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "Someone curious who sees the world differently.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 10, ginny: 0 }
      },
      {
        id: "c",
        text: "Someone determined who pushes me to improve.",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "Someone quiet who needs a friend.",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 10, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C09",
    question: "Someone tells you, 'You're not capable of doing that.' What's your immediate thought?",
    answers: [
      {
        id: "a",
        text: "\"We'll see.\"",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "\"Maybe they're right...\"",
        scores: { harry: 0, ron: 10, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "c",
        text: "\"Let me prove them wrong.\"",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 10, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "\"Why do they think that?\"",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      }
    ]
  },
  {
    id: "C10",
    question: "Years after leaving Hogwarts, what would you most want your old friends to say about you?",
    answers: [
      {
        id: "a",
        text: "\"They always had our backs.\"",
        scores: { harry: 10, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "b",
        text: "\"They made everything more fun.\"",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 0, ginny: 10 }
      },
      {
        id: "c",
        text: "\"They never stopped learning.\"",
        scores: { harry: 0, ron: 0, hermione: 10, draco: 0, neville: 0, luna: 0, ginny: 0 }
      },
      {
        id: "d",
        text: "\"They became someone completely their own.\"",
        scores: { harry: 0, ron: 0, hermione: 0, draco: 0, neville: 0, luna: 10, ginny: 0 }
      }
    ]
  }
];

export default characterQuestions;
