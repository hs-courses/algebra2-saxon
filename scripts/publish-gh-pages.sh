#!/usr/bin/env bash
# Builds a static, DB-free demo export and publishes it to the gh-pages branch.
# API routes (app/api/*) can't run on GitHub Pages, so they're moved aside for the
# build and restored afterward regardless of outcome.
set -euo pipefail

REPO_NAME="${REPO_NAME:-algebra2-saxon}"
ORG="${ORG:-hs-courses}"
BASE_PATH="/${REPO_NAME}"

cd "$(dirname "$0")/.."

if [ ! -d app/api ]; then
  echo "app/api not found — nothing to hide, continuing." >&2
fi

cleanup() {
  if [ -d app/_api-disabled ]; then
    mv app/_api-disabled app/api
  fi
}
trap cleanup EXIT

if [ -d app/api ]; then
  mv app/api app/_api-disabled
fi

echo "Building static export (GH_PAGES_EXPORT=true, basePath=$BASE_PATH)..."
GH_PAGES_EXPORT=true GH_PAGES_BASE_PATH="$BASE_PATH" NEXT_PUBLIC_STATIC_DEMO=true npx next build

cleanup
trap - EXIT

if [ ! -d out ]; then
  echo "Static export failed — no out/ directory produced." >&2
  exit 1
fi

touch out/.nojekyll

REMOTE_URL="https://github.com/${ORG}/${REPO_NAME}.git"
WORKTREE_DIR=".gh-pages-worktree"

rm -rf "$WORKTREE_DIR"
git fetch "$REMOTE_URL" gh-pages 2>/dev/null || true

if git ls-remote --exit-code --heads "$REMOTE_URL" gh-pages >/dev/null 2>&1; then
  git worktree add "$WORKTREE_DIR" -B gh-pages "FETCH_HEAD" 2>/dev/null || \
    git worktree add --detach "$WORKTREE_DIR" 2>/dev/null
else
  git worktree add --detach "$WORKTREE_DIR"
fi

cd "$WORKTREE_DIR"
git checkout --orphan gh-pages-tmp 2>/dev/null || git checkout gh-pages
git rm -rf . >/dev/null 2>&1 || true
cp -r ../out/. .
touch .nojekyll
git add -A
git -c user.name="publish-script" -c user.commit.gpgsign=false commit -m "Publish static demo build" --allow-empty
git branch -M gh-pages
git push "$REMOTE_URL" gh-pages --force

cd ..
git worktree remove "$WORKTREE_DIR" --force
rm -rf "$WORKTREE_DIR"

echo "Enabling GitHub Pages (source: gh-pages branch, / root)..."
gh api "repos/${ORG}/${REPO_NAME}/pages" -X POST -f "source[branch]=gh-pages" -f "source[path]=/" 2>/dev/null || \
  gh api "repos/${ORG}/${REPO_NAME}/pages" -X PUT -f "source[branch]=gh-pages" -f "source[path]=/" 2>/dev/null || \
  echo "Pages API call did not confirm — check https://github.com/${ORG}/${REPO_NAME}/settings/pages manually."

echo "Done. Site will be live at: https://${ORG}.github.io/${REPO_NAME}/"
