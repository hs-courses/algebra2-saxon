import { ProblemDef, TestBlockDef } from "../types";

export const test05Problems: ProblemDef[] = [
  { id: "t5-1", skillId: "signed-numbers", context: "test", prompt: "Simplify: -11 + 4", answer: "-7", solutionMd: "Different signs; 11-4=7; keep sign of -11 → -7." },
  { id: "t5-2", skillId: "signed-numbers", context: "test", prompt: "Simplify: (-6)(-7)", answer: "42", solutionMd: "Same signs → positive." },
  { id: "t5-3", skillId: "order-of-ops", context: "test", prompt: "Evaluate: 5 + 2(6 - 3)", answer: "11", solutionMd: "6-3=3; 2(3)=6; 5+6=11." },
  { id: "t5-4", skillId: "order-of-ops", context: "test", prompt: "Evaluate: 3² - 2×4", answer: "1", solutionMd: "9-8=1." },
  { id: "t5-5", skillId: "distributive-like-terms", context: "test", prompt: "Simplify: 4(x - 3) + 2x", answer: "6x - 12", solutionMd: "4x-12+2x = 6x-12." },
  { id: "t5-6", skillId: "distributive-like-terms", context: "test", prompt: "Simplify: -2(x + 1) - x", answer: "-3x - 2", solutionMd: "-2x-2-x = -3x-2." },
  { id: "t5-7", skillId: "rates-unit-conversion", context: "test", prompt: "Convert 7 ft to inches.", answer: "84 in", solutionMd: "7×12=84." },
  { id: "t5-8", skillId: "rates-unit-conversion", context: "test", prompt: "A bus travels 210 mi in 3 hr. Rate?", answer: "70 mph", solutionMd: "210/3=70." },
  { id: "t5-9", skillId: "angle-relationships", context: "test", prompt: "Complementary angles: one is 33°. Find the other.", answer: "57°", solutionMd: "90-33=57." },
  { id: "t5-10", skillId: "angle-relationships", context: "test", prompt: "Vertical angles: one is 5x, other is 75°. Find x.", answer: "15", solutionMd: "5x=75, x=15." },
];

export const test05: TestBlockDef = {
  id: "test-05",
  afterLessonNumber: 5,
  title: "Test 5 (Lessons 1-5)",
  problemIds: test05Problems.map((p) => p.id),
};
