import { LessonDef } from "../types";

export const lesson25: LessonDef = {
  id: "lesson-25",
  number: 25,
  title: "Rational Expressions: Simplifying",
  status: "authored",
  newSkillId: "rational-simplify",
  conceptMd: `
A **rational expression** is a fraction with polynomials in the numerator and/or denominator. To simplify:
1. Factor the numerator and denominator completely.
2. Cancel common factors (not terms — only fully factored common factors cancel).

Note any values that make the denominator zero — these are **excluded** from the domain.
`,
  workedExamples: [
    {
      prompt: "Simplify: (x² - 4) / (x + 2)",
      solutionSteps: ["Factor numerator: (x+2)(x-2)", "(x+2)(x-2) / (x+2)", "Cancel (x+2): x - 2 (x ≠ -2)"],
    },
    {
      prompt: "Simplify: (x² + 5x + 6) / (x² - 4)",
      solutionSteps: ["Factor: (x+2)(x+3) / (x+2)(x-2)", "Cancel (x+2): (x+3)/(x-2) (x ≠ -2, 2)"],
    },
  ],
  lessonPractice: [
    { id: "l25-lp-1", skillId: "rational-simplify", context: "lessonPractice", prompt: "Simplify: (x² - 9) / (x + 3)", answer: "x - 3", solutionMd: "(x+3)(x-3)/(x+3) = x-3." },
    { id: "l25-lp-2", skillId: "rational-simplify", context: "lessonPractice", prompt: "Simplify: (x² + 3x) / x", answer: "x + 3", solutionMd: "x(x+3)/x = x+3." },
    { id: "l25-lp-3", skillId: "rational-simplify", context: "lessonPractice", prompt: "Simplify: (x² - x - 6) / (x - 3)", answer: "x + 2", solutionMd: "(x-3)(x+2)/(x-3) = x+2." },
    { id: "l25-lp-4", skillId: "rational-simplify", context: "lessonPractice", prompt: "Simplify: (x² - 1) / (x - 1)", answer: "x + 1", solutionMd: "(x+1)(x-1)/(x-1) = x+1." },
    { id: "l25-lp-5", skillId: "rational-simplify", context: "lessonPractice", prompt: "Simplify: (2x² + 4x) / (2x)", answer: "x + 2", solutionMd: "2x(x+2)/2x = x+2." },
  ],
  mixedPractice: [
    { id: "l25-mp-1", skillId: "rational-simplify", context: "mixedPractice", prompt: "Simplify: (x² - 16) / (x + 4)", answer: "x - 4", solutionMd: "(x+4)(x-4)/(x+4) = x-4." },
    { id: "l25-mp-2", skillId: "rational-simplify", context: "mixedPractice", prompt: "Simplify: (x² + 2x) / x", answer: "x + 2", solutionMd: "x(x+2)/x = x+2." },
    { id: "l25-mp-3", skillId: "rational-simplify", context: "mixedPractice", prompt: "Simplify: (x² - 5x + 6) / (x - 2)", answer: "x - 3", solutionMd: "(x-2)(x-3)/(x-2) = x-3." },
    { id: "l25-mp-4", skillId: "rational-simplify", context: "mixedPractice", prompt: "Simplify: (x² - 25) / (x - 5)", answer: "x + 5", solutionMd: "(x+5)(x-5)/(x-5) = x+5." },
  ],
};
