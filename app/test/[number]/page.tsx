import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import { TestRunner } from "@/components/TestRunner";
import { STATIC_DEMO } from "@/lib/staticDemo";
import { ALL_TEST_BLOCKS, testBlockAfterLesson } from "@/content/tests/index";
import { problemsByIds } from "@/content/problems";

export function generateStaticParams() {
  return ALL_TEST_BLOCKS.map((t) => ({ number: String(t.afterLessonNumber) }));
}

export default async function TestPage({ params }: { params: Promise<{ number: string }> }) {
  const { number } = await params;
  const afterLessonNumber = parseInt(number, 10);
  if (Number.isNaN(afterLessonNumber)) notFound();

  if (STATIC_DEMO) {
    const testBlock = testBlockAfterLesson(afterLessonNumber);
    if (!testBlock) notFound();
    const problems = problemsByIds(testBlock.problemIds);

    return (
      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
        <Link href="/" className="mb-6 inline-block text-sm text-indigo-600">
          ← Dashboard
        </Link>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">{testBlock.title}</h1>
        <p className="mb-6 text-sm text-slate-500">
          Cumulative test — covers everything taught through Lesson {afterLessonNumber}.
        </p>
        <TestRunner lessonNumber={afterLessonNumber} problems={problems} persist={false} />
      </main>
    );
  }

  const testBlock = await prisma.testBlock.findUnique({ where: { afterLessonNumber } });
  if (!testBlock) notFound();

  const problemIds: string[] = JSON.parse(testBlock.problemIdsJson);
  const problems = await prisma.problem.findMany({ where: { id: { in: problemIds } } });

  return (
    <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10">
      <Link href="/" className="mb-6 inline-block text-sm text-indigo-600">
        ← Dashboard
      </Link>
      <h1 className="mb-2 text-2xl font-bold text-slate-900">{testBlock.title}</h1>
      <p className="mb-6 text-sm text-slate-500">
        Cumulative test — covers everything taught through Lesson {afterLessonNumber}.
      </p>
      <TestRunner lessonNumber={afterLessonNumber} problems={problems} />
    </main>
  );
}
