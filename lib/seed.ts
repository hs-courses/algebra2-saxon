import { prisma } from "@/lib/db";
import { SKILLS } from "@/content/skills";
import { ALL_LESSONS, authoredLessons } from "@/content/lessons/index";
import { ALL_TEST_BLOCKS, ALL_TEST_PROBLEMS } from "@/content/tests/index";
import { ProblemDef } from "@/content/types";

async function upsertProblem(p: ProblemDef, lessonId: string): Promise<void> {
  await prisma.problem.upsert({
    where: { id: p.id },
    create: {
      id: p.id,
      lessonId,
      skillId: p.skillId,
      context: p.context,
      prompt: p.prompt,
      answer: p.answer,
      choicesJson: p.choices ? JSON.stringify(p.choices) : null,
      solutionMd: p.solutionMd,
      difficulty: p.difficulty ?? 1,
    },
    update: {
      prompt: p.prompt,
      answer: p.answer,
      solutionMd: p.solutionMd,
    },
  });
}

export async function seedDatabase(): Promise<{ skills: number; lessons: number }> {
  for (const s of SKILLS) {
    await prisma.skill.upsert({
      where: { id: s.id },
      create: { id: s.id, name: s.name, description: s.description, firstLessonNum: s.firstLessonNum },
      update: { name: s.name, description: s.description, firstLessonNum: s.firstLessonNum },
    });
  }

  for (const l of ALL_LESSONS) {
    await prisma.lesson.upsert({
      where: { id: l.id },
      create: {
        id: l.id,
        number: l.number,
        title: l.title,
        status: l.status,
        conceptMd: l.conceptMd ?? null,
        newSkillId: l.newSkillId ?? null,
        workedExamplesJson: l.workedExamples ? JSON.stringify(l.workedExamples) : null,
      },
      update: {
        title: l.title,
        status: l.status,
        conceptMd: l.conceptMd ?? null,
        newSkillId: l.newSkillId ?? null,
        workedExamplesJson: l.workedExamples ? JSON.stringify(l.workedExamples) : null,
      },
    });
  }

  for (const l of authoredLessons) {
    for (const p of [...(l.lessonPractice ?? []), ...(l.mixedPractice ?? [])]) {
      await upsertProblem(p, l.id);
    }
  }

  // Test problems attach to the lesson at which they were introduced (their origin skill's first lesson).
  for (const p of ALL_TEST_PROBLEMS) {
    const originSkill = SKILLS.find((s) => s.id === p.skillId);
    const originLesson = authoredLessons.find((l) => l.number === originSkill?.firstLessonNum);
    if (originLesson) await upsertProblem(p, originLesson.id);
  }

  for (const t of ALL_TEST_BLOCKS) {
    await prisma.testBlock.upsert({
      where: { id: t.id },
      create: {
        id: t.id,
        afterLessonNumber: t.afterLessonNumber,
        title: t.title,
        problemIdsJson: JSON.stringify(t.problemIds),
      },
      update: {
        title: t.title,
        problemIdsJson: JSON.stringify(t.problemIds),
      },
    });
  }

  return { skills: SKILLS.length, lessons: ALL_LESSONS.length };
}
