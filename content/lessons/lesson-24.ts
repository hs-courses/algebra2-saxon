import { LessonDef } from "../types";

export const lesson24: LessonDef = {
  id: "lesson-24",
  number: 24,
  title: "Solving Radical Equations",
  status: "authored",
  newSkillId: "radical-equations",
  conceptMd: `
To solve an equation with a variable under a radical:
1. Isolate the radical on one side.
2. Square both sides to eliminate the radical.
3. Solve the resulting equation.
4. **Check every solution** in the original equation — squaring can introduce extraneous (fake) solutions.
`,
  workedExamples: [
    {
      prompt: "Solve: √(x + 3) = 4",
      solutionSteps: ["Square both sides: x+3 = 16", "x = 13", "Check: √16=4 ✓"],
    },
    {
      prompt: "Solve: √(2x - 1) = 3",
      solutionSteps: ["Square: 2x-1=9", "2x=10, x=5", "Check: √9=3 ✓"],
    },
  ],
  lessonPractice: [
    { id: "l24-lp-1", skillId: "radical-equations", context: "lessonPractice", prompt: "Solve: √(x + 5) = 3", answer: "x = 4", solutionMd: "x+5=9, x=4. Check √9=3 ✓." },
    { id: "l24-lp-2", skillId: "radical-equations", context: "lessonPractice", prompt: "Solve: √(x - 2) = 5", answer: "x = 27", solutionMd: "x-2=25, x=27." },
    { id: "l24-lp-3", skillId: "radical-equations", context: "lessonPractice", prompt: "Solve: √(3x) = 6", answer: "x = 12", solutionMd: "3x=36, x=12." },
    { id: "l24-lp-4", skillId: "radical-equations", context: "lessonPractice", prompt: "Solve: √(x + 1) - 2 = 0", answer: "x = 3", solutionMd: "√(x+1)=2, x+1=4, x=3." },
    { id: "l24-lp-5", skillId: "radical-equations", context: "lessonPractice", prompt: "Solve: √(2x + 6) = 4", answer: "x = 5", solutionMd: "2x+6=16, 2x=10, x=5." },
  ],
  mixedPractice: [
    { id: "l24-mp-1", skillId: "radical-equations", context: "mixedPractice", prompt: "Solve: √(x + 7) = 4", answer: "x = 9", solutionMd: "x+7=16, x=9." },
    { id: "l24-mp-2", skillId: "radical-equations", context: "mixedPractice", prompt: "Solve: √(x - 4) = 3", answer: "x = 13", solutionMd: "x-4=9, x=13." },
    { id: "l24-mp-3", skillId: "radical-equations", context: "mixedPractice", prompt: "Solve: √(4x) = 8", answer: "x = 16", solutionMd: "4x=64, x=16." },
    { id: "l24-mp-4", skillId: "radical-equations", context: "mixedPractice", prompt: "Solve: √(3x - 2) = 5", answer: "x = 9", solutionMd: "3x-2=25, 3x=27, x=9." },
  ],
};
