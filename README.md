# Algebra 2 — Saxon Method

Web app teaching Algebra 2 following John Saxon's incremental-development method: one new concept per lesson, mixed review pulling from every prior skill, and a cumulative test every 5 lessons.

## Quick start

```
make install
make dev
```

Visit http://localhost:3000 — the DB auto-seeds from `content/` on first load.

## Structure

- `content/skills.ts`, `content/lessons/`, `content/tests/` — course content as typed data (source of truth; `make db-seed` syncs it into the DB)
- `prisma/schema.prisma` — Skill, Lesson, Problem, TestBlock, UserProgress, Attempt, SkillMastery
- `lib/mixedPractice.ts` — weighted selection algorithm for daily mixed-review sets
- `app/lesson/[number]`, `app/test/[number]` — lesson and cumulative-test pages

## Status

Lessons 1-10 fully authored (instruction, worked examples, lesson practice, mixed practice) plus Test 5 and Test 10. Lessons 11-30 are stubbed (titles + sequence only) so navigation reflects the full planned arc — see `content/lessons/skeleton.ts`.

## Commands

Run `make` (or `make help`) for the full list: dev, build, lint, typecheck, db-generate, db-push, db-studio, db-seed, db-reset.
