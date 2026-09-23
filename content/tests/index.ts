import { test05, test05Problems } from "./test-05";
import { test10, test10Problems } from "./test-10";
import { test15, test15Problems } from "./test-15";
import { test20, test20Problems } from "./test-20";
import { TestBlockDef, ProblemDef } from "../types";

export const ALL_TEST_BLOCKS: TestBlockDef[] = [test05, test10, test15, test20];
export const ALL_TEST_PROBLEMS: ProblemDef[] = [
  ...test05Problems,
  ...test10Problems,
  ...test15Problems,
  ...test20Problems,
];

export function testBlockAfterLesson(n: number): TestBlockDef | undefined {
  return ALL_TEST_BLOCKS.find((t) => t.afterLessonNumber === n);
}
