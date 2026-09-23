import { LessonDef } from "../types";

export const lesson18: LessonDef = {
  id: "lesson-18",
  number: 18,
  title: "Difference of Squares",
  status: "authored",
  newSkillId: "difference-of-squares",
  conceptMd: `
Special pattern: \`a² - b² = (a + b)(a - b)\`. Recognize it when you have two perfect squares separated by subtraction, with no middle term.

Check both terms are perfect squares (numbers like 4,9,16,25... or variables with even exponents), then apply the pattern directly.
`,
  workedExamples: [
    { prompt: "Factor: x² - 25", solutionSteps: ["x² and 25 are both perfect squares (x and 5)", "(x + 5)(x - 5)"] },
    { prompt: "Factor: 4x² - 9", solutionSteps: ["4x² = (2x)², 9 = 3²", "(2x + 3)(2x - 3)"] },
  ],
  lessonPractice: [
    { id: "l18-lp-1", skillId: "difference-of-squares", context: "lessonPractice", prompt: "Factor: x² - 16", answer: "(x + 4)(x - 4)", solutionMd: "x and 4 are the square roots." },
    { id: "l18-lp-2", skillId: "difference-of-squares", context: "lessonPractice", prompt: "Factor: x² - 49", answer: "(x + 7)(x - 7)", solutionMd: "x and 7." },
    { id: "l18-lp-3", skillId: "difference-of-squares", context: "lessonPractice", prompt: "Factor: 9x² - 1", answer: "(3x + 1)(3x - 1)", solutionMd: "3x and 1." },
    { id: "l18-lp-4", skillId: "difference-of-squares", context: "lessonPractice", prompt: "Factor: 25x² - 36", answer: "(5x + 6)(5x - 6)", solutionMd: "5x and 6." },
    { id: "l18-lp-5", skillId: "difference-of-squares", context: "lessonPractice", prompt: "Factor: x² - 100", answer: "(x + 10)(x - 10)", solutionMd: "x and 10." },
  ],
  mixedPractice: [
    { id: "l18-mp-1", skillId: "difference-of-squares", context: "mixedPractice", prompt: "Factor: x² - 4", answer: "(x + 2)(x - 2)", solutionMd: "x and 2." },
    { id: "l18-mp-2", skillId: "difference-of-squares", context: "mixedPractice", prompt: "Factor: 16x² - 25", answer: "(4x + 5)(4x - 5)", solutionMd: "4x and 5." },
    { id: "l18-mp-3", skillId: "difference-of-squares", context: "mixedPractice", prompt: "Factor: x² - 81", answer: "(x + 9)(x - 9)", solutionMd: "x and 9." },
    { id: "l18-mp-4", skillId: "difference-of-squares", context: "mixedPractice", prompt: "Factor: 4x² - 49", answer: "(2x + 7)(2x - 7)", solutionMd: "2x and 7." },
  ],
};
