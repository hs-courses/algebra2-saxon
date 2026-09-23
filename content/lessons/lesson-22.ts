import { LessonDef } from "../types";

export const lesson22: LessonDef = {
  id: "lesson-22",
  number: 22,
  title: "Complex Numbers",
  status: "authored",
  newSkillId: "complex-numbers",
  conceptMd: `
When the discriminant is negative, a quadratic has no real solutions but has **complex** solutions. Define \`i = √-1\`, so \`i² = -1\`.

A complex number has the form \`a + bi\`. Add/subtract by combining real and imaginary parts separately. Multiply using distribution, remembering \`i² = -1\`.
`,
  workedExamples: [
    { prompt: "Simplify: √-9", solutionSteps: ["√-9 = √9 · √-1 = 3i"] },
    { prompt: "Add: (3 + 2i) + (1 - 5i)", solutionSteps: ["Combine real parts: 3+1=4", "Combine imaginary parts: 2i-5i=-3i", "4 - 3i"] },
    { prompt: "Multiply: (2 + i)(3 - i)", solutionSteps: ["FOIL: 6 - 2i + 3i - i²", "6 + i - (-1)", "6 + i + 1 = 7 + i"] },
  ],
  lessonPractice: [
    { id: "l22-lp-1", skillId: "complex-numbers", context: "lessonPractice", prompt: "Simplify: √-16", answer: "4i", solutionMd: "√16·√-1 = 4i." },
    { id: "l22-lp-2", skillId: "complex-numbers", context: "lessonPractice", prompt: "Add: (5 + 3i) + (2 - i)", answer: "7 + 2i", solutionMd: "5+2=7; 3i-i=2i." },
    { id: "l22-lp-3", skillId: "complex-numbers", context: "lessonPractice", prompt: "Subtract: (4 - 2i) - (1 + 3i)", answer: "3 - 5i", solutionMd: "4-1=3; -2i-3i=-5i." },
    { id: "l22-lp-4", skillId: "complex-numbers", context: "lessonPractice", prompt: "Multiply: (1 + i)(1 - i)", answer: "2", solutionMd: "1-i+i-i² = 1-(-1) = 2." },
    { id: "l22-lp-5", skillId: "complex-numbers", context: "lessonPractice", prompt: "Simplify: i²", answer: "-1", solutionMd: "By definition, i²=-1." },
  ],
  mixedPractice: [
    { id: "l22-mp-1", skillId: "complex-numbers", context: "mixedPractice", prompt: "Simplify: √-25", answer: "5i", solutionMd: "√25·√-1 = 5i." },
    { id: "l22-mp-2", skillId: "complex-numbers", context: "mixedPractice", prompt: "Add: (2 + i) + (3 + 4i)", answer: "5 + 5i", solutionMd: "2+3=5; i+4i=5i." },
    { id: "l22-mp-3", skillId: "complex-numbers", context: "mixedPractice", prompt: "Multiply: (2 + i)(1 + i)", answer: "1 + 3i", solutionMd: "2+2i+i+i² = 2+3i-1 = 1+3i." },
    { id: "l22-mp-4", skillId: "complex-numbers", context: "mixedPractice", prompt: "Subtract: (6 + 2i) - (4 + 5i)", answer: "2 - 3i", solutionMd: "6-4=2; 2i-5i=-3i." },
  ],
};
