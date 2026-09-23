import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getOrCreateUserByEmail } from "@/lib/user";

export async function DELETE(req: NextRequest) {
  const body = await req.json().catch(() => ({}));
  const { email } = body as { email?: string };

  if (!email) {
    return NextResponse.json({ error: "Missing email" }, { status: 400 });
  }

  let user;
  try {
    user = await getOrCreateUserByEmail(email);
  } catch {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  await prisma.attempt.deleteMany({ where: { userId: user.id } });
  await prisma.skillMastery.deleteMany({ where: { userId: user.id } });
  await prisma.userProgress.deleteMany({ where: { userId: user.id } });

  return NextResponse.json({ ok: true });
}
