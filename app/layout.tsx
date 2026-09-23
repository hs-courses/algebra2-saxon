import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { prisma } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { AppShell } from "@/components/AppShell";
import { ALL_LESSONS } from "@/content/lessons/index";
import { ALL_TEST_BLOCKS } from "@/content/tests/index";
import { STATIC_DEMO } from "@/lib/staticDemo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Algebra 2 — Saxon Method",
  description: "Incremental Algebra 2 instruction and practice following the Saxon Math method.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  // Static GH Pages export has no server/DB at runtime — unlock every authored lesson
  // instead of gating on progress that can never be recorded there.
  let completedNumbers: number[] = [];
  let nextLessonNumber = STATIC_DEMO ? Number.MAX_SAFE_INTEGER : 1;

  if (!STATIC_DEMO) {
    const user = await getSessionUser();
    if (user) {
      const progress = await prisma.userProgress.findMany({
        where: { userId: user.id, completedAt: { not: null } },
        include: { lesson: true },
      });
      completedNumbers = progress.map((p) => p.lesson.number);
      nextLessonNumber = completedNumbers.length > 0 ? Math.max(...completedNumbers) + 1 : 1;
    }
  }

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="h-full bg-slate-50">
        <AppShell
          sidebarProps={{
            lessons: ALL_LESSONS.map((l) => ({ number: l.number, title: l.title, status: l.status })),
            testAfterLessons: ALL_TEST_BLOCKS.map((t) => t.afterLessonNumber),
            completedNumbers,
            nextLessonNumber,
          }}
        >
          {children}
        </AppShell>
      </body>
    </html>
  );
}
