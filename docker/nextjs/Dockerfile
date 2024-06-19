# Dockerfile pour Next.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./nextjs/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./nextjs ./

# Expose the Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "run", "dev"]
