import { LessonDef } from "../types";

export const lesson23: LessonDef = {
  id: "lesson-23",
  number: 23,
  title: "Radical Expressions & Simplification",
  status: "authored",
  newSkillId: "radical-simplify",
  conceptMd: `
To simplify \`√n\`, factor out the largest perfect square factor: \`√(a²·b) = a√b\`.

**Multiplying radicals**: \`√a · √b = √(ab)\`. **Adding/subtracting**: only combine radicals with the same radicand (like combining like terms), e.g. \`3√2 + 5√2 = 8√2\`.
`,
  workedExamples: [
    { prompt: "Simplify: √50", solutionSteps: ["50 = 25 · 2, and 25 is a perfect square", "√50 = √25 · √2 = 5√2"] },
    { prompt: "Simplify: √12 + √27", solutionSteps: ["√12 = √4·3 = 2√3", "√27 = √9·3 = 3√3", "2√3 + 3√3 = 5√3"] },
  ],
  lessonPractice: [
    { id: "l23-lp-1", skillId: "radical-simplify", context: "lessonPractice", prompt: "Simplify: √18", answer: "3√2", solutionMd: "18=9·2; √9·√2=3√2." },
    { id: "l23-lp-2", skillId: "radical-simplify", context: "lessonPractice", prompt: "Simplify: √32", answer: "4√2", solutionMd: "32=16·2; 4√2." },
    { id: "l23-lp-3", skillId: "radical-simplify", context: "lessonPractice", prompt: "Simplify: √45", answer: "3√5", solutionMd: "45=9·5; 3√5." },
    { id: "l23-lp-4", skillId: "radical-simplify", context: "lessonPractice", prompt: "Simplify: √8 + √2", answer: "3√2", solutionMd: "√8=2√2; 2√2+√2=3√2." },
    { id: "l23-lp-5", skillId: "radical-simplify", context: "lessonPractice", prompt: "Simplify: √3 · √12", answer: "6", solutionMd: "√36=6." },
  ],
  mixedPractice: [
    { id: "l23-mp-1", skillId: "radical-simplify", context: "mixedPractice", prompt: "Simplify: √20", answer: "2√5", solutionMd: "20=4·5; 2√5." },
    { id: "l23-mp-2", skillId: "radical-simplify", context: "mixedPractice", prompt: "Simplify: √75", answer: "5√3", solutionMd: "75=25·3; 5√3." },
    { id: "l23-mp-3", skillId: "radical-simplify", context: "mixedPractice", prompt: "Simplify: √48", answer: "4√3", solutionMd: "48=16·3; 4√3." },
    { id: "l23-mp-4", skillId: "radical-simplify", context: "mixedPractice", prompt: "Simplify: 2√5 + 3√5", answer: "5√5", solutionMd: "Combine like radicals: 5√5." },
  ],
};
