import { test05, test05Problems } from "./test-05";
import { test10, test10Problems } from "./test-10";
import { TestBlockDef, ProblemDef } from "../types";

export const ALL_TEST_BLOCKS: TestBlockDef[] = [test05, test10];
export const ALL_TEST_PROBLEMS: ProblemDef[] = [...test05Problems, ...test10Problems];

export function testBlockAfterLesson(n: number): TestBlockDef | undefined {
  return ALL_TEST_BLOCKS.find((t) => t.afterLessonNumber === n);
}
