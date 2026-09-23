import { LessonDef } from "../types";

export const lesson02: LessonDef = {
  id: "lesson-02",
  number: 2,
  title: "Order of Operations",
  status: "authored",
  newSkillId: "order-of-ops",
  conceptMd: `
When an expression has multiple operations, evaluate in this order (PEMDAS):

1. **P**arentheses (innermost first)
2. **E**xponents
3. **M**ultiplication and **D**ivision (left to right, same priority)
4. **A**ddition and **S**ubtraction (left to right, same priority)

Grouping symbols nest: \`[ ( ) ]\`. Always resolve the innermost group first.
`,
  workedExamples: [
    {
      prompt: "Evaluate: 4 + 2(9 - 5)",
      solutionSteps: ["Parentheses first: 9-5=4", "4 + 2(4)", "Multiply: 2(4)=8", "4+8=12"],
    },
    {
      prompt: "Evaluate: 3 + 2² × 5",
      solutionSteps: ["Exponent: 2²=4", "3 + 4×5", "Multiply: 4×5=20", "3+20=23"],
    },
    {
      prompt: "Evaluate: -2[5 - (3 + 1)]",
      solutionSteps: ["Innermost parens: 3+1=4", "-2[5-4]", "5-4=1", "-2(1)=-2"],
    },
  ],
  lessonPractice: [
    { id: "l2-lp-1", skillId: "order-of-ops", context: "lessonPractice", prompt: "Evaluate: 6 + 3(8 - 2)", answer: "24", solutionMd: "8-2=6; 3(6)=18; 6+18=24." },
    { id: "l2-lp-2", skillId: "order-of-ops", context: "lessonPractice", prompt: "Evaluate: 5² - 3×4", answer: "13", solutionMd: "5²=25; 3×4=12; 25-12=13." },
    { id: "l2-lp-3", skillId: "order-of-ops", context: "lessonPractice", prompt: "Evaluate: 2(7-4)² + 1", answer: "19", solutionMd: "7-4=3; 3²=9; 2(9)=18; 18+1=19." },
    { id: "l2-lp-4", skillId: "order-of-ops", context: "lessonPractice", prompt: "Evaluate: -3[4 - (6 - 2)]", answer: "0", solutionMd: "6-2=4; 4-4=0; -3(0)=0." },
    { id: "l2-lp-5", skillId: "order-of-ops", context: "lessonPractice", prompt: "Evaluate: 18 ÷ 3 + 2×5", answer: "16", solutionMd: "18÷3=6; 2×5=10; 6+10=16." },
  ],
  mixedPractice: [
    { id: "l2-mp-1", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 3 + 4(6-3)", answer: "15", solutionMd: "6-3=3; 4(3)=12; 3+12=15." },
    { id: "l2-mp-2", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 2³ - 5", answer: "3", solutionMd: "2³=8; 8-5=3." },
    { id: "l2-mp-3", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 10 - 2(3+1)", answer: "2", solutionMd: "3+1=4; 2(4)=8; 10-8=2." },
    { id: "l2-mp-4", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: -4 + 6", answer: "2", solutionMd: "Signed numbers review: -4+6=2." },
    { id: "l2-mp-5", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -8 × (-2)", answer: "16", solutionMd: "Same signs → positive. 8×2=16." },
    { id: "l2-mp-6", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: 7 - 15", answer: "-8", solutionMd: "7 + (-15) = -8." },
    { id: "l2-mp-7", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: |-3| - |5|", answer: "-2", solutionMd: "3 - 5 = -2." },
  ],
};
