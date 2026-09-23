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
];

export function skillById(id: string): SkillDef {
  const s = SKILLS.find((s) => s.id === id);
  if (!s) throw new Error(`Unknown skill id: ${id}`);
  return s;
}
