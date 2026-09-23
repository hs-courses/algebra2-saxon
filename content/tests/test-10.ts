import { ProblemDef, TestBlockDef } from "../types";

// Saxon tests are cumulative from lesson 1, not just the newest block — this test
// samples across all skills introduced in lessons 1-10, weighted toward newer skills.
export const test10Problems: ProblemDef[] = [
  { id: "t10-1", skillId: "signed-numbers", context: "test", prompt: "Simplify: -13 + 6", answer: "-7", solutionMd: "13-6=7; sign of -13 → -7." },
  { id: "t10-2", skillId: "order-of-ops", context: "test", prompt: "Evaluate: 4 + 3(7 - 5)", answer: "10", solutionMd: "7-5=2; 3(2)=6; 4+6=10." },
  { id: "t10-3", skillId: "distributive-like-terms", context: "test", prompt: "Simplify: 3(x - 1) + 2x", answer: "5x - 3", solutionMd: "3x-3+2x = 5x-3." },
  { id: "t10-4", skillId: "rates-unit-conversion", context: "test", prompt: "Convert 6 yd to ft.", answer: "18 ft", solutionMd: "6×3=18." },
  { id: "t10-5", skillId: "angle-relationships", context: "test", prompt: "Vertical angles: one is 3x, other is 51°. Find x.", answer: "17", solutionMd: "3x=51, x=17." },
  { id: "t10-6", skillId: "scientific-notation", context: "test", prompt: "Write 82,000 in scientific notation.", answer: "8.2 × 10⁴", solutionMd: "Move decimal 4 places." },
  { id: "t10-7", skillId: "laws-of-exponents", context: "test", prompt: "Simplify: x⁶ ÷ x²", answer: "x⁴", solutionMd: "6-2=4." },
  { id: "t10-8", skillId: "laws-of-exponents", context: "test", prompt: "Simplify: (x³)²", answer: "x⁶", solutionMd: "3×2=6." },
  { id: "t10-9", skillId: "linear-equations", context: "test", prompt: "Solve: 4x - 5 = 11", answer: "x = 4", solutionMd: "4x=16, x=4." },
  { id: "t10-10", skillId: "linear-equations", context: "test", prompt: "Solve: 3(x - 2) = x + 4", answer: "x = 5", solutionMd: "3x-6=x+4, 2x=10, x=5." },
  { id: "t10-11", skillId: "function-notation", context: "test", prompt: "f(x) = 2x - 3. Find f(5).", answer: "7", solutionMd: "2(5)-3=7." },
  { id: "t10-12", skillId: "variation", context: "test", prompt: "y varies directly with x. y=16 when x=4. Find y when x=9.", answer: "36", solutionMd: "k=4; y=4(9)=36." },
  { id: "t10-13", skillId: "variation", context: "test", prompt: "y varies inversely with x. y=5 when x=6. Find y when x=10.", answer: "3", solutionMd: "k=30; y=30/10=3." },
];

export const test10: TestBlockDef = {
  id: "test-10",
  afterLessonNumber: 10,
  title: "Test 10 (Lessons 1-10, Cumulative)",
  problemIds: test10Problems.map((p) => p.id),
};
