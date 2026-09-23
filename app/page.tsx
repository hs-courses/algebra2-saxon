import Link from "next/link";
import { prisma } from "@/lib/db";
import { getOrCreateLocalUser } from "@/lib/user";
import { seedDatabase } from "@/lib/seed";
import { ProgressTrack } from "@/components/ProgressTrack";
import { ALL_LESSONS } from "@/content/lessons/index";
import { ALL_TEST_BLOCKS } from "@/content/tests/index";
import { STATIC_DEMO } from "@/lib/staticDemo";

export default async function Dashboard() {
  let completedNumbers: number[] = [];
  let nextLessonNumber = 1;

  if (!STATIC_DEMO) {
    const skillCount = await prisma.skill.count();
    if (skillCount === 0) {
      await seedDatabase();
    }

    const user = await getOrCreateLocalUser();
    const progress = await prisma.userProgress.findMany({
      where: { userId: user.id, completedAt: { not: null } },
      include: { lesson: true },
    });
    completedNumbers = progress.map((p) => p.lesson.number);
    nextLessonNumber = completedNumbers.length > 0 ? Math.max(...completedNumbers) + 1 : 1;
  }
  const authoredCount = ALL_LESSONS.filter((l) => l.status === "authored").length;

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <h1 className="text-3xl font-bold text-slate-900">Algebra 2 — Saxon Method</h1>
      <p className="mt-2 text-slate-600">
        One new idea per lesson, mixed review every day, cumulative test every 5 lessons.
      </p>
      {STATIC_DEMO && (
        <p className="mt-3 rounded border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-800">
          Static demo build — all lessons are unlocked for browsing, but progress/scores aren&apos;t saved. Run locally
          (see README) for the full app.
        </p>
      )}

      <div className="mt-8 rounded-lg border border-indigo-200 bg-indigo-50 p-5">
        <p className="text-sm font-medium text-indigo-700">Next up</p>
        <h2 className="mt-1 text-xl font-semibold text-indigo-900">
          {nextLessonNumber <= authoredCount ? `Lesson ${nextLessonNumber}` : "All authored lessons complete"}
        </h2>
        {nextLessonNumber <= authoredCount && (
          <Link
            href={`/lesson/${nextLessonNumber}`}
            className="mt-3 inline-block rounded bg-indigo-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Start Lesson {nextLessonNumber}
          </Link>
        )}
      </div>

      <div className="mt-10">
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Course Progress</h2>
        <ProgressTrack
          totalLessons={ALL_LESSONS.length}
          completedNumbers={completedNumbers}
          currentNumber={nextLessonNumber}
          testAfterLessons={ALL_TEST_BLOCKS.map((t) => t.afterLessonNumber)}
        />
        <p className="mt-3 text-xs text-slate-400">
          Lessons 1-{authoredCount} are fully authored. Later lessons are planned but not yet written.
        </p>
      </div>
    </main>
  );
}
