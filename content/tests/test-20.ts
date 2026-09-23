import { ProblemDef, TestBlockDef } from "../types";

export const test20Problems: ProblemDef[] = [
  { id: "t20-1", skillId: "order-of-ops", context: "test", prompt: "Evaluate: 3(4 - 1)² + 2", answer: "29", solutionMd: "3²=9; 3(9)=27; 27+2=29." },
  { id: "t20-2", skillId: "linear-equations", context: "test", prompt: "Solve: 2(x + 3) = x + 10", answer: "x = 4", solutionMd: "2x+6=x+10, x=4." },
  { id: "t20-3", skillId: "laws-of-exponents", context: "test", prompt: "Simplify: x⁸ ÷ x³", answer: "x⁵", solutionMd: "8-3=5." },
  { id: "t20-4", skillId: "systems-elimination", context: "test", prompt: "Solve: x + y = 10 and x - y = 4", answer: "(7, 3)", solutionMd: "Add: 2x=14, x=7; y=3." },
  { id: "t20-5", skillId: "polynomial-add-sub", context: "test", prompt: "Subtract: (5x² + 3x) - (2x² - x + 4)", answer: "3x² + 4x - 4", solutionMd: "5x²+3x-2x²+x-4 = 3x²+4x-4." },
  { id: "t20-6", skillId: "polynomial-multiply", context: "test", prompt: "Multiply: (x - 4)(x + 6)", answer: "x² + 2x - 24", solutionMd: "x²+6x-4x-24 = x²+2x-24." },
  { id: "t20-7", skillId: "factoring-gcf", context: "test", prompt: "Factor: 8x² + 12x", answer: "4x(2x + 3)", solutionMd: "GCF=4x; 4x(2x+3)." },
  { id: "t20-8", skillId: "factoring-trinomials", context: "test", prompt: "Factor: x² - 2x - 8", answer: "(x - 4)(x + 2)", solutionMd: "-4 and 2 multiply to -8, add to -2." },
  { id: "t20-9", skillId: "difference-of-squares", context: "test", prompt: "Factor: x² - 36", answer: "(x + 6)(x - 6)", solutionMd: "x and 6." },
  { id: "t20-10", skillId: "quadratics-factoring", context: "test", prompt: "Solve: x² - 3x - 4 = 0", answer: "x = 4 or x = -1", solutionMd: "(x-4)(x+1)=0." },
  { id: "t20-11", skillId: "quadratics-graphing", context: "test", prompt: "Find the vertex of y = x² - 8x + 12", answer: "(4, -4)", solutionMd: "x=4; y=16-32+12=-4." },
];

export const test20: TestBlockDef = {
  id: "test-20",
  afterLessonNumber: 20,
  title: "Test 20 (Lessons 1-20, Cumulative)",
  problemIds: test20Problems.map((p) => p.id),
};
