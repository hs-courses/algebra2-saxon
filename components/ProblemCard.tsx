"use client";

import { useState } from "react";

type Props = {
  problemId: string;
  prompt: string;
  answer: string;
  solutionMd: string;
  lessonNumber: number;
  context: "lessonPractice" | "mixedPractice" | "test";
  onGraded?: (correct: boolean) => void;
  persist?: boolean;
};

export function ProblemCard({ problemId, prompt, answer, solutionMd, lessonNumber, context, onGraded, persist = true }: Props) {
  const [input, setInput] = useState("");
  const [graded, setGraded] = useState<"correct" | "incorrect" | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  async function grade() {
    const correct = normalize(input) === normalize(answer);
    setGraded(correct ? "correct" : "incorrect");
    onGraded?.(correct);
    if (!persist) return;
    try {
      await fetch("/api/attempt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId, correct, context, lessonNumber }),
      });
    } catch {
      // Best-effort persistence — grading already happened client-side above.
    }
  }

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <p className="mb-3 font-medium text-slate-800">{prompt}</p>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={graded !== null}
          placeholder="Your answer"
          className="flex-1 rounded border border-slate-300 px-3 py-1.5 text-sm disabled:bg-slate-50"
        />
        {graded === null ? (
          <button
            onClick={grade}
            disabled={input.trim() === ""}
            className="rounded bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white disabled:opacity-40"
          >
            Check
          </button>
        ) : (
          <span
            className={`rounded px-3 py-1.5 text-sm font-semibold ${
              graded === "correct" ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
            }`}
          >
            {graded === "correct" ? "Correct" : `Answer: ${answer}`}
          </span>
        )}
      </div>
      {graded !== null && (
        <button
          onClick={() => setShowSolution((s) => !s)}
          className="mt-2 text-xs text-indigo-600 underline"
        >
          {showSolution ? "Hide solution" : "Show solution"}
        </button>
      )}
      {showSolution && <p className="mt-2 text-sm text-slate-600">{solutionMd}</p>}
    </div>
  );
}

function normalize(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, " ");
}
