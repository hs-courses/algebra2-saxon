import { prisma } from "@/lib/db";

const NEW_SKILL_MIN_PROBLEMS = 4;
const RECENT_LESSON_WINDOW = 4; // lessons back that still count as "recent" (higher base weight)
const RECENT_WEIGHT_BONUS = 1.5;

/**
 * Weighted-random selection of mixed-practice problems for lesson N, mimicking Saxon's
 * distributed practice: always includes the lesson's new skill, then samples from all
 * previously-taught skills weighted by staleness (lessons since last seen) and by
 * inverse accuracy (struggled skills resurface more often).
 */
export async function selectMixedPractice(userId: string, lessonNumber: number, newSkillId: string | null, targetCount: number) {
  const problems: string[] = [];

  if (newSkillId) {
    const newSkillProblems = await prisma.problem.findMany({
      where: { skillId: newSkillId, context: "mixedPractice" },
    });
    const chosen = shuffle(newSkillProblems).slice(0, Math.min(NEW_SKILL_MIN_PROBLEMS, newSkillProblems.length));
    problems.push(...chosen.map((p) => p.id));
  }

  const priorSkills = await prisma.skill.findMany({
    where: { firstLessonNum: { lt: lessonNumber } },
  });
  if (priorSkills.length === 0) {
    return dedupe(problems).slice(0, targetCount);
  }

  const masteryRows = await prisma.skillMastery.findMany({ where: { userId } });
  const masteryBySkill = new Map(masteryRows.map((m) => [m.skillId, m]));

  const weighted = priorSkills.map((skill) => {
    const mastery = masteryBySkill.get(skill.id);
    const staleness = lessonNumber - (mastery?.lastSeenLessonNum ?? skill.firstLessonNum);
    const accuracy = mastery && mastery.exposureCount > 0 ? mastery.correctCount / mastery.exposureCount : 0.5;
    const strugglingBonus = 1 + (1 - accuracy); // lower accuracy -> higher weight
    const recentBonus = lessonNumber - skill.firstLessonNum <= RECENT_LESSON_WINDOW ? RECENT_WEIGHT_BONUS : 1;
    const weight = (1 + staleness * 0.3) * strugglingBonus * recentBonus;
    return { skill: skill.id, weight };
  });

  const remaining = Math.max(0, targetCount - problems.length);
  const pickedSkillIds = weightedSample(weighted, remaining);

  for (const skillId of pickedSkillIds) {
    const candidates = await prisma.problem.findMany({
      where: { skillId, context: "mixedPractice" },
    });
    if (candidates.length === 0) continue;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    problems.push(pick.id);
  }

  return dedupe(problems).slice(0, targetCount);
}

export async function recordAttempt(userId: string, problemId: string, correct: boolean, context: string, lessonNumber: number) {
  const problem = await prisma.problem.findUniqueOrThrow({ where: { id: problemId } });

  await prisma.attempt.create({
    data: { userId, problemId, correct, context },
  });

  await prisma.skillMastery.upsert({
    where: { userId_skillId: { userId, skillId: problem.skillId } },
    create: {
      userId,
      skillId: problem.skillId,
      exposureCount: 1,
      correctCount: correct ? 1 : 0,
      lastSeenLessonNum: lessonNumber,
    },
    update: {
      exposureCount: { increment: 1 },
      correctCount: { increment: correct ? 1 : 0 },
      lastSeenLessonNum: lessonNumber,
    },
  });
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function dedupe(arr: string[]): string[] {
  return Array.from(new Set(arr));
}

function weightedSample<T>(items: { skill: T; weight: number }[], count: number): T[] {
  const pool = [...items];
  const result: T[] = [];
  for (let i = 0; i < count && pool.length > 0; i++) {
    const totalWeight = pool.reduce((sum, p) => sum + p.weight, 0);
    let r = Math.random() * totalWeight;
    let idx = 0;
    for (; idx < pool.length; idx++) {
      r -= pool[idx].weight;
      if (r <= 0) break;
    }
    const chosen = pool.splice(Math.min(idx, pool.length - 1), 1)[0];
    result.push(chosen.skill);
  }
  return result;
}
