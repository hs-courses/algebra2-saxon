"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { STATIC_DEMO } from "@/lib/staticDemo";
import { getLocalCompletedLessons, onLocalProgressChange, resetLocalProgress } from "@/lib/localProgress";
import { getStoredEmail, setStoredEmail } from "@/lib/studentEmail";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  const [localCompleted, setLocalCompleted] = useState<number[]>([]);
  const [email, setEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    if (!STATIC_DEMO) return;
    setLocalCompleted(getLocalCompletedLessons());
    return onLocalProgressChange(() => setLocalCompleted(getLocalCompletedLessons()));
  }, []);

  useEffect(() => {
    if (STATIC_DEMO) return;
    setEmail(getStoredEmail());
  }, []);

  function saveEmail() {
    const trimmed = emailInput.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setEmailError(true);
      return;
    }
    setStoredEmail(trimmed);
    setEmail(trimmed);
    setEmailError(false);
    router.refresh();
  }

  const completed = new Set(STATIC_DEMO ? localCompleted : completedNumbers);
  const testSet = new Set(testAfterLessons);

  async function resetProgress() {
    if (!window.confirm("Reset all progress? This clears completed lessons, attempt history, and mastery data.")) {
      return;
    }
    setResetting(true);
    if (STATIC_DEMO) {
      resetLocalProgress();
      setResetting(false);
      router.push("/");
      return;
    }
    await fetch("/api/progress/reset", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
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

      {!STATIC_DEMO && !email && (
        <div className="border-b border-amber-200 bg-amber-50 p-3">
          <p className="mb-2 text-xs font-medium text-amber-900">Enter your email to save progress</p>
          <div className="flex gap-1.5">
            <input
              type="email"
              value={emailInput}
              onChange={(e) => {
                setEmailInput(e.target.value);
                setEmailError(false);
              }}
              onKeyDown={(e) => e.key === "Enter" && saveEmail()}
              placeholder="you@example.com"
              className="min-w-0 flex-1 rounded border border-amber-300 px-2 py-1 text-xs"
            />
            <button
              onClick={saveEmail}
              className="shrink-0 rounded bg-amber-600 px-2 py-1 text-xs font-medium text-white"
            >
              Save
            </button>
          </div>
          {emailError && <p className="mt-1 text-xs text-rose-600">Enter a valid email.</p>}
        </div>
      )}
      {!STATIC_DEMO && email && (
        <div className="border-b border-slate-100 px-4 py-2 text-xs text-slate-500">Signed in as {email}</div>
      )}

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
