"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ProblemCard } from "./ProblemCard";
import { getStoredEmail } from "@/lib/studentEmail";
import { getLocalCompletedLessons, markLessonCompleteLocally } from "@/lib/localProgress";

type ProblemView = {
  id: string;
  prompt: string;
  answer: string;
  solutionMd: string;
};

type Props = {
  lessonId: string;
  lessonNumber: number;
  lessonPractice: ProblemView[];
  mixedPractice: ProblemView[];
  readOnly?: boolean;
};

export function MixedPracticeSet({ lessonId, lessonNumber, lessonPractice, mixedPractice, readOnly = false }: Props) {
  const router = useRouter();
  const [results, setResults] = useState<Record<string, boolean>>({});
  const [completing, setCompleting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [hasEmail, setHasEmail] = useState(false);

  useEffect(() => {
    if (readOnly) {
      setCompleted(getLocalCompletedLessons().includes(lessonNumber));
    } else {
      setHasEmail(getStoredEmail() !== null);
    }
  }, [readOnly, lessonNumber]);

  const allProblems = useMemo(() => [...lessonPractice, ...mixedPractice], [lessonPractice, mixedPractice]);
  const attemptedCount = Object.keys(results).length;
  const allAttempted = attemptedCount === allProblems.length;
  const lessonPracticeScore = useMemo(() => {
    const attempted = lessonPractice.filter((p) => results[p.id] !== undefined);
    if (attempted.length === 0) return 0;
    const correct = attempted.filter((p) => results[p.id]).length;
    return correct / lessonPractice.length;
  }, [lessonPractice, results]);

  function handleGraded(problemId: string, correct: boolean) {
    setResults((r) => ({ ...r, [problemId]: correct }));
  }

  async function completeLesson() {
    if (readOnly) {
      markLessonCompleteLocally(lessonNumber);
      setCompleted(true);
      return;
    }
    const email = getStoredEmail();
    if (!email) return;
    setCompleting(true);
    await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, lessonPracticeScore, email }),
    });
    setCompleting(false);
    setCompleted(true);
    router.refresh();
  }

  return (
    <div className="space-y-8">
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-900">Lesson Practice</h2>
        <div className="space-y-3">
          {lessonPractice.map((p) => (
            <ProblemCard
              key={p.id}
              problemId={p.id}
              prompt={p.prompt}
              answer={p.answer}
              solutionMd={p.solutionMd}
              lessonNumber={lessonNumber}
              context="lessonPractice"
              onGraded={(correct) => handleGraded(p.id, correct)}
              persist={!readOnly}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-1 text-lg font-semibold text-slate-900">Mixed Practice</h2>
        <p className="mb-3 text-sm text-slate-500">
          Pulls from today&apos;s new skill plus everything learned so far — this is how Saxon keeps old skills sharp.
        </p>
        <div className="space-y-3">
          {mixedPractice.map((p) => (
            <ProblemCard
              key={p.id}
              problemId={p.id}
              prompt={p.prompt}
              answer={p.answer}
              solutionMd={p.solutionMd}
              lessonNumber={lessonNumber}
              context="mixedPractice"
              onGraded={(correct) => handleGraded(p.id, correct)}
              persist={!readOnly}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-3 border-t border-slate-200 pt-6">
        <button
          onClick={completeLesson}
          disabled={!allAttempted || completing || completed || (!readOnly && !hasEmail)}
          className="rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white disabled:opacity-40"
        >
          {completed ? "Lesson Complete ✓" : completing ? "Saving…" : "Mark Lesson Complete"}
        </button>
        {!allAttempted && (
          <span className="text-sm text-slate-500">
            {attemptedCount}/{allProblems.length} problems attempted
          </span>
        )}
        {allAttempted && !readOnly && !hasEmail && (
          <span className="text-sm text-amber-600">Enter your email in the sidebar to save this.</span>
        )}
        {readOnly && (
          <span className="text-xs text-slate-400">Saved to this browser only.</span>
        )}
      </div>
    </div>
  );
}
