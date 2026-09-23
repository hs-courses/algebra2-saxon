#!/usr/bin/env sh
# Ensures the SQLite schema exists on the mounted volume before the server starts.
# `db push` is idempotent — safe to run on every container start.
set -e

npx prisma db push --skip-generate

exec "$@"
