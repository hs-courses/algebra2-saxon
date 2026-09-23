import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getOrCreateLocalUser } from "@/lib/user";

export async function GET() {
  const user = await getOrCreateLocalUser();
  const progress = await prisma.userProgress.findMany({
    where: { userId: user.id },
    include: { lesson: true },
    orderBy: { lesson: { number: "asc" } },
  });
  const completedNumbers = progress.filter((p) => p.completedAt).map((p) => p.lesson.number);
  const nextLessonNumber = completedNumbers.length > 0 ? Math.max(...completedNumbers) + 1 : 1;

  return NextResponse.json({ completedNumbers, nextLessonNumber });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lessonId, lessonPracticeScore } = body as { lessonId: string; lessonPracticeScore: number };

  if (!lessonId || typeof lessonPracticeScore !== "number") {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const user = await getOrCreateLocalUser();

  const progress = await prisma.userProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId } },
    create: { userId: user.id, lessonId, completedAt: new Date(), lessonPracticeScore },
    update: { completedAt: new Date(), lessonPracticeScore },
  });

  return NextResponse.json({ ok: true, progress });
}
