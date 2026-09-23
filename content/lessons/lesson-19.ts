import { LessonDef } from "../types";

export const lesson19: LessonDef = {
  id: "lesson-19",
  number: 19,
  title: "Solving Quadratics by Factoring",
  status: "authored",
  newSkillId: "quadratics-factoring",
  conceptMd: `
**Zero product property**: if \`ab = 0\`, then \`a = 0\` or \`b = 0\`. To solve a quadratic equation by factoring:
1. Set the equation equal to 0 (move all terms to one side).
2. Factor the quadratic expression.
3. Set each factor equal to 0 and solve.
`,
  workedExamples: [
    {
      prompt: "Solve: x² + 5x + 6 = 0",
      solutionSteps: ["Factor: (x+2)(x+3)=0", "Set each factor to 0: x+2=0 or x+3=0", "x = -2 or x = -3"],
    },
    {
      prompt: "Solve: x² - 9 = 0",
      solutionSteps: ["Factor: (x+3)(x-3)=0", "x = -3 or x = 3"],
    },
  ],
  lessonPractice: [
    { id: "l19-lp-1", skillId: "quadratics-factoring", context: "lessonPractice", prompt: "Solve: x² + 7x + 10 = 0", answer: "x = -2 or x = -5", solutionMd: "(x+2)(x+5)=0." },
    { id: "l19-lp-2", skillId: "quadratics-factoring", context: "lessonPractice", prompt: "Solve: x² - 4 = 0", answer: "x = 2 or x = -2", solutionMd: "(x-2)(x+2)=0." },
    { id: "l19-lp-3", skillId: "quadratics-factoring", context: "lessonPractice", prompt: "Solve: x² - x - 6 = 0", answer: "x = 3 or x = -2", solutionMd: "(x-3)(x+2)=0." },
    { id: "l19-lp-4", skillId: "quadratics-factoring", context: "lessonPractice", prompt: "Solve: x² + 8x + 16 = 0", answer: "x = -4", solutionMd: "(x+4)(x+4)=0, double root." },
    { id: "l19-lp-5", skillId: "quadratics-factoring", context: "lessonPractice", prompt: "Solve: x² - 5x = 0", answer: "x = 0 or x = 5", solutionMd: "x(x-5)=0." },
  ],
  mixedPractice: [
    { id: "l19-mp-1", skillId: "quadratics-factoring", context: "mixedPractice", prompt: "Solve: x² + 3x - 10 = 0", answer: "x = 2 or x = -5", solutionMd: "(x-2)(x+5)=0." },
    { id: "l19-mp-2", skillId: "quadratics-factoring", context: "mixedPractice", prompt: "Solve: x² - 16 = 0", answer: "x = 4 or x = -4", solutionMd: "(x-4)(x+4)=0." },
    { id: "l19-mp-3", skillId: "quadratics-factoring", context: "mixedPractice", prompt: "Solve: x² - 6x + 9 = 0", answer: "x = 3", solutionMd: "(x-3)(x-3)=0, double root." },
    { id: "l19-mp-4", skillId: "quadratics-factoring", context: "mixedPractice", prompt: "Solve: x² + 6x = 0", answer: "x = 0 or x = -6", solutionMd: "x(x+6)=0." },
  ],
};
