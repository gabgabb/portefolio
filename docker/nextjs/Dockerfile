# Dockerfile pour Next.js
FROM node:20

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# Set the user to "node" (non-root user)
USER node

# Create the .next directory and ensure write permissions
RUN mkdir -p /app/.next && chmod -R 777 /app/.next

# Copy package.json and yarn.lock before installing dependencies
COPY --chown=node:node ./nextjs/package.json ./nextjs/yarn.lock ./

# Install dependencies
RUN corepack yarn install

# Copy the rest of the application code
COPY --chown=node:node ./nextjs ./

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]
