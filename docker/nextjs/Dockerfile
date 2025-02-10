# Dockerfile for Next.js
FROM node:20

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# Create necessary directories and set correct permissions BEFORE switching user
RUN mkdir -p /app/.next /app/.yarn \
    && chown -R node:node /app/.next /app/.yarn /app

# Switch to non-root user
USER node

# Copy package.json and yarn.lock before installing dependencies
COPY --chown=node:node ./package.json ./yarn.lock ./

# Install dependencies
RUN corepack yarn install

# Copy the rest of the application code
COPY --chown=node:node ./nextjs ./

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]