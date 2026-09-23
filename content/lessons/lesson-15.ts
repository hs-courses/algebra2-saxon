import { LessonDef } from "../types";

export const lesson15: LessonDef = {
  id: "lesson-15",
  number: 15,
  title: "Polynomial Multiplication",
  status: "authored",
  newSkillId: "polynomial-multiply",
  conceptMd: `
To multiply polynomials, use the distributive property so every term in the first factor multiplies every term in the second.

For two binomials, **FOIL** (First, Outer, Inner, Last) is a shortcut: \`(a+b)(c+d) = ac + ad + bc + bd\`.

For larger polynomials, distribute term by term and combine like terms.
`,
  workedExamples: [
    {
      prompt: "Multiply: (x + 3)(x + 5)",
      solutionSteps: ["FOIL: First x·x=x²; Outer x·5=5x; Inner 3·x=3x; Last 3·5=15", "x² + 5x + 3x + 15", "x² + 8x + 15"],
    },
    {
      prompt: "Multiply: (2x - 1)(x + 4)",
      solutionSteps: ["First 2x·x=2x²; Outer 2x·4=8x; Inner -1·x=-x; Last -1·4=-4", "2x² + 8x - x - 4", "2x² + 7x - 4"],
    },
  ],
  lessonPractice: [
    { id: "l15-lp-1", skillId: "polynomial-multiply", context: "lessonPractice", prompt: "Multiply: (x + 2)(x + 6)", answer: "x² + 8x + 12", solutionMd: "x²+6x+2x+12 = x²+8x+12." },
    { id: "l15-lp-2", skillId: "polynomial-multiply", context: "lessonPractice", prompt: "Multiply: (x - 3)(x + 5)", answer: "x² + 2x - 15", solutionMd: "x²+5x-3x-15 = x²+2x-15." },
    { id: "l15-lp-3", skillId: "polynomial-multiply", context: "lessonPractice", prompt: "Multiply: (2x + 1)(x - 4)", answer: "2x² - 7x - 4", solutionMd: "2x²-8x+x-4 = 2x²-7x-4." },
    { id: "l15-lp-4", skillId: "polynomial-multiply", context: "lessonPractice", prompt: "Multiply: (x - 2)(x - 7)", answer: "x² - 9x + 14", solutionMd: "x²-7x-2x+14 = x²-9x+14." },
    { id: "l15-lp-5", skillId: "polynomial-multiply", context: "lessonPractice", prompt: "Multiply: (3x + 2)(x + 1)", answer: "3x² + 5x + 2", solutionMd: "3x²+3x+2x+2 = 3x²+5x+2." },
  ],
  mixedPractice: [
    { id: "l15-mp-1", skillId: "polynomial-multiply", context: "mixedPractice", prompt: "Multiply: (x + 4)(x + 4)", answer: "x² + 8x + 16", solutionMd: "x²+4x+4x+16 = x²+8x+16." },
    { id: "l15-mp-2", skillId: "polynomial-multiply", context: "mixedPractice", prompt: "Multiply: (x - 5)(x + 2)", answer: "x² - 3x - 10", solutionMd: "x²+2x-5x-10 = x²-3x-10." },
    { id: "l15-mp-3", skillId: "polynomial-multiply", context: "mixedPractice", prompt: "Multiply: (2x - 3)(2x + 3)", answer: "4x² - 9", solutionMd: "4x²+6x-6x-9 = 4x²-9." },
    { id: "l15-mp-4", skillId: "polynomial-multiply", context: "mixedPractice", prompt: "Multiply: (x + 1)(x - 1)", answer: "x² - 1", solutionMd: "x²-x+x-1 = x²-1." },
  ],
};
