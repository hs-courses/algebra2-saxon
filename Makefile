.DEFAULT_GOAL := help
.PHONY: help install dev build start lint typecheck db-generate db-push db-studio db-seed db-reset clean gh-repo-create publish

ORG ?= hs-courses
REPO_NAME ?= algebra2-saxon

help: ## Show this help
	@echo "Algebra 2 (Saxon Method) — available targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-14s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Run the dev server
	npm run dev

build: ## Production build
	npm run build

start: ## Run the production build
	npm run start

lint: ## Lint the codebase
	npm run lint

typecheck: ## Type-check with tsc (no emit)
	npx tsc --noEmit

db-generate: ## Regenerate the Prisma client
	npx prisma generate

db-push: ## Push schema.prisma to the SQLite dev database
	npx prisma db push

db-studio: ## Open Prisma Studio (inspect/edit DB rows)
	npx prisma studio

db-seed: ## Seed the DB from content/ via the API route (requires dev server running)
	curl -s -X POST http://localhost:3000/api/seed | cat

db-reset: ## Delete the local SQLite DB and re-push the schema
	rm -f prisma/dev.db prisma/dev.db-journal
	npx prisma db push

clean: ## Remove build artifacts and node_modules
	rm -rf .next node_modules

gh-repo-create: ## Create the GitHub repo (ORG=hs-courses REPO_NAME=algebra2-saxon) and add it as origin
	gh repo create $(ORG)/$(REPO_NAME) --public --source=. --remote=origin --push

publish: ## Build a static, DB-free demo export and publish it to GitHub Pages (ORG=hs-courses REPO_NAME=algebra2-saxon)
	ORG=$(ORG) REPO_NAME=$(REPO_NAME) ./scripts/publish-gh-pages.sh
