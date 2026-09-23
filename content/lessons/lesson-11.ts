import { LessonDef } from "../types";

export const lesson11: LessonDef = {
  id: "lesson-11",
  number: 11,
  title: "Systems of Equations by Graphing",
  status: "authored",
  newSkillId: "systems-graphing",
  conceptMd: `
A **system of equations** is two or more equations with the same variables. The **solution** is the point (x, y) that satisfies all equations at once — where their graphs intersect.

To solve by graphing: graph both lines (use slope-intercept form \`y = mx + b\`), find the intersection point. If the lines are parallel (same slope, different intercept), there's **no solution**. If they're the same line, there are **infinitely many solutions**.
`,
  workedExamples: [
    {
      prompt: "Solve by graphing: y = x + 1 and y = -x + 5",
      solutionSteps: [
        "Line 1: slope 1, y-intercept 1",
        "Line 2: slope -1, y-intercept 5",
        "Set equal to find intersection: x+1 = -x+5 → 2x=4 → x=2",
        "y = 2+1 = 3",
        "Solution: (2, 3)",
      ],
    },
    {
      prompt: "Solve: y = 2x - 3 and y = 2x + 1",
      solutionSteps: ["Both have slope 2 (parallel), different intercepts", "No solution"],
    },
  ],
  lessonPractice: [
    { id: "l11-lp-1", skillId: "systems-graphing", context: "lessonPractice", prompt: "Solve: y = x + 2 and y = -x + 6", answer: "(2, 4)", solutionMd: "x+2=-x+6, 2x=4, x=2, y=4." },
    { id: "l11-lp-2", skillId: "systems-graphing", context: "lessonPractice", prompt: "Solve: y = 3x and y = x + 4", answer: "(2, 6)", solutionMd: "3x=x+4, 2x=4, x=2, y=6." },
    { id: "l11-lp-3", skillId: "systems-graphing", context: "lessonPractice", prompt: "Solve: y = x - 1 and y = x + 3", answer: "No solution", solutionMd: "Same slope, different intercept → parallel, no solution." },
    { id: "l11-lp-4", skillId: "systems-graphing", context: "lessonPractice", prompt: "Solve: y = 2x + 1 and y = -x + 7", answer: "(2, 5)", solutionMd: "2x+1=-x+7, 3x=6, x=2, y=5." },
    { id: "l11-lp-5", skillId: "systems-graphing", context: "lessonPractice", prompt: "Solve: y = -2x + 8 and y = 2x", answer: "(2, 4)", solutionMd: "-2x+8=2x, 8=4x, x=2, y=4." },
  ],
  mixedPractice: [
    { id: "l11-mp-1", skillId: "systems-graphing", context: "mixedPractice", prompt: "Solve: y = x + 5 and y = -x + 1", answer: "(-2, 3)", solutionMd: "x+5=-x+1, 2x=-4, x=-2, y=3." },
    { id: "l11-mp-2", skillId: "systems-graphing", context: "mixedPractice", prompt: "Solve: y = 4x and y = x + 9", answer: "(3, 12)", solutionMd: "4x=x+9, 3x=9, x=3, y=12." },
    { id: "l11-mp-3", skillId: "systems-graphing", context: "mixedPractice", prompt: "Solve: y = 3x - 2 and y = 3x + 4", answer: "No solution", solutionMd: "Parallel lines, same slope 3." },
    { id: "l11-mp-4", skillId: "systems-graphing", context: "mixedPractice", prompt: "Solve: y = -x + 4 and y = x - 2", answer: "(3, 1)", solutionMd: "-x+4=x-2, 6=2x, x=3, y=1." },
  ],
};
