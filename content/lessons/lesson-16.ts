import { LessonDef } from "../types";

export const lesson16: LessonDef = {
  id: "lesson-16",
  number: 16,
  title: "Factoring: Greatest Common Factor",
  status: "authored",
  newSkillId: "factoring-gcf",
  conceptMd: `
Factoring is the reverse of distributing. To factor out the **greatest common factor (GCF)**:
1. Find the largest number and highest power of each variable common to every term.
2. Divide each term by the GCF and write the result in parentheses.
3. Check by distributing back.
`,
  workedExamples: [
    { prompt: "Factor: 6x² + 9x", solutionSteps: ["GCF of 6 and 9 is 3; GCF of x² and x is x", "GCF = 3x", "6x²+9x = 3x(2x + 3)"] },
    { prompt: "Factor: 4x³ - 8x²", solutionSteps: ["GCF of 4 and 8 is 4; GCF of x³ and x² is x²", "GCF = 4x²", "4x³-8x² = 4x²(x - 2)"] },
  ],
  lessonPractice: [
    { id: "l16-lp-1", skillId: "factoring-gcf", context: "lessonPractice", prompt: "Factor: 5x² + 10x", answer: "5x(x + 2)", solutionMd: "GCF=5x; 5x²+10x = 5x(x+2)." },
    { id: "l16-lp-2", skillId: "factoring-gcf", context: "lessonPractice", prompt: "Factor: 12x² - 8x", answer: "4x(3x - 2)", solutionMd: "GCF=4x; 12x²-8x = 4x(3x-2)." },
    { id: "l16-lp-3", skillId: "factoring-gcf", context: "lessonPractice", prompt: "Factor: 9x³ + 6x²", answer: "3x²(3x + 2)", solutionMd: "GCF=3x²; 9x³+6x² = 3x²(3x+2)." },
    { id: "l16-lp-4", skillId: "factoring-gcf", context: "lessonPractice", prompt: "Factor: 14x² - 21x", answer: "7x(2x - 3)", solutionMd: "GCF=7x; result 7x(2x-3)." },
    { id: "l16-lp-5", skillId: "factoring-gcf", context: "lessonPractice", prompt: "Factor: 8x + 12", answer: "4(2x + 3)", solutionMd: "GCF=4; 4(2x+3)." },
  ],
  mixedPractice: [
    { id: "l16-mp-1", skillId: "factoring-gcf", context: "mixedPractice", prompt: "Factor: 10x² + 15x", answer: "5x(2x + 3)", solutionMd: "GCF=5x; 5x(2x+3)." },
    { id: "l16-mp-2", skillId: "factoring-gcf", context: "mixedPractice", prompt: "Factor: 6x³ - 9x²", answer: "3x²(2x - 3)", solutionMd: "GCF=3x²; 3x²(2x-3)." },
    { id: "l16-mp-3", skillId: "factoring-gcf", context: "mixedPractice", prompt: "Factor: 18x - 24", answer: "6(3x - 4)", solutionMd: "GCF=6; 6(3x-4)." },
    { id: "l16-mp-4", skillId: "factoring-gcf", context: "mixedPractice", prompt: "Factor: 7x² + 14x", answer: "7x(x + 2)", solutionMd: "GCF=7x; 7x(x+2)." },
  ],
};
