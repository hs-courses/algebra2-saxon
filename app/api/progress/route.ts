import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getOrCreateUserByEmail } from "@/lib/user";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { lessonId, lessonPracticeScore, email } = body as {
    lessonId: string;
    lessonPracticeScore: number;
    email: string;
  };

  if (!lessonId || typeof lessonPracticeScore !== "number" || !email) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  let user;
  try {
    user = await getOrCreateUserByEmail(email);
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const progress = await prisma.userProgress.upsert({
    where: { userId_lessonId: { userId: user.id, lessonId } },
    create: { userId: user.id, lessonId, completedAt: new Date(), lessonPracticeScore },
    update: { completedAt: new Date(), lessonPracticeScore },
  });

  return NextResponse.json({ ok: true, progress });
}
