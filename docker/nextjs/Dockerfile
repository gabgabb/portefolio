# Dockerfile pour Next.js
FROM node:20

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# ✅ Créer tous les dossiers nécessaires et donner les bons droits AVANT de changer d'utilisateur
RUN mkdir -p /app/.next /app/.yarn /app/node_modules /app/public \
    && touch /app/next-env.d.ts \
    && chown -R node:node /app /app/.next /app/.yarn /app/node_modules /app/public /app/next-env.d.ts \
    && chmod -R 777 /app /app/.next /app/.yarn /app/node_modules /app/public /app/next-env.d.ts

# ✅ Passer à l'utilisateur node après avoir corrigé les permissions
USER node

# Copier package.json et yarn.lock
COPY --chown=node:node ./nextjs/package.json ./nextjs/yarn.lock ./

# Installer les dépendances
RUN corepack yarn install

# Copier le reste du projet
COPY --chown=node:node ./nextjs ./

# Exposer le port Next.js
EXPOSE 3000

# Lancer Next.js
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]
