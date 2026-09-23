import { LessonDef } from "../types";

export const lesson06: LessonDef = {
  id: "lesson-06",
  number: 6,
  title: "Scientific Notation",
  status: "authored",
  newSkillId: "scientific-notation",
  conceptMd: `
A number in **scientific notation** is written \`a × 10^n\` where \`1 ≤ |a| < 10\` and \`n\` is an integer.

To convert standard → scientific: move the decimal point so one nonzero digit remains before it; count places moved (positive exponent if number ≥ 1, negative if number < 1).

**Multiplying**: multiply the \`a\` parts, add exponents. **Dividing**: divide the \`a\` parts, subtract exponents. Renormalize if the result's \`a\` is not between 1 and 10.
`,
  workedExamples: [
    {
      prompt: "Write 45,000 in scientific notation.",
      solutionSteps: ["Move decimal 4 places left: 4.5", "45,000 = 4.5 × 10⁴"],
    },
    {
      prompt: "Write 0.00032 in scientific notation.",
      solutionSteps: ["Move decimal 4 places right: 3.2", "0.00032 = 3.2 × 10⁻⁴"],
    },
    {
      prompt: "Multiply: (2 × 10³)(3 × 10⁵)",
      solutionSteps: ["Multiply a-parts: 2×3=6", "Add exponents: 3+5=8", "6 × 10⁸"],
    },
  ],
  lessonPractice: [
    { id: "l6-lp-1", skillId: "scientific-notation", context: "lessonPractice", prompt: "Write 6,200 in scientific notation.", answer: "6.2 × 10³", solutionMd: "Move decimal 3 places." },
    { id: "l6-lp-2", skillId: "scientific-notation", context: "lessonPractice", prompt: "Write 0.0091 in scientific notation.", answer: "9.1 × 10⁻³", solutionMd: "Move decimal 3 places right." },
    { id: "l6-lp-3", skillId: "scientific-notation", context: "lessonPractice", prompt: "Multiply: (4 × 10²)(2 × 10³)", answer: "8 × 10⁵", solutionMd: "4×2=8; exponents 2+3=5." },
    { id: "l6-lp-4", skillId: "scientific-notation", context: "lessonPractice", prompt: "Divide: (8 × 10⁶) ÷ (2 × 10²)", answer: "4 × 10⁴", solutionMd: "8÷2=4; exponents 6-2=4." },
    { id: "l6-lp-5", skillId: "scientific-notation", context: "lessonPractice", prompt: "Write 3.4 × 10² in standard form.", answer: "340", solutionMd: "Move decimal 2 places right." },
  ],
  mixedPractice: [
    { id: "l6-mp-1", skillId: "scientific-notation", context: "mixedPractice", prompt: "Write 51,000 in scientific notation.", answer: "5.1 × 10⁴", solutionMd: "Move decimal 4 places." },
    { id: "l6-mp-2", skillId: "scientific-notation", context: "mixedPractice", prompt: "Multiply: (3 × 10⁴)(3 × 10²)", answer: "9 × 10⁶", solutionMd: "3×3=9; 4+2=6." },
    { id: "l6-mp-3", skillId: "scientific-notation", context: "mixedPractice", prompt: "Write 0.0007 in scientific notation.", answer: "7 × 10⁻⁴", solutionMd: "Move decimal 4 places right." },
    { id: "l6-mp-4", skillId: "scientific-notation", context: "mixedPractice", prompt: "Divide: (9 × 10⁵) ÷ (3 × 10²)", answer: "3 × 10³", solutionMd: "9÷3=3; 5-2=3." },
    { id: "l6-mp-5", skillId: "angle-relationships", context: "mixedPractice", prompt: "Supplementary angles: one is 128°. Find the other.", answer: "52°", solutionMd: "180-128=52." },
    { id: "l6-mp-6", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 8 yd to ft.", answer: "24 ft", solutionMd: "8×3=24." },
    { id: "l6-mp-7", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 5(x - 2) - 3x", answer: "2x - 10", solutionMd: "5x-10-3x = 2x-10." },
    { id: "l6-mp-8", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 6 + 3² - 4", answer: "11", solutionMd: "6+9-4=11." },
    { id: "l6-mp-9", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -18 ÷ 6 + 2", answer: "-1", solutionMd: "-3+2=-1." },
  ],
};
