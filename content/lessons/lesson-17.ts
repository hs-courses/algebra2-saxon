import { LessonDef } from "../types";

export const lesson17: LessonDef = {
  id: "lesson-17",
  number: 17,
  title: "Factoring Trinomials",
  status: "authored",
  newSkillId: "factoring-trinomials",
  conceptMd: `
To factor \`x² + bx + c\` (leading coefficient 1): find two numbers that **multiply to c** and **add to b**. Write as \`(x + m)(x + n)\`.

Check signs: both positive if b and c are positive; both negative if c is positive but b is negative; opposite signs if c is negative.
`,
  workedExamples: [
    { prompt: "Factor: x² + 7x + 12", solutionSteps: ["Need two numbers that multiply to 12, add to 7: 3 and 4", "(x + 3)(x + 4)"] },
    { prompt: "Factor: x² - x - 6", solutionSteps: ["Need two numbers that multiply to -6, add to -1: -3 and 2", "(x - 3)(x + 2)"] },
  ],
  lessonPractice: [
    { id: "l17-lp-1", skillId: "factoring-trinomials", context: "lessonPractice", prompt: "Factor: x² + 5x + 6", answer: "(x + 2)(x + 3)", solutionMd: "2 and 3 multiply to 6, add to 5." },
    { id: "l17-lp-2", skillId: "factoring-trinomials", context: "lessonPractice", prompt: "Factor: x² - 7x + 10", answer: "(x - 2)(x - 5)", solutionMd: "-2 and -5 multiply to 10, add to -7." },
    { id: "l17-lp-3", skillId: "factoring-trinomials", context: "lessonPractice", prompt: "Factor: x² + 2x - 15", answer: "(x + 5)(x - 3)", solutionMd: "5 and -3 multiply to -15, add to 2." },
    { id: "l17-lp-4", skillId: "factoring-trinomials", context: "lessonPractice", prompt: "Factor: x² - 3x - 10", answer: "(x - 5)(x + 2)", solutionMd: "-5 and 2 multiply to -10, add to -3." },
    { id: "l17-lp-5", skillId: "factoring-trinomials", context: "lessonPractice", prompt: "Factor: x² + 9x + 20", answer: "(x + 4)(x + 5)", solutionMd: "4 and 5 multiply to 20, add to 9." },
  ],
  mixedPractice: [
    { id: "l17-mp-1", skillId: "factoring-trinomials", context: "mixedPractice", prompt: "Factor: x² + 6x + 8", answer: "(x + 2)(x + 4)", solutionMd: "2 and 4 multiply to 8, add to 6." },
    { id: "l17-mp-2", skillId: "factoring-trinomials", context: "mixedPractice", prompt: "Factor: x² - 8x + 15", answer: "(x - 3)(x - 5)", solutionMd: "-3 and -5 multiply to 15, add to -8." },
    { id: "l17-mp-3", skillId: "factoring-trinomials", context: "mixedPractice", prompt: "Factor: x² + x - 12", answer: "(x + 4)(x - 3)", solutionMd: "4 and -3 multiply to -12, add to 1." },
    { id: "l17-mp-4", skillId: "factoring-trinomials", context: "mixedPractice", prompt: "Factor: x² - 4x - 21", answer: "(x - 7)(x + 3)", solutionMd: "-7 and 3 multiply to -21, add to -4." },
  ],
};
