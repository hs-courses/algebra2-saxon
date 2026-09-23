import { LessonDef } from "../types";

export const lesson13: LessonDef = {
  id: "lesson-13",
  number: 13,
  title: "Systems of Equations by Elimination",
  status: "authored",
  newSkillId: "systems-elimination",
  conceptMd: `
**Elimination method**: add or subtract the two equations to cancel out one variable. If coefficients don't match, multiply one or both equations first so they do (opposite signs).

1. Line up equations with x and y terms aligned.
2. Multiply one/both equations so a variable's coefficients are opposites.
3. Add the equations — that variable cancels.
4. Solve for the remaining variable, then back-substitute.
`,
  workedExamples: [
    {
      prompt: "Solve: 2x + y = 11 and x - y = 1",
      solutionSteps: ["Add the equations directly: (2x+y)+(x-y) = 11+1", "3x = 12 → x = 4", "Substitute: 4 - y = 1 → y = 3", "Solution: (4, 3)"],
    },
    {
      prompt: "Solve: 3x + 2y = 16 and x + 2y = 8",
      solutionSteps: ["Subtract: (3x+2y)-(x+2y) = 16-8", "2x = 8 → x = 4", "Substitute: 4 + 2y = 8 → 2y = 4 → y = 2", "Solution: (4, 2)"],
    },
  ],
  lessonPractice: [
    { id: "l13-lp-1", skillId: "systems-elimination", context: "lessonPractice", prompt: "Solve: x + y = 9 and x - y = 3", answer: "(6, 3)", solutionMd: "Add: 2x=12, x=6; y=3." },
    { id: "l13-lp-2", skillId: "systems-elimination", context: "lessonPractice", prompt: "Solve: 2x + y = 10 and x - y = 2", answer: "(4, 2)", solutionMd: "Add: 3x=12, x=4; y=2." },
    { id: "l13-lp-3", skillId: "systems-elimination", context: "lessonPractice", prompt: "Solve: 3x + 2y = 13 and x + 2y = 9", answer: "(2, 3.5)", solutionMd: "Subtract: 2x=4, x=2; substitute into x+2y=9: 2+2y=9, y=3.5." },
    { id: "l13-lp-4", skillId: "systems-elimination", context: "lessonPractice", prompt: "Solve: 4x - y = 10 and x + y = 5", answer: "(3, 2)", solutionMd: "Add: 5x=15, x=3; y=2." },
    { id: "l13-lp-5", skillId: "systems-elimination", context: "lessonPractice", prompt: "Solve: x + y = 6 and 2x - y = 3", answer: "(3, 3)", solutionMd: "Add: 3x=9, x=3; y=3." },
  ],
  mixedPractice: [
    { id: "l13-mp-1", skillId: "systems-elimination", context: "mixedPractice", prompt: "Solve: x + y = 12 and x - y = 4", answer: "(8, 4)", solutionMd: "Add: 2x=16, x=8; y=4." },
    { id: "l13-mp-2", skillId: "systems-elimination", context: "mixedPractice", prompt: "Solve: 3x + y = 14 and x - y = 2", answer: "(4, 2)", solutionMd: "Add: 4x=16, x=4; y=2." },
    { id: "l13-mp-3", skillId: "systems-elimination", context: "mixedPractice", prompt: "Solve: 2x + 3y = 16 and x - 3y = -1", answer: "(5, 2)", solutionMd: "Add: 3x=15, x=5; y=2." },
    { id: "l13-mp-4", skillId: "systems-elimination", context: "mixedPractice", prompt: "Solve: x + 2y = 11 and x - 2y = -1", answer: "(5, 3)", solutionMd: "Add: 2x=10, x=5; y=3." },
  ],
};
