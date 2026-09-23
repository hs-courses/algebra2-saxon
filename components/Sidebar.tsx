"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type LessonNavItem = {
  number: number;
  title: string;
  status: "draft" | "authored";
};

type Props = {
  lessons: LessonNavItem[];
  testAfterLessons: number[];
  completedNumbers: number[];
  nextLessonNumber: number;
  onNavigate?: () => void;
};

export function Sidebar({ lessons, testAfterLessons, completedNumbers, nextLessonNumber, onNavigate }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const [resetting, setResetting] = useState(false);
  const completed = new Set(completedNumbers);
  const testSet = new Set(testAfterLessons);

  async function resetProgress() {
    if (!window.confirm("Reset all progress? This clears completed lessons, attempt history, and mastery data.")) {
      return;
    }
    setResetting(true);
    await fetch("/api/progress/reset", { method: "DELETE" });
    setResetting(false);
    router.push("/");
    router.refresh();
  }

  return (
    <nav className="flex h-full flex-col bg-white">
      <div className="border-b border-slate-200 p-4">
        <Link href="/" className="text-sm font-bold text-slate-900">
          Algebra 2 — Saxon
        </Link>
      </div>

      <div className="flex-1 overflow-y-auto p-2">
        {lessons.map((lesson) => {
          const isLocked = lesson.status !== "authored" || lesson.number > nextLessonNumber;
          const isDone = completed.has(lesson.number);
          const isActive = pathname === `/lesson/${lesson.number}`;
          const testAfter = testSet.has(lesson.number);

          return (
            <div key={lesson.number}>
              {isLocked ? (
                <div className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-slate-300">
                  <span className="w-5 shrink-0 text-right tabular-nums">{lesson.number}</span>
                  <span className="truncate">{lesson.title}</span>
                </div>
              ) : (
                <Link
                  href={`/lesson/${lesson.number}`}
                  onClick={onNavigate}
                  className={`flex items-center gap-2 rounded px-2 py-1.5 text-sm ${
                    isActive ? "bg-indigo-100 font-medium text-indigo-900" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span
                    className={`w-5 shrink-0 text-right tabular-nums ${isDone ? "text-emerald-600" : ""}`}
                  >
                    {isDone ? "✓" : lesson.number}
                  </span>
                  <span className="truncate">{lesson.title}</span>
                </Link>
              )}
              {testAfter && !isLocked && (
                <Link
                  href={`/test/${lesson.number}`}
                  onClick={onNavigate}
                  className={`ml-7 flex items-center gap-2 rounded px-2 py-1 text-xs font-medium ${
                    pathname === `/test/${lesson.number}`
                      ? "bg-amber-100 text-amber-900"
                      : "text-amber-700 hover:bg-amber-50"
                  }`}
                >
                  Test {lesson.number}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      <div className="border-t border-slate-200 p-3">
        <button
          onClick={resetProgress}
          disabled={resetting}
          className="w-full rounded border border-rose-200 px-3 py-1.5 text-xs font-medium text-rose-600 hover:bg-rose-50 disabled:opacity-40"
        >
          {resetting ? "Resetting…" : "Reset Progress"}
        </button>
      </div>
    </nav>
  );
}
