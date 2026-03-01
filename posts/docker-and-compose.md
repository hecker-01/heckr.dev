---
title: Using Docker and Docker Compose for Application Deployment
slug: docker-and-compose
date: 01-03-2026
tags: [docker, docker-compose, containerization, cli, tutorial, guide]
description: A comprehensive guide to using Docker and Docker Compose for deploying applications in a containerized environment.
unlisted: false
---

## What is Docker?

Docker is a platform that lets you package applications into **containers** - lightweight, standalone units that include everything needed to run your software: code, runtime, libraries, and system tools.

Think of a container like a shipping container: no matter what's inside, it fits on any ship (server) the same way. This solves the classic "it works on my machine" problem.

### Why Use Docker?

- **Consistency** - your app runs the same everywhere (dev, staging, production)
- **Isolation** - containers don't interfere with each other or the host system
- **Portability** - move containers between machines, clouds, or CI/CD pipelines effortlessly
- **Efficiency** - containers share the host OS kernel, making them much lighter than virtual machines
- **Reproducibility** - define your environment in code and rebuild it identically every time

### Docker vs Virtual Machines

| Feature        | Docker Container   | Virtual Machine          |
| -------------- | ------------------ | ------------------------ |
| Startup time   | Seconds            | Minutes                  |
| Size           | Megabytes          | Gigabytes                |
| OS             | Shares host kernel | Full guest OS            |
| Performance    | Near-native        | Overhead from hypervisor |
| Isolation      | Process-level      | Full hardware-level      |
| Resource usage | Lightweight        | Heavy                    |

---

## Installing Docker

### Linux (Ubuntu/Debian)

Remove any old Docker packages:

```bash
sudo apt remove docker.io docker-compose docker-compose-plugin -y
sudo apt autoremove -y
```

Install dependencies:

```bash
sudo apt update
sudo apt install ca-certificates curl gnupg lsb-release -y
```

Add Docker's GPG key:

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Add the Docker repository:

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install Docker CE + Compose plugin:

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

Enable Docker and add your user to the docker group:

```bash
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Log out and back in for the group change to take effect.

### Windows / Mac

Download and install [Docker Desktop](https://www.docker.com/products/docker-desktop/) - it includes Docker Engine, Docker CLI, and Docker Compose out of the box.

### Verify Installation

```bash
docker --version
docker compose version
```

Test with a hello-world container:

```bash
docker run hello-world
```

If you see a success message, you're ready to go!

---

## Core Concepts

Before diving into commands, understand these key building blocks:

### Images

An **image** is a read-only template used to create containers. Think of it as a snapshot of an application and its environment. Images are built from a `Dockerfile` or pulled from a registry like [Docker Hub](https://hub.docker.com/).

### Containers

A **container** is a running instance of an image. You can start, stop, restart, and delete containers. Multiple containers can be created from the same image.

### Volumes

**Volumes** are used to persist data outside of a container's lifecycle. Without volumes, data inside a container is lost when the container is removed.

### Networks

**Networks** allow containers to communicate with each other. Docker creates a default network, but you can define custom ones to isolate or connect services.

### Registries

A **registry** is a storage and distribution system for Docker images. [Docker Hub](https://hub.docker.com/) is the default public registry, but you can use private registries too.

---

## Essential Docker Commands

### Working with Images

Pull an image from Docker Hub:

```bash
docker pull nginx
```

List all downloaded images:

```bash
docker images
```

Remove an image:

```bash
docker rmi nginx
```

### Running Containers

Run a container from an image:

```bash
docker run nginx
```

This runs in the foreground. To run in the background (detached mode):

```bash
docker run -d nginx
```

Give your container a name:

```bash
docker run -d --name my-webserver nginx
```

Map a port from the container to your host:

```bash
docker run -d -p 8080:80 --name my-webserver nginx
```

Now you can access the Nginx web server at `http://localhost:8080`.

### Managing Containers

List running containers:

```bash
docker ps
```

List all containers (including stopped):

```bash
docker ps -a
```

Stop a running container:

```bash
docker stop my-webserver
```

Start a stopped container:

```bash
docker start my-webserver
```

Restart a container:

```bash
docker restart my-webserver
```

Remove a container (must be stopped first):

```bash
docker rm my-webserver
```

Force remove a running container:

```bash
docker rm -f my-webserver
```

### Inspecting Containers

View container logs:

```bash
docker logs my-webserver
```

Follow logs in real-time:

```bash
docker logs -f my-webserver
```

Open a shell inside a running container:

```bash
docker exec -it my-webserver bash
```

Inspect container details (network, mounts, config):

```bash
docker inspect my-webserver
```

### Working with Volumes

Create a named volume:

```bash
docker volume create my-data
```

Run a container with a volume:

```bash
docker run -d -v my-data:/usr/share/nginx/html --name my-webserver nginx
```

Or bind-mount a host directory:

```bash
docker run -d -v ./my-site:/usr/share/nginx/html --name my-webserver nginx
```

List volumes:

```bash
docker volume ls
```

Remove a volume:

```bash
docker volume rm my-data
```

### Cleanup

Remove all stopped containers:

```bash
docker container prune
```

Remove all unused images:

```bash
docker image prune
```

Nuclear option - remove all unused containers, networks, images, and volumes:

```bash
docker system prune -a --volumes
```

---

## Writing a Dockerfile

A `Dockerfile` is a text file with instructions to build a custom Docker image. Each instruction creates a layer in the image.

### Basic Dockerfile Example

Here's a Dockerfile for a simple Node.js application:

```dockerfile
# Start from the official Node.js image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package files first (for better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run when the container starts
CMD ["node", "server.js"]
```

### Common Dockerfile Instructions

| Instruction  | Purpose                                         |
| ------------ | ----------------------------------------------- |
| `FROM`       | Base image to build on                          |
| `WORKDIR`    | Set the working directory                       |
| `COPY`       | Copy files from host to image                   |
| `RUN`        | Execute a command during build                  |
| `EXPOSE`     | Document which port the container listens on    |
| `CMD`        | Default command when container starts           |
| `ENV`        | Set environment variables                       |
| `ARG`        | Build-time variables                            |
| `ENTRYPOINT` | Configure the container to run as an executable |
| `VOLUME`     | Create a mount point for external volumes       |

### Building an Image

Build an image from a Dockerfile in the current directory:

```bash
docker build -t my-app .
```

The `-t` flag tags the image with a name. The `.` tells Docker to look for the Dockerfile in the current directory.

Build with a specific tag/version:

```bash
docker build -t my-app:1.0 .
```

Run your custom image:

```bash
docker run -d -p 3000:3000 --name my-app my-app:1.0
```

### .dockerignore

Create a `.dockerignore` file to exclude files from the build context (similar to `.gitignore`):

```txt
node_modules
.git
.env
*.log
README.md
```

This keeps your image smaller and speeds up builds.

---

## Docker Compose

Docker Compose is a tool for defining and running **multi-container** applications. Instead of running multiple `docker run` commands with long options, you define everything in a single `docker-compose.yml` file.

### Why Docker Compose?

Imagine you have a web app that needs:

- A **web server** (Node.js/Python/etc.)
- A **database** (PostgreSQL/MySQL)
- A **cache** (Redis)

Without Compose, you'd need to:

1. Create a network
2. Run each container separately with the right ports, volumes, networks, and environment variables
3. Remember the exact commands to recreate everything

With Compose, you define it all in one file and run `docker compose up`. Done.

### docker-compose.yml Structure

```yaml
services:
  service-name:
    image: image-name # Use a pre-built image
    # OR
    build: ./path # Build from a Dockerfile
    ports:
      - "host:container" # Port mapping
    volumes:
      - host-path:container-path # Bind mount
      - volume-name:container-path # Named volume
    environment:
      - KEY=value # Environment variables
    depends_on:
      - other-service # Start order dependency
    restart: unless-stopped # Restart policy
    networks:
      - my-network # Custom network

volumes:
  volume-name: # Declare named volumes

networks:
  my-network: # Declare custom networks
```

### Practical Example: Web App with Database

Let's deploy a Node.js app with a PostgreSQL database and Redis cache:

```yaml
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - DATABASE_URL=postgresql://myuser:mypassword@db:5432/mydb
      - REDIS_URL=redis://cache:6379
    depends_on:
      - db
      - cache
    restart: unless-stopped

  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=myuser
      - POSTGRES_PASSWORD=mypassword
      - POSTGRES_DB=mydb
    volumes:
      - pgdata:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  cache:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    restart: unless-stopped

volumes:
  pgdata:
```

A few things to notice:

- The `app` service uses `build: .` to build from a Dockerfile in the current directory
- The `db` service uses a named volume `pgdata` to persist database data
- Services can refer to each other by name (`db`, `cache`) - Docker Compose sets up DNS automatically
- `depends_on` ensures the database and cache start before the app

### Docker Compose Commands

Start all services (in the background):

```bash
docker compose up -d
```

Start and force rebuild images:

```bash
docker compose up -d --build
```

Stop all services:

```bash
docker compose down
```

Stop and remove all data (volumes too):

```bash
docker compose down -v
```

View logs for all services:

```bash
docker compose logs
```

Follow logs for a specific service:

```bash
docker compose logs -f app
```

List running services:

```bash
docker compose ps
```

Execute a command in a running service:

```bash
docker compose exec app sh
```

Restart a specific service:

```bash
docker compose restart app
```

Pull latest images:

```bash
docker compose pull
```

### Environment Variables

Instead of hardcoding secrets in your compose file, use a `.env` file:

```env
POSTGRES_USER=myuser
POSTGRES_PASSWORD=supersecretpassword
POSTGRES_DB=mydb
```

Reference them in your `docker-compose.yml`:

```yaml
services:
  db:
    image: postgres:16-alpine
    environment:
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
      - POSTGRES_DB=${POSTGRES_DB}
```

Docker Compose automatically reads `.env` files in the same directory.

---

## Useful Tips

### Restart Policies

Control what happens when a container crashes:

| Policy           | Behavior                                       |
| ---------------- | ---------------------------------------------- |
| `no`             | Never restart (default)                        |
| `always`         | Always restart, even if manually stopped       |
| `on-failure`     | Restart only if the container exits with error |
| `unless-stopped` | Restart unless explicitly stopped              |

For most services, `unless-stopped` is the best option as it will auto-start containers on reboot.

### Viewing Resource Usage

Check CPU and memory usage of running containers:

```bash
docker stats
```

### Networking Between Containers

Containers in the same Docker Compose file can communicate using the **service name** as the hostname:

```bash
# From the "app" container, connect to the database:
postgresql://myuser:mypassword@db:5432/mydb
#                               ^^ service name, not localhost
```

### Multi-Stage Builds

Keep your production images small by using multi-stage builds:

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["node", "dist/server.js"]
```

The final image only contains the built output, not the source code or build tools.

### Quick Reference

| Task                    | Command                            |
| ----------------------- | ---------------------------------- |
| Pull an image           | `docker pull image`                |
| Run a container         | `docker run -d -p 80:80 image`     |
| List running containers | `docker ps`                        |
| Stop a container        | `docker stop name`                 |
| View logs               | `docker logs name`                 |
| Shell into container    | `docker exec -it name sh`          |
| Start compose stack     | `docker compose up -d`             |
| Stop compose stack      | `docker compose down`              |
| View compose logs       | `docker compose logs -f`           |
| Rebuild and start       | `docker compose up -d --build`     |
| Clean up everything     | `docker system prune -a --volumes` |
