# Dockerfile pour Next.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./nextjs/package.json ./
COPY ./nextjs/yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY ./nextjs ./

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then yarn build && yarn start; else yarn dev; fi"]