import { NextRequest, NextResponse } from "next/server";
import { getOrCreateLocalUser } from "@/lib/user";
import { recordAttempt } from "@/lib/mixedPractice";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { problemId, correct, context, lessonNumber } = body as {
    problemId: string;
    correct: boolean;
    context: string;
    lessonNumber: number;
  };

  if (!problemId || typeof correct !== "boolean" || !context || typeof lessonNumber !== "number") {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const user = await getOrCreateLocalUser();
  await recordAttempt(user.id, problemId, correct, context, lessonNumber);

  return NextResponse.json({ ok: true });
}
