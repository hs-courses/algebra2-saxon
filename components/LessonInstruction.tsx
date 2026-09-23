import ReactMarkdown from "react-markdown";

type WorkedExample = { prompt: string; solutionSteps: string[] };

type Props = {
  title: string;
  lessonNumber: number;
  conceptMd: string;
  workedExamples: WorkedExample[];
};

export function LessonInstruction({ title, lessonNumber, conceptMd, workedExamples }: Props) {
  return (
    <section className="mb-8">
      <h1 className="text-2xl font-bold text-slate-900">
        Lesson {lessonNumber}: {title}
      </h1>
      <div className="mt-4 max-w-none space-y-3 text-slate-700">
        <ReactMarkdown
          components={{
            p: ({ children }) => <p>{children}</p>,
            strong: ({ children }) => <strong className="font-semibold text-slate-900">{children}</strong>,
            code: ({ children }) => (
              <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-[0.9em] text-slate-800">{children}</code>
            ),
            ul: ({ children }) => <ul className="list-disc space-y-1 pl-5">{children}</ul>,
            li: ({ children }) => <li>{children}</li>,
          }}
        >
          {conceptMd}
        </ReactMarkdown>
      </div>

      {workedExamples.length > 0 && (
        <div className="mt-6 space-y-4">
          <h2 className="text-lg font-semibold text-slate-900">Worked Examples</h2>
          {workedExamples.map((ex, i) => (
            <div key={i} className="rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <p className="font-medium text-slate-800">{ex.prompt}</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-slate-600">
                {ex.solutionSteps.map((step, j) => (
                  <li key={j}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
