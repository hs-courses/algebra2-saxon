import { LessonDef } from "../types";

export const lesson26: LessonDef = {
  id: "lesson-26",
  number: 26,
  title: "Rational Expressions: Multiply & Divide",
  status: "authored",
  newSkillId: "rational-muldiv",
  conceptMd: `
**Multiplying rational expressions**: factor everything, cancel common factors across numerators and denominators, then multiply what remains.

**Dividing**: multiply by the reciprocal of the second expression, then proceed as multiplication.
`,
  workedExamples: [
    {
      prompt: "Multiply: (x/3) · (6/x²)",
      solutionSteps: ["Multiply numerators and denominators: 6x / 3x²", "Cancel common factor 3x: 2/x"],
    },
    {
      prompt: "Divide: (x+2)/(x-1) ÷ (x+2)/(x+3)",
      solutionSteps: ["Multiply by reciprocal: (x+2)/(x-1) · (x+3)/(x+2)", "Cancel (x+2): (x+3)/(x-1)"],
    },
  ],
  lessonPractice: [
    { id: "l26-lp-1", skillId: "rational-muldiv", context: "lessonPractice", prompt: "Multiply: (2/x) · (x²/4)", answer: "x/2", solutionMd: "2x²/4x = x/2." },
    { id: "l26-lp-2", skillId: "rational-muldiv", context: "lessonPractice", prompt: "Divide: (x/2) ÷ (x²/6)", answer: "3/x", solutionMd: "(x/2)·(6/x²) = 6x/2x² = 3/x." },
    { id: "l26-lp-3", skillId: "rational-muldiv", context: "lessonPractice", prompt: "Multiply: (3/x) · (x/9)", answer: "1/3", solutionMd: "3x/9x = 1/3." },
    { id: "l26-lp-4", skillId: "rational-muldiv", context: "lessonPractice", prompt: "Divide: (4/x) ÷ (2/x)", answer: "2", solutionMd: "(4/x)·(x/2) = 4x/2x = 2." },
    { id: "l26-lp-5", skillId: "rational-muldiv", context: "lessonPractice", prompt: "Multiply: (x/5) · (10/x)", answer: "2", solutionMd: "10x/5x = 2." },
  ],
  mixedPractice: [
    { id: "l26-mp-1", skillId: "rational-muldiv", context: "mixedPractice", prompt: "Multiply: (5/x) · (x²/10)", answer: "x/2", solutionMd: "5x²/10x = x/2." },
    { id: "l26-mp-2", skillId: "rational-muldiv", context: "mixedPractice", prompt: "Divide: (x/3) ÷ (x/9)", answer: "3", solutionMd: "(x/3)·(9/x) = 9x/3x = 3." },
    { id: "l26-mp-3", skillId: "rational-muldiv", context: "mixedPractice", prompt: "Multiply: (6/x) · (x/2)", answer: "3", solutionMd: "6x/2x = 3." },
    { id: "l26-mp-4", skillId: "rational-muldiv", context: "mixedPractice", prompt: "Divide: (x²/4) ÷ (x/8)", answer: "2x", solutionMd: "(x²/4)·(8/x) = 8x²/4x = 2x." },
  ],
};
