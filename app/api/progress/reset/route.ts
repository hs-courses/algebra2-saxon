import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { getOrCreateLocalUser } from "@/lib/user";

export async function DELETE() {
  const user = await getOrCreateLocalUser();

  await prisma.attempt.deleteMany({ where: { userId: user.id } });
  await prisma.skillMastery.deleteMany({ where: { userId: user.id } });
  await prisma.userProgress.deleteMany({ where: { userId: user.id } });

  return NextResponse.json({ ok: true });
}
