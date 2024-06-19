# Dockerfile pour Strapi
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./strapi/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY ./strapi ./

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi server
CMD ["npm", "run", "develop"]
