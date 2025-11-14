# -----------------------------
# 1. Install dependencies
# -----------------------------
FROM node:24-bookworm AS deps
WORKDIR /app

# Copier les fichiers nécessaires à Yarn 4
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

# Installer les deps
RUN corepack enable && \
    corepack prepare yarn@4.11.0 --activate && \
    yarn install --immutable


# -----------------------------
# 2. Build
# -----------------------------
FROM node:24-bookworm AS build
WORKDIR /app

COPY --from=deps /app /app
RUN yarn build


# -----------------------------
# 3. Production image
# -----------------------------
FROM node:24-bookworm-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
