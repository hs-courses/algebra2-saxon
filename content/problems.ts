import { authoredLessons } from "./lessons/index";
import { ALL_TEST_PROBLEMS } from "./tests/index";
import { ProblemDef } from "./types";

const problemMap: Map<string, ProblemDef> = new Map();

for (const lesson of authoredLessons) {
  for (const p of [...(lesson.lessonPractice ?? []), ...(lesson.mixedPractice ?? [])]) {
    problemMap.set(p.id, p);
  }
}
for (const p of ALL_TEST_PROBLEMS) {
  problemMap.set(p.id, p);
}

export function problemsByIds(ids: string[]): ProblemDef[] {
  return ids.map((id) => problemMap.get(id)).filter((p): p is ProblemDef => p !== undefined);
}
