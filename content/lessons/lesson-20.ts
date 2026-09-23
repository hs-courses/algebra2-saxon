import { LessonDef } from "../types";

export const lesson20: LessonDef = {
  id: "lesson-20",
  number: 20,
  title: "Graphing Quadratic Functions",
  status: "authored",
  newSkillId: "quadratics-graphing",
  conceptMd: `
The graph of \`y = ax² + bx + c\` is a **parabola**.

- **Vertex** (turning point) x-coordinate: \`x = -b / (2a)\`. Substitute back to find the y-coordinate.
- **Axis of symmetry**: the vertical line \`x = -b/(2a)\`.
- Opens **upward** if a > 0, **downward** if a < 0.
- **y-intercept** is c (the point where x = 0).
`,
  workedExamples: [
    {
      prompt: "Find the vertex of y = x² - 4x + 3",
      solutionSteps: ["x = -b/(2a) = -(-4)/(2·1) = 2", "y = (2)² - 4(2) + 3 = 4-8+3 = -1", "Vertex: (2, -1)"],
    },
    {
      prompt: "Find the vertex of y = -2x² + 8x - 3",
      solutionSteps: ["x = -8/(2·-2) = -8/-4 = 2", "y = -2(4) + 16 - 3 = -8+16-3 = 5", "Vertex: (2, 5)"],
    },
  ],
  lessonPractice: [
    { id: "l20-lp-1", skillId: "quadratics-graphing", context: "lessonPractice", prompt: "Find the vertex of y = x² - 2x - 3", answer: "(1, -4)", solutionMd: "x=1; y=1-2-3=-4." },
    { id: "l20-lp-2", skillId: "quadratics-graphing", context: "lessonPractice", prompt: "Find the axis of symmetry of y = x² + 6x + 5", answer: "x = -3", solutionMd: "x=-6/2=-3." },
    { id: "l20-lp-3", skillId: "quadratics-graphing", context: "lessonPractice", prompt: "Does y = -3x² + 2x + 1 open up or down?", answer: "down", solutionMd: "a=-3 < 0, opens down." },
    { id: "l20-lp-4", skillId: "quadratics-graphing", context: "lessonPractice", prompt: "Find the y-intercept of y = 2x² - 5x + 7", answer: "7", solutionMd: "c=7." },
    { id: "l20-lp-5", skillId: "quadratics-graphing", context: "lessonPractice", prompt: "Find the vertex of y = x² + 4x", answer: "(-2, -4)", solutionMd: "x=-2; y=4-8=-4." },
  ],
  mixedPractice: [
    { id: "l20-mp-1", skillId: "quadratics-graphing", context: "mixedPractice", prompt: "Find the vertex of y = x² - 6x + 8", answer: "(3, -1)", solutionMd: "x=3; y=9-18+8=-1." },
    { id: "l20-mp-2", skillId: "quadratics-graphing", context: "mixedPractice", prompt: "Find the axis of symmetry of y = 2x² - 8x + 1", answer: "x = 2", solutionMd: "x=8/4=2." },
    { id: "l20-mp-3", skillId: "quadratics-graphing", context: "mixedPractice", prompt: "Does y = 5x² - x + 2 open up or down?", answer: "up", solutionMd: "a=5>0, opens up." },
    { id: "l20-mp-4", skillId: "quadratics-graphing", context: "mixedPractice", prompt: "Find the y-intercept of y = -x² + 3x - 4", answer: "-4", solutionMd: "c=-4." },
  ],
};
