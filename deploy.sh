#!/bin/bash

# Navigate to your project directory
cd /path/to/your/project

# Pull the latest changes from the main branch
git pull origin main

# Build and restart the Docker Compose services
sudo docker-compose down
sudo docker-compose up --build -d

# Optional: Clean up dangling images and containers
sudo docker system prune -f

