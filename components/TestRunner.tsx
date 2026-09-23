"use client";

import { useMemo, useState } from "react";
import { ProblemCard } from "./ProblemCard";

type ProblemView = { id: string; prompt: string; answer: string; solutionMd: string };

type Props = {
  lessonNumber: number;
  problems: ProblemView[];
  persist?: boolean;
};

export function TestRunner({ lessonNumber, problems, persist = true }: Props) {
  const [results, setResults] = useState<Record<string, boolean>>({});
  const attemptedCount = Object.keys(results).length;
  const allAttempted = attemptedCount === problems.length;
  const correctCount = useMemo(() => Object.values(results).filter(Boolean).length, [results]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        {problems.map((p) => (
          <ProblemCard
            key={p.id}
            problemId={p.id}
            prompt={p.prompt}
            answer={p.answer}
            solutionMd={p.solutionMd}
            lessonNumber={lessonNumber}
            context="test"
            onGraded={(correct) => setResults((r) => ({ ...r, [p.id]: correct }))}
            persist={persist}
          />
        ))}
      </div>
      {allAttempted && (
        <div className="rounded-lg border border-indigo-200 bg-indigo-50 p-4 text-center">
          <p className="text-lg font-semibold text-indigo-900">
            Score: {correctCount}/{problems.length} ({Math.round((correctCount / problems.length) * 100)}%)
          </p>
        </div>
      )}
    </div>
  );
}
