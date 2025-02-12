# Dockerfile pour Strapi
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./strapi/package.json ./strapi/package-lock.json ./

# Install dependencies
RUN npm install --force
RUN npm install -g @strapi/strapi

# Copy the rest of the application code
COPY ./strapi ./

# Expose the Strapi port
EXPOSE 1337

# Start the Strapi server
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run build && npm run start; else npm run dev; fi"]