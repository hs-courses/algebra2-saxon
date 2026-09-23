import { LessonDef } from "../types";

export const lesson05: LessonDef = {
  id: "lesson-05",
  number: 5,
  title: "Angle Relationships",
  status: "authored",
  newSkillId: "angle-relationships",
  conceptMd: `
- **Complementary angles** sum to 90°.
- **Supplementary angles** sum to 180°.
- **Vertical angles** (formed by two intersecting lines) are equal.

Set up an equation from the relationship, then solve for the unknown angle.
`,
  workedExamples: [
    {
      prompt: "Two angles are complementary. One is 35°. Find the other.",
      solutionSteps: ["x + 35 = 90", "x = 55°"],
    },
    {
      prompt: "Two angles are supplementary. One is 2x, the other is 40°. Find x.",
      solutionSteps: ["2x + 40 = 180", "2x = 140", "x = 70"],
    },
    {
      prompt: "Vertical angles: one is 3x + 10, the other is 70°. Find x.",
      solutionSteps: ["Vertical angles are equal: 3x + 10 = 70", "3x = 60", "x = 20"],
    },
  ],
  lessonPractice: [
    { id: "l5-lp-1", skillId: "angle-relationships", context: "lessonPractice", prompt: "Complementary angles: one is 62°. Find the other.", answer: "28°", solutionMd: "90-62=28." },
    { id: "l5-lp-2", skillId: "angle-relationships", context: "lessonPractice", prompt: "Supplementary angles: one is 110°. Find the other.", answer: "70°", solutionMd: "180-110=70." },
    { id: "l5-lp-3", skillId: "angle-relationships", context: "lessonPractice", prompt: "Vertical angles: one is 4x, other is 52°. Find x.", answer: "13", solutionMd: "4x=52, x=13." },
    { id: "l5-lp-4", skillId: "angle-relationships", context: "lessonPractice", prompt: "Complementary: x + 20 = 90. Find x.", answer: "70", solutionMd: "x=90-20=70." },
    { id: "l5-lp-5", skillId: "angle-relationships", context: "lessonPractice", prompt: "Supplementary: 3x = 180 - 30. Find x.", answer: "50", solutionMd: "3x=150, x=50." },
  ],
  mixedPractice: [
    { id: "l5-mp-1", skillId: "angle-relationships", context: "mixedPractice", prompt: "Complementary angles: one is 47°. Find the other.", answer: "43°", solutionMd: "90-47=43." },
    { id: "l5-mp-2", skillId: "angle-relationships", context: "mixedPractice", prompt: "Supplementary angles: one is 95°. Find the other.", answer: "85°", solutionMd: "180-95=85." },
    { id: "l5-mp-3", skillId: "angle-relationships", context: "mixedPractice", prompt: "Vertical angles: one is 2x+5, other is 65°. Find x.", answer: "30", solutionMd: "2x+5=65, 2x=60, x=30." },
    { id: "l5-mp-4", skillId: "angle-relationships", context: "mixedPractice", prompt: "Supplementary: one is 5x, other is 30°. Find x.", answer: "30", solutionMd: "5x=150, x=30." },
    { id: "l5-mp-5", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 4 mi to ft (1 mi = 5280 ft).", answer: "21,120 ft", solutionMd: "4×5280=21120." },
    { id: "l5-mp-6", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 3(x + 4) - 2(x - 1)", answer: "x + 14", solutionMd: "3x+12-2x+2 = x+14." },
    { id: "l5-mp-7", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 4(3 + 2) - 6", answer: "14", solutionMd: "4(5)=20; 20-6=14." },
    { id: "l5-mp-8", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -7 + (-3) - 2", answer: "-12", solutionMd: "-7-3-2=-12." },
    { id: "l5-mp-9", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: (-4)(5)(-1)", answer: "20", solutionMd: "(-4)(5)=-20; (-20)(-1)=20." },
  ],
};
