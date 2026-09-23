import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { getOrCreateLocalUser } from "@/lib/user";
import { selectMixedPractice } from "@/lib/mixedPractice";
import { LessonInstruction } from "@/components/LessonInstruction";
import { MixedPracticeSet } from "@/components/MixedPracticeSet";
import { STATIC_DEMO } from "@/lib/staticDemo";
import { authoredLessons, lessonByNumber } from "@/content/lessons/index";

const MIXED_PRACTICE_TARGET = 25;

export function generateStaticParams() {
  return authoredLessons.map((l) => ({ number: String(l.number) }));
}

export default async function LessonPage({ params }: { params: Promise<{ number: string }> }) {
  const { number } = await params;
  const lessonNumber = parseInt(number, 10);
  if (Number.isNaN(lessonNumber)) notFound();

  if (STATIC_DEMO) {
    const lesson = lessonByNumber(lessonNumber);
    if (!lesson || lesson.status !== "authored") notFound();

    return (
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Link href="/" className="mb-6 inline-block text-sm text-indigo-600">
          ← Dashboard
        </Link>
        <LessonInstruction
          title={lesson.title}
          lessonNumber={lesson.number}
          conceptMd={lesson.conceptMd ?? ""}
          workedExamples={lesson.workedExamples ?? []}
        />
        <MixedPracticeSet
          lessonId={lesson.id}
          lessonNumber={lesson.number}
          lessonPractice={lesson.lessonPractice ?? []}
          mixedPractice={lesson.mixedPractice ?? []}
          readOnly
        />
      </main>
    );
  }

  const lesson = await prisma.lesson.findUnique({ where: { number: lessonNumber } });
  if (!lesson || lesson.status !== "authored") notFound();

  const user = await getOrCreateLocalUser();

  const lessonPracticeProblems = await prisma.problem.findMany({
    where: { lessonId: lesson.id, context: "lessonPractice" },
  });

  const mixedPracticeIds = await selectMixedPractice(user.id, lessonNumber, lesson.newSkillId, MIXED_PRACTICE_TARGET);
  const mixedPracticeProblems = await prisma.problem.findMany({
    where: { id: { in: mixedPracticeIds } },
  });

  const workedExamples = lesson.workedExamplesJson ? JSON.parse(lesson.workedExamplesJson) : [];

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <Link href="/" className="mb-6 inline-block text-sm text-indigo-600">
        ← Dashboard
      </Link>
      <LessonInstruction
        title={lesson.title}
        lessonNumber={lesson.number}
        conceptMd={lesson.conceptMd ?? ""}
        workedExamples={workedExamples}
      />
      <MixedPracticeSet
        lessonId={lesson.id}
        lessonNumber={lesson.number}
        lessonPractice={lessonPracticeProblems}
        mixedPractice={mixedPracticeProblems}
      />
    </main>
  );
}
