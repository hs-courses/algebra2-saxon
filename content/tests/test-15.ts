import { ProblemDef, TestBlockDef } from "../types";

export const test15Problems: ProblemDef[] = [
  { id: "t15-1", skillId: "signed-numbers", context: "test", prompt: "Simplify: -9 + (-5)", answer: "-14", solutionMd: "Same signs, add magnitudes: -14." },
  { id: "t15-2", skillId: "distributive-like-terms", context: "test", prompt: "Simplify: 4(x - 2) + 3x", answer: "7x - 8", solutionMd: "4x-8+3x = 7x-8." },
  { id: "t15-3", skillId: "linear-equations", context: "test", prompt: "Solve: 5x - 2 = 3x + 8", answer: "x = 5", solutionMd: "2x-2=8, 2x=10, x=5." },
  { id: "t15-4", skillId: "function-notation", context: "test", prompt: "f(x) = 3x - 2. Find f(4).", answer: "10", solutionMd: "3(4)-2=10." },
  { id: "t15-5", skillId: "variation", context: "test", prompt: "y varies directly with x. y=21 when x=7. Find y when x=10.", answer: "30", solutionMd: "k=3; y=30." },
  { id: "t15-6", skillId: "systems-graphing", context: "test", prompt: "Solve: y = x + 4 and y = -x + 8", answer: "(2, 6)", solutionMd: "x+4=-x+8, 2x=4, x=2, y=6." },
  { id: "t15-7", skillId: "systems-substitution", context: "test", prompt: "Solve: y = 2x and x + y = 9", answer: "(3, 6)", solutionMd: "x+2x=9, 3x=9, x=3, y=6." },
  { id: "t15-8", skillId: "systems-elimination", context: "test", prompt: "Solve: x + y = 8 and x - y = 2", answer: "(5, 3)", solutionMd: "Add: 2x=10, x=5; y=3." },
  { id: "t15-9", skillId: "polynomial-add-sub", context: "test", prompt: "Add: (2x² + x) + (x² - 4x + 3)", answer: "3x² - 3x + 3", solutionMd: "3x²-3x+3." },
  { id: "t15-10", skillId: "polynomial-multiply", context: "test", prompt: "Multiply: (x + 3)(x - 2)", answer: "x² + x - 6", solutionMd: "x²-2x+3x-6 = x²+x-6." },
];

export const test15: TestBlockDef = {
  id: "test-15",
  afterLessonNumber: 15,
  title: "Test 15 (Lessons 1-15, Cumulative)",
  problemIds: test15Problems.map((p) => p.id),
};
