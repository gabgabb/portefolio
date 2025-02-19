# Dockerfile pour Next.js
FROM node:22

ENV NODE_OPTIONS="--max-old-space-size=4096"

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./nextjs/package.json ./nextjs/yarn.lock ./

# Install dependencies
RUN corepack yarn install

# Copy the rest of the application code
COPY ./nextjs ./

ENV NEXT_TELEMETRY_DISABLED=1

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]