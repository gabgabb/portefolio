include .env
export $(shell sed 's/=.*//' .env)

# Variables
NEXTJS_IMAGE = $(DOCKER_USERNAME)/portefolio-nextjs
STRAPI_IMAGE = $(DOCKER_USERNAME)/portefolio-strapi

.PHONY: help

# Définition des couleurs (optionnel)
GREEN="\033[1;32m"
RED="\033[1;31m"
RESET="\033[00m"

help:
	@echo ""
	@echo "Usage: make <commande>"
	@echo ""
	@echo "Commands available :"
	@grep -E '^[a-zA-Z0-9 -]+:.*#' Makefile | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
	@echo ""

pull: ## Download images from Docker Hub
	@echo "Connexion à Docker..."
	@echo "$$DOCKER_PASSWORD" | docker login -u "$(DOCKER_USERNAME)" --password-stdin
	@docker pull $(NEXTJS_IMAGE):latest
	@docker pull $(STRAPI_IMAGE):latest

build: ## Build Docker images
	docker build -t $(NEXTJS_IMAGE):latest -f docker/nextjs/Dockerfile nextjs
	docker build -t $(STRAPI_IMAGE):latest -f docker/strapi/Dockerfile strapi

push: ## Push Docker images to Docker Hub
	@echo "Connexion à Docker..."
	@echo "$$DOCKER_PASSWORD" | docker login -u "$(DOCKER_USERNAME)" --password-stdin
	docker push $(NEXTJS_IMAGE):latest
	docker push $(STRAPI_IMAGE):latest

start: ## Start services
	docker compose up -d

stop: ## Stop services
	docker compose down

restart: ## Restart services
	stop start

update: ## Update services
	make build
	make push
	make restart

install: ## Install dependencies
	cd nextjs && yarn install
	cd strapi && npm install

clean: ## Clean Docker
	docker system prune -af
	docker volume prune -f


logs: ## Show logs
	docker compose logs -f

status: ## Show status
	docker ps -a

test: ## Run tests in head mode
	cd nextjs && yarn run test-line

test-head: ## Run tests in headless mode
	cd nextjs && yarn run test-head
