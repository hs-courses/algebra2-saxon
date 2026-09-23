import { LessonDef } from "../types";

export const lesson21: LessonDef = {
  id: "lesson-21",
  number: 21,
  title: "The Quadratic Formula",
  status: "authored",
  newSkillId: "quadratic-formula",
  conceptMd: `
For \`ax² + bx + c = 0\` (a ≠ 0), the solutions are:

\`x = (-b ± √(b² - 4ac)) / (2a)\`

Use this when factoring is hard or impossible. The expression under the root, \`b² - 4ac\`, is the **discriminant**: positive → two real solutions, zero → one real solution, negative → no real solutions.
`,
  workedExamples: [
    {
      prompt: "Solve: x² + 5x + 6 = 0 using the quadratic formula",
      solutionSteps: [
        "a=1, b=5, c=6",
        "x = (-5 ± √(25-24)) / 2 = (-5 ± 1)/2",
        "x = (-5+1)/2 = -2 or x = (-5-1)/2 = -3",
      ],
    },
    {
      prompt: "Solve: 2x² - 3x - 2 = 0",
      solutionSteps: [
        "a=2, b=-3, c=-2",
        "x = (3 ± √(9+16)) / 4 = (3 ± 5)/4",
        "x = 8/4 = 2 or x = -2/4 = -0.5",
      ],
    },
  ],
  lessonPractice: [
    { id: "l21-lp-1", skillId: "quadratic-formula", context: "lessonPractice", prompt: "Solve: x² - 3x - 4 = 0 using the quadratic formula", answer: "x = 4 or x = -1", solutionMd: "x=(3±√25)/2=(3±5)/2." },
    { id: "l21-lp-2", skillId: "quadratic-formula", context: "lessonPractice", prompt: "Find the discriminant of x² + 2x + 5 = 0", answer: "-16", solutionMd: "b²-4ac = 4-20 = -16." },
    { id: "l21-lp-3", skillId: "quadratic-formula", context: "lessonPractice", prompt: "Solve: x² - 6x + 9 = 0", answer: "x = 3", solutionMd: "discriminant=0; x=6/2=3." },
    { id: "l21-lp-4", skillId: "quadratic-formula", context: "lessonPractice", prompt: "Solve: x² + x - 6 = 0 using the quadratic formula", answer: "x = 2 or x = -3", solutionMd: "x=(-1±5)/2." },
    { id: "l21-lp-5", skillId: "quadratic-formula", context: "lessonPractice", prompt: "Find the discriminant of 2x² + 3x - 1 = 0", answer: "17", solutionMd: "9+8=17." },
  ],
  mixedPractice: [
    { id: "l21-mp-1", skillId: "quadratic-formula", context: "mixedPractice", prompt: "Solve: x² - 5x + 6 = 0 using the quadratic formula", answer: "x = 3 or x = 2", solutionMd: "x=(5±1)/2." },
    { id: "l21-mp-2", skillId: "quadratic-formula", context: "mixedPractice", prompt: "Find the discriminant of x² - 4x + 4 = 0", answer: "0", solutionMd: "16-16=0." },
    { id: "l21-mp-3", skillId: "quadratic-formula", context: "mixedPractice", prompt: "Solve: x² + 4x - 5 = 0 using the quadratic formula", answer: "x = 1 or x = -5", solutionMd: "x=(-4±6)/2." },
    { id: "l21-mp-4", skillId: "quadratic-formula", context: "mixedPractice", prompt: "Find the discriminant of x² + x + 1 = 0", answer: "-3", solutionMd: "1-4=-3." },
  ],
};
