import { NextRequest, NextResponse } from "next/server";
import { getOrCreateUserByEmail } from "@/lib/user";
import { recordAttempt } from "@/lib/mixedPractice";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { problemId, correct, context, lessonNumber, email } = body as {
    problemId: string;
    correct: boolean;
    context: string;
    lessonNumber: number;
    email: string;
  };

  if (!problemId || typeof correct !== "boolean" || !context || typeof lessonNumber !== "number" || !email) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  try {
    const user = await getOrCreateUserByEmail(email);
    await recordAttempt(user.id, problemId, correct, context, lessonNumber);
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
