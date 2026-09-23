import { LessonDef } from "../types";

export const lesson14: LessonDef = {
  id: "lesson-14",
  number: 14,
  title: "Polynomial Addition & Subtraction",
  status: "authored",
  newSkillId: "polynomial-add-sub",
  conceptMd: `
A **polynomial** is a sum of terms like \`3x² + 2x - 5\`. To add or subtract polynomials, combine like terms (same variable, same exponent).

**Subtracting** a polynomial means distributing a negative sign across every term of the polynomial being subtracted — a common source of sign errors, so be careful.
`,
  workedExamples: [
    {
      prompt: "Add: (3x² + 2x - 4) + (x² - 5x + 7)",
      solutionSteps: ["Group like terms: (3x²+x²) + (2x-5x) + (-4+7)", "4x² - 3x + 3"],
    },
    {
      prompt: "Subtract: (5x² - 3x + 2) - (2x² + x - 6)",
      solutionSteps: ["Distribute the minus: 5x² - 3x + 2 - 2x² - x + 6", "Combine: (5x²-2x²) + (-3x-x) + (2+6)", "3x² - 4x + 8"],
    },
  ],
  lessonPractice: [
    { id: "l14-lp-1", skillId: "polynomial-add-sub", context: "lessonPractice", prompt: "Add: (2x² + 3x) + (x² - x + 5)", answer: "3x² + 2x + 5", solutionMd: "3x² + 2x + 5." },
    { id: "l14-lp-2", skillId: "polynomial-add-sub", context: "lessonPractice", prompt: "Subtract: (4x² - x) - (x² + 3x - 2)", answer: "3x² - 4x + 2", solutionMd: "4x²-x-x²-3x+2 = 3x²-4x+2." },
    { id: "l14-lp-3", skillId: "polynomial-add-sub", context: "lessonPractice", prompt: "Add: (x² - 2x + 1) + (3x² + 2x - 1)", answer: "4x²", solutionMd: "4x² + 0x + 0 = 4x²." },
    { id: "l14-lp-4", skillId: "polynomial-add-sub", context: "lessonPractice", prompt: "Subtract: (6x² + 4) - (2x² - 3)", answer: "4x² + 7", solutionMd: "6x²+4-2x²+3 = 4x²+7." },
    { id: "l14-lp-5", skillId: "polynomial-add-sub", context: "lessonPractice", prompt: "Add: (5x - 3) + (-2x + 8)", answer: "3x + 5", solutionMd: "3x+5." },
  ],
  mixedPractice: [
    { id: "l14-mp-1", skillId: "polynomial-add-sub", context: "mixedPractice", prompt: "Add: (3x² - x) + (2x² + 4x - 6)", answer: "5x² + 3x - 6", solutionMd: "5x²+3x-6." },
    { id: "l14-mp-2", skillId: "polynomial-add-sub", context: "mixedPractice", prompt: "Subtract: (7x² + 2x) - (3x² - 5x + 1)", answer: "4x² + 7x - 1", solutionMd: "7x²+2x-3x²+5x-1 = 4x²+7x-1." },
    { id: "l14-mp-3", skillId: "polynomial-add-sub", context: "mixedPractice", prompt: "Add: (x² + 5) + (2x² - 3x)", answer: "3x² - 3x + 5", solutionMd: "3x²-3x+5." },
    { id: "l14-mp-4", skillId: "polynomial-add-sub", context: "mixedPractice", prompt: "Subtract: (4x² - 2x + 6) - (x² + x + 6)", answer: "3x² - 3x", solutionMd: "4x²-2x+6-x²-x-6 = 3x²-3x." },
  ],
};
