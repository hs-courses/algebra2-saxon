import { LessonDef } from "../types";

export const lesson10: LessonDef = {
  id: "lesson-10",
  number: 10,
  title: "Direct & Inverse Variation",
  status: "authored",
  newSkillId: "variation",
  conceptMd: `
**Direct variation**: \`y = kx\`, where \`k\` is the constant of variation. As x increases, y increases proportionally. Find \`k\` from one pair \`(x,y)\`, then use it to find other values.

**Inverse variation**: \`y = k/x\`. As x increases, y decreases. Find \`k = xy\` from one pair.
`,
  workedExamples: [
    {
      prompt: "y varies directly with x. y=15 when x=3. Find y when x=8.",
      solutionSteps: ["k = y/x = 15/3 = 5", "y = 5x", "y = 5(8) = 40"],
    },
    {
      prompt: "y varies inversely with x. y=4 when x=6. Find y when x=8.",
      solutionSteps: ["k = xy = 6×4 = 24", "y = 24/x", "y = 24/8 = 3"],
    },
  ],
  lessonPractice: [
    { id: "l10-lp-1", skillId: "variation", context: "lessonPractice", prompt: "y varies directly with x. y=12 when x=4. Find y when x=7.", answer: "21", solutionMd: "k=3; y=3(7)=21." },
    { id: "l10-lp-2", skillId: "variation", context: "lessonPractice", prompt: "y varies inversely with x. y=5 when x=2. Find y when x=10.", answer: "1", solutionMd: "k=10; y=10/10=1." },
    { id: "l10-lp-3", skillId: "variation", context: "lessonPractice", prompt: "y varies directly with x. y=20 when x=5. Find k.", answer: "4", solutionMd: "k=20/5=4." },
    { id: "l10-lp-4", skillId: "variation", context: "lessonPractice", prompt: "y varies inversely with x. y=3 when x=9. Find y when x=3.", answer: "9", solutionMd: "k=27; y=27/3=9." },
    { id: "l10-lp-5", skillId: "variation", context: "lessonPractice", prompt: "y varies directly with x. y=9 when x=3. Find y when x=10.", answer: "30", solutionMd: "k=3; y=3(10)=30." },
  ],
  mixedPractice: [
    { id: "l10-mp-1", skillId: "variation", context: "mixedPractice", prompt: "y varies directly with x. y=18 when x=6. Find y when x=9.", answer: "27", solutionMd: "k=3; y=27." },
    { id: "l10-mp-2", skillId: "variation", context: "mixedPractice", prompt: "y varies inversely with x. y=6 when x=4. Find y when x=8.", answer: "3", solutionMd: "k=24; y=24/8=3." },
    { id: "l10-mp-3", skillId: "variation", context: "mixedPractice", prompt: "y varies directly with x. y=7 when x=1. Find y when x=5.", answer: "35", solutionMd: "k=7; y=35." },
    { id: "l10-mp-4", skillId: "variation", context: "mixedPractice", prompt: "y varies inversely with x. y=2 when x=15. Find y when x=5.", answer: "6", solutionMd: "k=30; y=30/5=6." },
    { id: "l10-mp-5", skillId: "function-notation", context: "mixedPractice", prompt: "f(x) = 3x + 1. Find f(6).", answer: "19", solutionMd: "3(6)+1=19." },
    { id: "l10-mp-6", skillId: "linear-equations", context: "mixedPractice", prompt: "Solve: 5x - 3 = 2x + 12", answer: "x = 5", solutionMd: "3x-3=12, 3x=15, x=5." },
    { id: "l10-mp-7", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: x⁵ · x⁻²", answer: "x³", solutionMd: "5-2=3." },
    { id: "l10-mp-8", skillId: "scientific-notation", context: "mixedPractice", prompt: "Divide: (6 × 10⁷) ÷ (3 × 10³)", answer: "2 × 10⁴", solutionMd: "6÷3=2; 7-3=4." },
    { id: "l10-mp-9", skillId: "angle-relationships", context: "mixedPractice", prompt: "Complementary angles: one is 51°. Find the other.", answer: "39°", solutionMd: "90-51=39." },
    { id: "l10-mp-10", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 12 mi to ft (1 mi = 5280 ft).", answer: "63,360 ft", solutionMd: "12×5280=63360." },
    { id: "l10-mp-11", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: -2(x + 3) + 3(x - 1)", answer: "x - 9", solutionMd: "-2x-6+3x-3 = x-9." },
    { id: "l10-mp-12", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 2³ + 3(5 - 2)", answer: "17", solutionMd: "8+3(3)=8+9=17." },
    { id: "l10-mp-13", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -8 - (-8)", answer: "0", solutionMd: "-8+8=0." },
  ],
};
