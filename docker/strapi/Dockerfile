# docker/strapi/Dockerfile
FROM node:24-bookworm AS deps
WORKDIR /app

# On installe les deps (avec cache npm)
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm npm ci

FROM node:24-bookworm AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Build Strapi (génère .cache, build admin, etc.)
RUN npm run build

FROM node:24-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# Copie tout ce qui a été build
COPY --from=build /app ./

# (Optionnel) si tu veux ne garder que les deps prod :
# RUN npm ci --omit=dev --prefer-offline --no-audit --no-fund

EXPOSE 1337
CMD ["npm", "start"]
