# -----------------------------
# 1. Install dependencies
# -----------------------------
FROM node:20-bookworm AS deps
WORKDIR /app

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

RUN corepack enable && \
    corepack prepare yarn@4.11.0 --activate && \
    yarn install --immutable


# -----------------------------
# 2. Build
# -----------------------------
FROM node:20-bookworm AS build
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

COPY src ./src
COPY public ./public

COPY next.config.ts ./next.config.ts
COPY tsconfig.json ./tsconfig.json
COPY tailwind.config.ts ./tailwind.config.ts
COPY postcss.config.mjs ./postcss.config.mjs

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

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn

COPY --from=deps /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public

EXPOSE 3000
CMD ["yarn", "start"]
