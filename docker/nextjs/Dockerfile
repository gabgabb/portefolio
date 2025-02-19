FROM node:22

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# Copier package.json et yarn.lock en premier (meilleur cache Docker)
COPY ./nextjs/package.json ./nextjs/yarn.lock ./

# Copier le reste du code
COPY ./nextjs ./

ENV NEXT_TELEMETRY_DISABLED=1

# Expose le port Next.js
EXPOSE 3000

# Commande de lancement
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]
