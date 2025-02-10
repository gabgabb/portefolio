# Dockerfile pour Next.js
FROM node:22

# Enable Corepack
RUN corepack enable

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./nextjs/package.json ./
COPY ./nextjs/yarn.lock ./

# Install dependencies
RUN corepack yarn install

# Copy the rest of the application code
COPY ./nextjs ./

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then corepack yarn build && corepack yarn start; else corepack yarn dev; fi"]