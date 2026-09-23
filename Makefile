.DEFAULT_GOAL := help
.PHONY: help install dev build start lint typecheck db-generate db-push db-studio db-seed db-reset clean gh-repo-create publish docker-build docker-push k8s-apply k8s-rollout deploy-k8s

ORG ?= hs-courses
REPO_NAME ?= algebra2-saxon
DOCKER_IMAGE ?= logycon/algebra2-saxon:latest
K8S_NAMESPACE ?= algebra2

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

docker-build: ## Build the production image for the k8s cluster (linux/amd64)
	docker build --platform linux/amd64 -t $(DOCKER_IMAGE) .

docker-push: ## Push the production image to Docker Hub
	docker push $(DOCKER_IMAGE)

k8s-apply: ## Apply/update the k8s manifests (namespace, PVC, deployment, service, ingress)
	kubectl apply -f k8s/namespace.yaml -f k8s/pvc.yaml -f k8s/deployment.yaml -f k8s/service.yaml -f k8s/ingress.yaml

k8s-rollout: ## Force the deployment to pull the latest image and restart
	kubectl -n $(K8S_NAMESPACE) rollout restart deployment/algebra2
	kubectl -n $(K8S_NAMESPACE) rollout status deployment/algebra2 --timeout=120s

deploy-k8s: docker-build docker-push k8s-apply k8s-rollout ## Full deploy: build, push, apply manifests, restart rollout
