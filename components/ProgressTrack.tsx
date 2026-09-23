import Link from "next/link";

type Props = {
  totalLessons: number;
  completedNumbers: number[];
  currentNumber?: number;
  testAfterLessons: number[];
};

export function ProgressTrack({ totalLessons, completedNumbers, currentNumber, testAfterLessons }: Props) {
  const completed = new Set(completedNumbers);
  const nextLesson = completedNumbers.length > 0 ? Math.max(...completedNumbers) + 1 : 1;

  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: totalLessons }, (_, i) => i + 1).map((n) => {
        const isDone = completed.has(n);
        const isCurrent = n === currentNumber;
        const isLocked = n > nextLesson;
        const isTestPoint = testAfterLessons.includes(n);

        return (
          <div key={n} className="flex items-center gap-2">
            {isLocked ? (
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-400">
                {n}
              </span>
            ) : (
              <Link
                href={`/lesson/${n}`}
                className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold ${
                  isDone
                    ? "bg-emerald-500 text-white"
                    : isCurrent
                    ? "bg-indigo-600 text-white"
                    : "bg-indigo-100 text-indigo-700"
                }`}
              >
                {n}
              </Link>
            )}
            {isTestPoint && (
              <Link
                href={`/test/${n}`}
                className="flex h-9 items-center rounded bg-amber-100 px-2 text-xs font-semibold text-amber-800"
              >
                Test
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
}
