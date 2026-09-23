import { LessonDef } from "../types";

export const lesson03: LessonDef = {
  id: "lesson-03",
  number: 3,
  title: "Distributive Property & Like Terms",
  status: "authored",
  newSkillId: "distributive-like-terms",
  conceptMd: `
**Distributive property**: \`a(b + c) = ab + ac\`. Multiply the outside term by every term inside the parentheses, keeping track of sign.

**Like terms** have the same variable(s) raised to the same power (e.g. \`3x\` and \`-5x\` are like terms; \`3x\` and \`3x²\` are not). Combine like terms by adding/subtracting their coefficients.

Simplify fully: distribute first, then combine like terms.
`,
  workedExamples: [
    {
      prompt: "Simplify: 3(2x - 5) + 4x",
      solutionSteps: ["Distribute: 3(2x)=6x, 3(-5)=-15", "6x - 15 + 4x", "Combine like terms: 6x+4x=10x", "10x - 15"],
    },
    {
      prompt: "Simplify: -2(x + 3) - (x - 4)",
      solutionSteps: ["Distribute -2: -2x - 6", "Distribute -1 (the leading minus): -x + 4", "-2x - 6 - x + 4", "Combine: -2x-x=-3x; -6+4=-2", "-3x - 2"],
    },
  ],
  lessonPractice: [
    { id: "l3-lp-1", skillId: "distributive-like-terms", context: "lessonPractice", prompt: "Simplify: 4(x + 2) - 3x", answer: "x + 8", solutionMd: "4x+8-3x = x+8." },
    { id: "l3-lp-2", skillId: "distributive-like-terms", context: "lessonPractice", prompt: "Simplify: -3(2x - 1) + 5", answer: "-6x + 8", solutionMd: "-6x+3+5 = -6x+8." },
    { id: "l3-lp-3", skillId: "distributive-like-terms", context: "lessonPractice", prompt: "Simplify: 5x - (3x + 7)", answer: "2x - 7", solutionMd: "5x-3x-7 = 2x-7." },
    { id: "l3-lp-4", skillId: "distributive-like-terms", context: "lessonPractice", prompt: "Simplify: 2(3x + 4) + 3(x - 1)", answer: "9x + 5", solutionMd: "6x+8+3x-3 = 9x+5." },
    { id: "l3-lp-5", skillId: "distributive-like-terms", context: "lessonPractice", prompt: "Simplify: -(4x - 6) - 2x", answer: "-6x + 6", solutionMd: "-4x+6-2x = -6x+6." },
  ],
  mixedPractice: [
    { id: "l3-mp-1", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 3(x - 2) + 2x", answer: "5x - 6", solutionMd: "3x-6+2x = 5x-6." },
    { id: "l3-mp-2", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: -2(x + 5) + 4", answer: "-2x - 6", solutionMd: "-2x-10+4 = -2x-6." },
    { id: "l3-mp-3", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 6x - 2(x - 3)", answer: "4x + 6", solutionMd: "6x-2x+6 = 4x+6." },
    { id: "l3-mp-4", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 4(2x + 1) - (x + 3)", answer: "7x + 1", solutionMd: "8x+4-x-3 = 7x+1." },
    { id: "l3-mp-5", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 4 + 3(5 - 2)", answer: "13", solutionMd: "5-2=3; 3(3)=9; 4+9=13." },
    { id: "l3-mp-6", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 3² + 2(4)", answer: "17", solutionMd: "9 + 8 = 17." },
    { id: "l3-mp-7", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -6 + (-4)", answer: "-10", solutionMd: "Same signs, add magnitudes, keep sign: -10." },
    { id: "l3-mp-8", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: (-9) ÷ 3", answer: "-3", solutionMd: "Different signs → negative. 9÷3=3 → -3." },
  ],
};
