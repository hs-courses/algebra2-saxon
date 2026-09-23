import { LessonDef } from "../types";

export const lesson07: LessonDef = {
  id: "lesson-07",
  number: 7,
  title: "Laws of Exponents",
  status: "authored",
  newSkillId: "laws-of-exponents",
  conceptMd: `
- **Product rule**: \`x^a · x^b = x^(a+b)\`
- **Quotient rule**: \`x^a ÷ x^b = x^(a-b)\`
- **Power rule**: \`(x^a)^b = x^(ab)\`
- **Zero exponent**: \`x^0 = 1\` (x ≠ 0)
- **Negative exponent**: \`x^-n = 1/x^n\`
`,
  workedExamples: [
    { prompt: "Simplify: x⁴ · x³", solutionSteps: ["Add exponents: 4+3=7", "x⁷"] },
    { prompt: "Simplify: y⁸ ÷ y³", solutionSteps: ["Subtract exponents: 8-3=5", "y⁵"] },
    { prompt: "Simplify: (x²)³ · x⁻¹", solutionSteps: ["(x²)³ = x⁶", "x⁶ · x⁻¹ = x⁵"] },
  ],
  lessonPractice: [
    { id: "l7-lp-1", skillId: "laws-of-exponents", context: "lessonPractice", prompt: "Simplify: x⁵ · x²", answer: "x⁷", solutionMd: "5+2=7." },
    { id: "l7-lp-2", skillId: "laws-of-exponents", context: "lessonPractice", prompt: "Simplify: y⁹ ÷ y⁴", answer: "y⁵", solutionMd: "9-4=5." },
    { id: "l7-lp-3", skillId: "laws-of-exponents", context: "lessonPractice", prompt: "Simplify: (x³)⁴", answer: "x¹²", solutionMd: "3×4=12." },
    { id: "l7-lp-4", skillId: "laws-of-exponents", context: "lessonPractice", prompt: "Simplify: x⁻²", answer: "1/x²", solutionMd: "Negative exponent → reciprocal." },
    { id: "l7-lp-5", skillId: "laws-of-exponents", context: "lessonPractice", prompt: "Simplify: 7x⁰", answer: "7", solutionMd: "x⁰=1, so 7×1=7." },
  ],
  mixedPractice: [
    { id: "l7-mp-1", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: x⁶ · x⁵", answer: "x¹¹", solutionMd: "6+5=11." },
    { id: "l7-mp-2", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: y¹⁰ ÷ y²", answer: "y⁸", solutionMd: "10-2=8." },
    { id: "l7-mp-3", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: (x²)⁵", answer: "x¹⁰", solutionMd: "2×5=10." },
    { id: "l7-mp-4", skillId: "laws-of-exponents", context: "mixedPractice", prompt: "Simplify: x⁻³ · x⁵", answer: "x²", solutionMd: "-3+5=2." },
    { id: "l7-mp-5", skillId: "scientific-notation", context: "mixedPractice", prompt: "Write 720,000 in scientific notation.", answer: "7.2 × 10⁵", solutionMd: "Move decimal 5 places." },
    { id: "l7-mp-6", skillId: "angle-relationships", context: "mixedPractice", prompt: "Complementary angles: one is 19°. Find the other.", answer: "71°", solutionMd: "90-19=71." },
    { id: "l7-mp-7", skillId: "rates-unit-conversion", context: "mixedPractice", prompt: "A cyclist rides 45 mi in 3 hr. Rate?", answer: "15 mph", solutionMd: "45/3=15." },
    { id: "l7-mp-8", skillId: "distributive-like-terms", context: "mixedPractice", prompt: "Simplify: -3(x - 2) + x", answer: "-2x + 6", solutionMd: "-3x+6+x = -2x+6." },
    { id: "l7-mp-9", skillId: "order-of-ops", context: "mixedPractice", prompt: "Evaluate: 2 + 4(3² - 5)", answer: "18", solutionMd: "3²=9; 9-5=4; 4(4)=16; 2+16=18." },
    { id: "l7-mp-10", skillId: "signed-numbers", context: "mixedPractice", prompt: "Simplify: -5 × 4 + 3", answer: "-17", solutionMd: "-20+3=-17." },
  ],
};
