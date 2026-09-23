export type SkillDef = {
  id: string;
  name: string;
  description: string;
  firstLessonNum: number;
};

export type WorkedExample = {
  prompt: string;
  solutionSteps: string[];
};

export type ProblemDef = {
  id: string;
  skillId: string;
  context: "lessonPractice" | "mixedPractice" | "test";
  prompt: string;
  answer: string;
  choices?: string[];
  solutionMd: string;
  difficulty?: number;
};

export type LessonDef = {
  id: string;
  number: number;
  title: string;
  status: "draft" | "authored";
  conceptMd?: string;
  newSkillId?: string;
  workedExamples?: WorkedExample[];
  lessonPractice?: ProblemDef[];
  mixedPractice?: ProblemDef[];
};

export type TestBlockDef = {
  id: string;
  afterLessonNumber: number;
  title: string;
  problemIds: string[];
};
