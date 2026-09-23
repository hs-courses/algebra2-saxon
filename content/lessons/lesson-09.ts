import { LessonDef } from "../types";

export const lesson09: LessonDef = {
  id: "lesson-09",
  number: 9,
  title: "Function Notation",
  status: "authored",
  newSkillId: "function-notation",
  conceptMd: `
\`f(x)\` names a function \`f\` and shows it depends on input \`x\`. To **evaluate** \`f(a)\`, substitute \`a\` for every \`x\` in the function's rule and simplify.

The **domain** is the set of allowed input values. Unless stated otherwise, assume domain is all real numbers except where the function is undefined (e.g. division by zero).
`,
  workedExamples: [
    {
      prompt: "If f(x) = 2x + 3, find f(4).",
      solutionSteps: ["Substitute x=4: 2(4)+3", "8+3=11", "f(4)=11"],
    },
    {
      prompt: "If g(x) = x² - 5, find g(-3).",
      solutionSteps: ["Substitute x=-3: (-3)²-5", "9-5=4", "g(-3)=4"],
    },
  ],
  lessonPractice: [
    { id: "l9-lp-1", skillId: "function-notation", context: "lessonPractice", prompt: "f(x) = 3x - 1. Find f(5).", answer: "14", solutionMd: "3(5)-1=14." },
    { id: "l9-lp-2", skillId: "function-notation", context: "lessonPractice", prompt: "g(x) = x² + 2. Find g(3).", answer: "11", solutionMd: "9+2=11." },
    { id: "l9-lp-3", skillId: "function-notation", context: "lessonPractice", prompt: "f(x) = -2x + 7. Find f(-2).", answer: "11", solutionMd: "-2(-2)+7=4+7=11." },
    { id: "l9-lp-4", skillId: "function-notation", context: "lessonPractice", prompt: "h(x) = x² - 3x. Find h(4).", answer: "4", solutionMd: "16-12=4." },
    { id: "l9-lp-5", skillId: "function-notation", context: "lessonPractice", prompt: "f(x) = 5. Find f(100).", answer: "5", solutionMd: "Constant function; output always 5." },
  ],
  mixedPractice: [
    { id: "l9-mp-1", skillId: "function-notation", context: "mixedPractice", prompt: "f(x) = 4x + 2. Find f(3).", answer: "14", solutionMd: "4(3)+2=14." },
    { id: "l9-mp-2", skillId: "function-notation", context: "mixedPractice", prompt: "g(x) = x² - 1. Find g(-4).", answer: "15", solutionMd: "16-1=15." },
    { id: "l9-mp-3", skillId: "function-notation", context: "mixedPractice", prompt: "f(x) = -x + 6. Find f(6).", answer: "0", solutionMd: "-6+6=0." },
    { id: "l9-mp-4", skillId: "function-notation", context: "mixedPractice", prompt: "h(x) = 2x² + 1. Find h(2).", answer: "9", solutionMd: "2(4)+1=9." },
    { id: "l9-mp-5", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: 3x + 8 = 2", answer: "x = -2", solutionMd: "3x=-6, x=-2." },
    { id: "l9-mp-6", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: (x⁴)²", answer: "x⁸", solutionMd: "4×2=8." },
    { id: "l9-mp-7", skillId: "scientific-notation", context: "mixedPractice", prompt: "Write 0.00056 in scientific notation.", answer: "5.6 × 10⁻⁴", solutionMd: "Move decimal 4 places right." },
    { id: "l9-mp-8", skillId: "angle-relationships", context: "mixedPractice", prompt: "Supplementary angles: one is 3x, other is 60°. Find x.", answer: "40", solutionMd: "3x=120, x=40." },
    { id: "l9-mp-9", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 5 min to seconds.", answer: "300 s", solutionMd: "5×60=300." },
    { id: "l9-mp-10", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 4x - 3(x - 2)", answer: "x + 6", solutionMd: "4x-3x+6 = x+6." },
    { id: "l9-mp-11", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 3(4 + 1) - 2³", answer: "7", solutionMd: "3(5)=15; 2³=8; 15-8=7." },
    { id: "l9-mp-12", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: (-3)² - 5", answer: "4", solutionMd: "9-5=4." },
  ],
};
