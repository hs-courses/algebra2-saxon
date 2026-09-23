import { LessonDef } from "../types";

export const lesson04: LessonDef = {
  id: "lesson-04",
  number: 4,
  title: "Ratios, Rates & Unit Conversion",
  status: "authored",
  newSkillId: "rates-unit-conversion",
  conceptMd: `
A **unit multiplier** is a fraction equal to 1 that swaps units, e.g. \`(1 mi)/(5280 ft)\` or \`(5280 ft)/(1 mi)\`. Multiply your quantity by unit multipliers, chosen so unwanted units cancel diagonally, leaving the target unit.

**Rate problems**: a rate is a ratio of two different units (e.g. miles/hour). Set up as a proportion or chain unit multipliers to convert.
`,
  workedExamples: [
    {
      prompt: "Convert 3 miles to feet (1 mile = 5280 ft).",
      solutionSteps: ["3 mi × (5280 ft / 1 mi)", "mi cancels", "3 × 5280 = 15,840 ft"],
    },
    {
      prompt: "A car travels 240 miles in 4 hours. Find the rate in miles per hour.",
      solutionSteps: ["rate = distance/time", "240 mi / 4 hr = 60 mi/hr"],
    },
    {
      prompt: "Convert 90 km/hr to m/s (1 km = 1000 m, 1 hr = 3600 s).",
      solutionSteps: ["90 km/hr × (1000 m/1 km) × (1 hr/3600 s)", "km and hr cancel", "90×1000/3600 = 25 m/s"],
    },
  ],
  lessonPractice: [
    { id: "l4-lp-1", skillId: "rates-unit-conversion", context: "lessonPractice", prompt: "Convert 5 ft to inches (1 ft = 12 in).", answer: "60 in", solutionMd: "5×12=60 in." },
    { id: "l4-lp-2", skillId: "rates-unit-conversion", context: "lessonPractice", prompt: "A train travels 300 miles in 5 hours. Find its rate in mph.", answer: "60 mph", solutionMd: "300/5=60 mph." },
    { id: "l4-lp-3", skillId: "rates-unit-conversion", context: "lessonPractice", prompt: "Convert 2 hours to minutes.", answer: "120 min", solutionMd: "2×60=120." },
    { id: "l4-lp-4", skillId: "rates-unit-conversion", context: "lessonPractice", prompt: "Convert 4 yards to feet (1 yd = 3 ft).", answer: "12 ft", solutionMd: "4×3=12." },
    { id: "l4-lp-5", skillId: "rates-unit-conversion", context: "lessonPractice", prompt: "At 15 mi/hr, how far in 3 hours?", answer: "45 mi", solutionMd: "15×3=45." },
  ],
  mixedPractice: [
    { id: "l4-mp-1", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 6 ft to inches.", answer: "72 in", solutionMd: "6×12=72." },
    { id: "l4-mp-2", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "A car goes 180 mi in 3 hr. Rate?", answer: "60 mph", solutionMd: "180/3=60." },
    { id: "l4-mp-3", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 3 min to seconds.", answer: "180 s", solutionMd: "3×60=180." },
    { id: "l4-mp-4", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "Convert 10 yd to ft.", answer: "30 ft", solutionMd: "10×3=30." },
    { id: "l4-mp-5", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: 2(x - 4) + 5x", answer: "7x - 8", solutionMd: "2x-8+5x = 7x-8." },
    { id: "l4-mp-6", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: -(3x - 2)", answer: "-3x + 2", solutionMd: "Distribute -1: -3x+2." },
    { id: "l4-mp-7", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 2 + 3×2²", answer: "14", solutionMd: "2²=4; 3×4=12; 2+12=14." },
    { id: "l4-mp-8", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -14 ÷ 7", answer: "-2", solutionMd: "Different signs → negative. 14÷7=2 → -2." },
  ],
};
