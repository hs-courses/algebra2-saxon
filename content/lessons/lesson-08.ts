import { LessonDef } from "../types";

export const lesson08: LessonDef = {
  id: "lesson-08",
  number: 8,
  title: "Solving Linear Equations",
  status: "authored",
  newSkillId: "linear-equations",
  conceptMd: `
To solve a linear equation in one variable:
1. Simplify each side (distribute, combine like terms).
2. Move variable terms to one side, constants to the other (use inverse operations, keep the equation balanced).
3. Divide by the coefficient of the variable to isolate it.
4. Check by substituting back in.
`,
  workedExamples: [
    {
      prompt: "Solve: 3x + 5 = 20",
      solutionSteps: ["Subtract 5: 3x = 15", "Divide by 3: x = 5"],
    },
    {
      prompt: "Solve: 2(x - 3) = 4x + 2",
      solutionSteps: ["Distribute: 2x - 6 = 4x + 2", "Subtract 2x: -6 = 2x + 2", "Subtract 2: -8 = 2x", "Divide by 2: x = -4"],
    },
  ],
  lessonPractice: [
    { id: "l8-lp-1", skillId: "linear-equations", context: "lessonPractice", prompt: "Solve: 4x - 7 = 9", answer: "x = 4", solutionMd: "4x=16, x=4." },
    { id: "l8-lp-2", skillId: "linear-equations", context: "lessonPractice", prompt: "Solve: 2x + 3 = x + 10", answer: "x = 7", solutionMd: "x+3=10, x=7." },
    { id: "l8-lp-3", skillId: "linear-equations", context: "lessonPractice", prompt: "Solve: 3(x + 2) = 21", answer: "x = 5", solutionMd: "3x+6=21, 3x=15, x=5." },
    { id: "l8-lp-4", skillId: "linear-equations", context: "lessonPractice", prompt: "Solve: 5x - 4 = 2x + 11", answer: "x = 5", solutionMd: "3x-4=11, 3x=15, x=5." },
    { id: "l8-lp-5", skillId: "linear-equations", context: "lessonPractice", prompt: "Solve: -2x + 6 = 0", answer: "x = 3", solutionMd: "-2x=-6, x=3." },
  ],
  mixedPractice: [
    { id: "l8-mp-1", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: 6x + 2 = 20", answer: "x = 3", solutionMd: "6x=18, x=3." },
    { id: "l8-mp-2", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: 3x - 5 = x + 9", answer: "x = 7", solutionMd: "2x-5=9, 2x=14, x=7." },
    { id: "l8-mp-3", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: 2(x - 4) = 10", answer: "x = 9", solutionMd: "2x-8=10, 2x=18, x=9." },
    { id: "l8-mp-4", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: -4x + 1 = 13", answer: "x = -3", solutionMd: "-4x=12, x=-3." },
    { id: "l8-mp-5", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: x⁷ ÷ x³", answer: "x⁴", solutionMd: "7-3=4." },
    { id: "l8-mp-6", skillId: "scientific-notation", context: "mixedPractice", prompt: "Multiply: (5 × 10³)(2 × 10⁴)", answer: "1 × 10⁸", solutionMd: "5×2=10=1×10¹; 10¹×10⁷=10⁸." },
    { id: "l8-mp-7", skillId: "angle-relationships", context: "mixedPractice", prompt: "Vertical angles: one is 6x, other is 84°. Find x.", answer: "14", solutionMd: "6x=84, x=14." },
    { id: "l8-mp-8", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 9 ft to inches.", answer: "108 in", solutionMd: "9×12=108." },
    { id: "l8-mp-9", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 2(3x - 1) + 4(x + 2)", answer: "10x + 6", solutionMd: "6x-2+4x+8 = 10x+6." },
    { id: "l8-mp-10", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: (5 - 2)² + 4", answer: "13", solutionMd: "3²=9; 9+4=13." },
    { id: "l8-mp-11", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -9 + (-6) + 10", answer: "-5", solutionMd: "-15+10=-5." },
  ],
};
