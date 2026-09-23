import { LessonDef } from "../types";

export const lesson12: LessonDef = {
  id: "lesson-12",
  number: 12,
  title: "Systems of Equations by Substitution",
  status: "authored",
  newSkillId: "systems-substitution",
  conceptMd: `
**Substitution method**: solve one equation for one variable, then substitute that expression into the other equation. This turns two equations in two unknowns into one equation in one unknown.

1. Solve one equation for x or y (pick the easiest).
2. Substitute into the other equation.
3. Solve for the remaining variable.
4. Substitute back to find the other variable.
`,
  workedExamples: [
    {
      prompt: "Solve: y = x + 3 and 2x + y = 12",
      solutionSteps: [
        "y is already isolated: y = x + 3",
        "Substitute into 2x + y = 12: 2x + (x+3) = 12",
        "3x + 3 = 12 → 3x = 9 → x = 3",
        "y = 3 + 3 = 6",
        "Solution: (3, 6)",
      ],
    },
    {
      prompt: "Solve: x + y = 10 and x - y = 2",
      solutionSteps: ["Solve first for x: x = 10 - y", "Substitute: (10-y) - y = 2 → 10-2y=2 → -2y=-8 → y=4", "x = 10-4 = 6", "Solution: (6, 4)"],
    },
  ],
  lessonPractice: [
    { id: "l12-lp-1", skillId: "systems-substitution", context: "lessonPractice", prompt: "Solve: y = x + 1 and 3x + y = 9", answer: "(2, 3)", solutionMd: "3x+x+1=9, 4x=8, x=2, y=3." },
    { id: "l12-lp-2", skillId: "systems-substitution", context: "lessonPractice", prompt: "Solve: x = 2y and x + y = 12", answer: "(8, 4)", solutionMd: "2y+y=12, 3y=12, y=4, x=8." },
    { id: "l12-lp-3", skillId: "systems-substitution", context: "lessonPractice", prompt: "Solve: y = 2x - 1 and x + y = 8", answer: "(3, 5)", solutionMd: "x+2x-1=8, 3x=9, x=3, y=5." },
    { id: "l12-lp-4", skillId: "systems-substitution", context: "lessonPractice", prompt: "Solve: x + y = 7 and x - y = 1", answer: "(4, 3)", solutionMd: "x=7-y; 7-y-y=1, 6=2y, y=3, x=4." },
    { id: "l12-lp-5", skillId: "systems-substitution", context: "lessonPractice", prompt: "Solve: y = 5 - x and 2x + 3y = 12", answer: "(3, 2)", solutionMd: "2x+3(5-x)=12, 2x+15-3x=12, -x=-3, x=3, y=2." },
  ],
  mixedPractice: [
    { id: "l12-mp-1", skillId: "systems-substitution", context: "mixedPractice", prompt: "Solve: y = x - 2 and x + y = 10", answer: "(6, 4)", solutionMd: "x+x-2=10, 2x=12, x=6, y=4." },
    { id: "l12-mp-2", skillId: "systems-substitution", context: "mixedPractice", prompt: "Solve: x = 3y and x - y = 8", answer: "(12, 4)", solutionMd: "3y-y=8, 2y=8, y=4, x=12." },
    { id: "l12-mp-3", skillId: "systems-substitution", context: "mixedPractice", prompt: "Solve: y = 4x and x + y = 15", answer: "(3, 12)", solutionMd: "x+4x=15, 5x=15, x=3, y=12." },
    { id: "l12-mp-4", skillId: "systems-substitution", context: "mixedPractice", prompt: "Solve: x + y = 9 and x - y = 3", answer: "(6, 3)", solutionMd: "x=9-y; 9-y-y=3, 6=2y, y=3, x=6." },
  ],
};
