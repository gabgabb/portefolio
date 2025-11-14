# -----------------------------
# 1. Install dependencies
# -----------------------------
FROM node:20-bookworm AS deps
WORKDIR /app

# Copier les fichiers nécessaires à Yarn 4
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Installer les deps avec Yarn 4 (Corepack)
RUN corepack enable && \
    corepack prepare yarn@4.11.0 --activate && \
    yarn install --immutable


# -----------------------------
# 2. Build
# -----------------------------
FROM node:20-bookworm AS build
WORKDIR /app

# récupérer tout le contenu préparé dans deps
COPY --from=deps /app ./

# Réactiver Corepack dans ce stage
RUN corepack enable && \
    corepack prepare yarn@4.11.0 --activate && \
    yarn build


# -----------------------------
# 3. Production image
# -----------------------------
FROM node:20-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copier les fichiers Yarn (pour que `yarn start` fonctionne proprement)
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Dépendances + build
COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

# Activer Corepack ici aussi (pour `yarn start`)
RUN corepack enable && \
    corepack prepare yarn@4.11.0 --activate

EXPOSE 3000
CMD ["yarn", "start"]
