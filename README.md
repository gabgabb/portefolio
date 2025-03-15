# Gabriel Filiot Portfolio

This project is the personal portfolio of Gabriel Filiot, a full-stack developer. It showcases his projects, professional experiences, and technical skills. The front-end is built with **Next.js** and **Tailwind CSS**, while the back-end uses **Strapi** as a headless CMS. The entire project is containerized with **Docker** and managed via **Docker Compose**. End-to-end tests are implemented with **Playwright**.

## Table of Contents

- [Introduction](#introduction)
- [Project Architecture](#project-architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Makefile Commands](#makefile-commands)
- [End-to-End Testing with Playwright](#end-to-end-testing-with-playwright)
- [Automated Dependency Updates](#automated-dependency-updates)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [License](#license)

## Introduction

This portfolio highlights the work and skills of Gabriel Filiot as a full-stack developer. The website is designed to be fast, responsive, and modern, featuring a multilingual interface and dynamic content integration via Strapi.

## Project Architecture

The project consists of two main parts:

- **Next.js**: The front-end application handling the portfolio's user interface.
- **Strapi**: The headless CMS used for managing dynamic content such as projects and experiences.

Deployment and service management are handled using **Docker Compose**.

## Prerequisites

Before starting, ensure you have the following installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Make](https://www.gnu.org/software/make/) (to use the Makefile)
- [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) for local dependency installation

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/gabgabb/portefolio-nextjs.git
   cd portefolio-nextjs
   ```

2. **Configure Environment Variables**:

   Create a `.env` file (or copy from an example if available) and adjust the settings as needed:

   ```bash
   cp .env.example .env
   ```

3. **Install Dependencies**:

   For the Next.js front-end:

   ```bash
   cd nextjs && yarn install
   ```

   For the Strapi back-end:

   ```bash
   cd ../strapi && npm install
   ```

## Usage

### Running with Docker

The project is containerized and managed by Docker Compose. To start the services, run:

```bash
make start
```

To stop the services:

```bash
make stop
```

To restart the services:

```bash
make restart
```

### Building and Deploying

To build the Docker images:

```bash
make build
```

To push the images to Docker Hub:

```bash
make push
```

For a complete update (build, push, and restart):

```bash
make update
```

### Running Locally (Without Docker)

If you prefer to run the project locally:

1. Install dependencies in each folder (`nextjs` and `strapi`) as described in the [Installation](#installation) section.
2. Start the front-end and back-end using the scripts defined in their respective `package.json` files.

## Makefile Commands

The Makefile includes several helpful commands:

- **help**: Displays help and a list of available commands.
- **pull**: Downloads Docker images from Docker Hub.
- **build**: Builds the Docker images for Next.js and Strapi.
- **push**: Pushes the Docker images to Docker Hub.
- **start**: Starts services using Docker Compose.
- **stop**: Stops services.
- **restart**: Restarts services.
- **update**: Updates the project (build, push, restart).
- **install**: Installs dependencies for both Next.js and Strapi.
- **clean**: Cleans up unused Docker resources.
- **logs**: Displays logs from the services.
- **status**: Shows the status of Docker containers.
- **test**: Runs end-to-end tests with Playwright.
- **test-head**: Runs end-to-end tests in UI mode.

## End-to-End Testing with Playwright

The tests, located in the tests folder, cover several use cases including:

- Verifying that the homepage loads correctly.
- Testing navigation to the CV page.
- Switching the interface language between English and French.
- Ensuring that GitHub and LinkedIn links work correctly.

To run the tests, execute:

```bash
make test
```

## Automated Dependency Updates

The project uses **Renovate** to automatically manage dependency updates. The configuration in `renovate.json` groups minor and patch updates while handling major updates separately.

## Project Structure

```
/portefolio-nextjs
├── nextjs/             # Front-end source code (Next.js)
├── strapi/             # Back-end CMS source code (Strapi)
├── docker/             # Dockerfiles for Next.js and Strapi
├── Makefile            # Commands for Docker and other tasks
├── .env                # Environment variables
├── renovate.json       # Renovate configuration
└── tests/              # End-to-end tests with Playwright
```

## Environment Variables

The `.env` file includes essential variables such as:

- `DOCKER_USERNAME`: Your Docker Hub username.
- `DOCKER_PASSWORD`: Your Docker Hub password.
- `NODE_ENV`: The environment setting (development, production, etc.).
- Other variables specific to Strapi and Next.js configurations.

## License

This project is licensed under the [MIT License](LICENSE.md).

---

Feel free to reach out if you have any questions or suggestions regarding the project!

