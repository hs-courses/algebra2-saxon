import { LessonDef } from "../types";

export const lesson01: LessonDef = {
  id: "lesson-01",
  number: 1,
  title: "Signed Numbers & Absolute Value",
  status: "authored",
  newSkillId: "signed-numbers",
  conceptMd: `
Every real number has a **sign** (positive or negative) and a **magnitude** (its distance from zero, called absolute value, written \`|x|\`).

**Adding signed numbers**
- Same signs: add magnitudes, keep the sign. \`(-4) + (-7) = -11\`
- Different signs: subtract magnitudes, keep the sign of the larger magnitude. \`(-9) + 5 = -4\`

**Subtracting signed numbers**
Subtracting is adding the opposite: \`a - b = a + (-b)\`. So \`3 - (-8) = 3 + 8 = 11\`.

**Multiplying and dividing signed numbers**
- Same signs → positive result.
- Different signs → negative result.

**Absolute value** strips the sign: \`|-6| = 6\`, \`|6| = 6\`.
`,
  workedExamples: [
    {
      prompt: "Simplify: -8 + 3",
      solutionSteps: [
        "Different signs, subtract magnitudes: 8 - 3 = 5",
        "Keep the sign of the larger magnitude (-8), so result is negative.",
        "Answer: -5",
      ],
    },
    {
      prompt: "Simplify: -6 - (-10)",
      solutionSteps: [
        "Subtracting a negative is adding a positive: -6 - (-10) = -6 + 10",
        "Different signs, subtract magnitudes: 10 - 6 = 4",
        "Keep sign of larger magnitude (10, positive).",
        "Answer: 4",
      ],
    },
    {
      prompt: "Simplify: (-5)(-3) + |-7|",
      solutionSteps: [
        "(-5)(-3): same signs, positive result = 15",
        "|-7| = 7",
        "15 + 7 = 22",
      ],
    },
  ],
  lessonPractice: [
    { id: "l1-lp-1", skillId: "signed-numbers", context: "lessonPractice", prompt: "Simplify: -12 + 5", answer: "-7", solutionMd: "Different signs; 12-5=7; keep sign of larger magnitude (-12) → -7." },
    { id: "l1-lp-2", skillId: "signed-numbers", context: "lessonPractice", prompt: "Simplify: 9 - (-4)", answer: "13", solutionMd: "9 - (-4) = 9 + 4 = 13." },
    { id: "l1-lp-3", skillId: "signed-numbers", context: "lessonPractice", prompt: "Simplify: (-6)(4)", answer: "-24", solutionMd: "Different signs → negative. 6×4=24 → -24." },
    { id: "l1-lp-4", skillId: "signed-numbers", context: "lessonPractice", prompt: "Simplify: -20 ÷ (-5)", answer: "4", solutionMd: "Same signs → positive. 20÷5=4." },
    { id: "l1-lp-5", skillId: "signed-numbers", context: "lessonPractice", prompt: "Simplify: |-9| + |4|", answer: "13", solutionMd: "|-9|=9, |4|=4, 9+4=13." },
  ],
  mixedPractice: [
    { id: "l1-mp-1", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -15 + 8", answer: "-7", solutionMd: "Different signs; 15-8=7; sign of -15 → -7." },
    { id: "l1-mp-2", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -3 - 9", answer: "-12", solutionMd: "-3 + (-9) = -12." },
    { id: "l1-mp-3", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: (-7)(-6)", answer: "42", solutionMd: "Same signs → positive. 7×6=42." },
  ],
};
