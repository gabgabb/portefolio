#!/bin/bash

# Load environment variables
source ../../.env

# Extract the signature from the headers (assuming you use curl to send the header)
EXPECTED_SIGNATURE=$(printf "$WEBHOOK_SECRET" | openssl dgst -sha256 -hmac "$WEBHOOK_SECRET" | awk '{print $2}')
RECEIVED_SIGNATURE=$(echo $HTTP_X_HUB_SIGNATURE_256 | awk '{print $2}')

if [ "$EXPECTED_SIGNATURE" != "$RECEIVED_SIGNATURE" ]; then
  echo "Invalid signature"
  exit 1
fi

# Navigate to your project directory
cd $PROJECT_DIR

# Pull the latest changes from the specified branch
git pull origin $GIT_BRANCH

# Build and restart the Docker Compose services
docker-compose -f $DOCKER_COMPOSE_FILE down
docker-compose -f $DOCKER_COMPOSE_FILE up --build -d

# Optional: Clean up dangling images and containers
docker system prune -f