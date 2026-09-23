import { SkillDef } from "./types";

/**
 * Skills introduced by lessons 1-10 (fully authored) plus lessons 11-30 (skeleton titles
 * only, see lessons/skeleton.ts). Order follows Saxon Algebra 2 (3rd ed.) lesson sequence —
 * do not reorder; Saxon's spiral depends on this exact introduction order.
 */
export const SKILLS: SkillDef[] = [
  { id: "signed-numbers", name: "Signed Numbers & Absolute Value", description: "Add, subtract, multiply, divide positive and negative numbers; absolute value.", firstLessonNum: 1 },
  { id: "order-of-ops", name: "Order of Operations", description: "Evaluate expressions using PEMDAS, including nested grouping symbols.", firstLessonNum: 2 },
  { id: "distributive-like-terms", name: "Distributive Property & Like Terms", description: "Distribute over parentheses and combine like terms to simplify expressions.", firstLessonNum: 3 },
  { id: "rates-unit-conversion", name: "Ratios, Rates & Unit Conversion", description: "Use unit multipliers to convert between units and solve rate problems.", firstLessonNum: 4 },
  { id: "angle-relationships", name: "Angle Relationships", description: "Complementary, supplementary, and vertical angle pairs; solve for unknown angles.", firstLessonNum: 5 },
  { id: "scientific-notation", name: "Scientific Notation", description: "Convert between standard and scientific notation; multiply/divide in scientific notation.", firstLessonNum: 6 },
  { id: "laws-of-exponents", name: "Laws of Exponents", description: "Product, quotient, and power rules for exponents; zero and negative exponents.", firstLessonNum: 7 },
  { id: "linear-equations", name: "Solving Linear Equations", description: "Solve multi-step linear equations in one variable, including variables on both sides.", firstLessonNum: 8 },
  { id: "function-notation", name: "Function Notation", description: "Evaluate functions given in f(x) notation; identify domain values.", firstLessonNum: 9 },
  { id: "variation", name: "Direct & Inverse Variation", description: "Write and solve direct (y = kx) and inverse (y = k/x) variation equations.", firstLessonNum: 10 },
  { id: "systems-graphing", name: "Systems of Equations by Graphing", description: "Solve systems of two linear equations by graphing and finding the intersection.", firstLessonNum: 11 },
  { id: "systems-substitution", name: "Systems of Equations by Substitution", description: "Solve systems by isolating one variable and substituting into the other equation.", firstLessonNum: 12 },
  { id: "systems-elimination", name: "Systems of Equations by Elimination", description: "Solve systems by adding/subtracting equations to cancel a variable.", firstLessonNum: 13 },
  { id: "polynomial-add-sub", name: "Polynomial Addition & Subtraction", description: "Add and subtract polynomials by combining like terms.", firstLessonNum: 14 },
  { id: "polynomial-multiply", name: "Polynomial Multiplication", description: "Multiply polynomials using the distributive property and FOIL.", firstLessonNum: 15 },
  { id: "factoring-gcf", name: "Factoring: Greatest Common Factor", description: "Factor out the greatest common factor from a polynomial.", firstLessonNum: 16 },
  { id: "factoring-trinomials", name: "Factoring Trinomials", description: "Factor trinomials of the form x² + bx + c.", firstLessonNum: 17 },
  { id: "difference-of-squares", name: "Difference of Squares", description: "Recognize and factor a² - b² = (a+b)(a-b).", firstLessonNum: 18 },
  { id: "quadratics-factoring", name: "Solving Quadratics by Factoring", description: "Use the zero product property to solve factored quadratic equations.", firstLessonNum: 19 },
  { id: "quadratics-graphing", name: "Graphing Quadratic Functions", description: "Find the vertex, axis of symmetry, and intercepts of a parabola.", firstLessonNum: 20 },
  { id: "quadratic-formula", name: "The Quadratic Formula", description: "Solve any quadratic equation using the quadratic formula and interpret the discriminant.", firstLessonNum: 21 },
  { id: "complex-numbers", name: "Complex Numbers", description: "Simplify, add, subtract, and multiply complex numbers using i² = -1.", firstLessonNum: 22 },
  { id: "radical-simplify", name: "Radical Expressions & Simplification", description: "Simplify radicals by factoring out perfect squares; combine like radicals.", firstLessonNum: 23 },
  { id: "radical-equations", name: "Solving Radical Equations", description: "Isolate and square to solve equations with a variable under a radical, checking for extraneous roots.", firstLessonNum: 24 },
  { id: "rational-simplify", name: "Rational Expressions: Simplifying", description: "Factor and cancel common factors to simplify rational expressions.", firstLessonNum: 25 },
  { id: "rational-muldiv", name: "Rational Expressions: Multiply & Divide", description: "Multiply rational expressions and divide by multiplying by the reciprocal.", firstLessonNum: 26 },
];

export function skillById(id: string): SkillDef {
  const s = SKILLS.find((s) => s.id === id);
  if (!s) throw new Error(`Unknown skill id: ${id}`);
  return s;
}
