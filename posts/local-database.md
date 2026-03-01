---
title: Setting up a local database with PHPMyAdmin
slug: local-database
date: 30-01-2026
tags: [database, mariadb, phpmyadmin, tutorial, guide, docker, docker-compose]
description: Setting up a local mariaDB database with PHPMyAdmin in docker
unlisted: false
---

## Prerequisites

Before starting, make sure you have Docker Desktop installed on your machine. Download it from [Docker's official website](https://www.docker.com/products/docker-desktop/) and ensure it's running (you should see the Docker icon in your system tray).

New to Docker? Check out the [Using Docker and Docker Compose](/posts?post=docker-and-compose) guide first for an introduction to containers, images, and essential commands.

## Installation with Docker Compose

The easiest way to set up the stack is with Docker Compose - define everything in a single file and manage it with one command. See the [Docker Compose guide](/posts?post=docker-and-compose#docker-compose) for a full overview.

Create a `docker-compose.yml` file:

```yaml
services:
  db:
    image: mariadb:10.5
    container_name: db
    environment:
      - MYSQL_ROOT_PASSWORD=mypass
    volumes:
      - db-data:/var/lib/mysql
    ports:
      - "3306:3306"
    restart: unless-stopped

  phpmyadmin:
    image: phpmyadmin
    container_name: phpmyadmin
    environment:
      - PMA_HOST=db
    ports:
      - "8080:80"
    depends_on:
      - db
    restart: unless-stopped

volumes:
  db-data:
```

Start the stack:

```bash
docker compose up -d
```

Stop the stack:

```bash
docker compose down
```

Stop and remove all data (including the database volume):

```bash
docker compose down -v
```

Why Compose over manual commands:

- **No manual network creation** - Compose creates a shared network automatically
- **Persistent data** - the named volume `db-data` keeps your database data between restarts
- **One command** - start or stop everything with a single `docker compose up -d` or `docker compose down`
- **Reproducible** - share the file with teammates and they get an identical setup

## Accessing PHPMyAdmin

Navigate to `http://localhost:8080` in your web browser.

**Login credentials:**

- Username: `root`
- Password: `mypass` (or whatever password you set earlier)

---

## Alternative: Using Standalone Docker Commands {#standalone}

If you prefer running containers individually without a Compose file, you can use `docker run` directly.

### 1. Create a Docker Network

First, create a network so the containers can communicate. Open your terminal (PowerShell on Windows, Terminal on Mac/Linux) and run:

```bash
docker network create db-network
```

This creates a bridge network that allows the database and PHPMyAdmin containers to connect.
(If you have docker containers that need to connect to the database, you can add them to this network as well.)

### 2. Set up MariaDB

Pull and run the MariaDB container:

```bash
docker pull mariadb:10.5
docker run --name db -e MYSQL_ROOT_PASSWORD=mypass -p 3306:3306 --network db-network -d mariadb:10.5
```

**What these flags mean:**

- `--name db` - Names the container "db" for easy reference
- `-e MYSQL_ROOT_PASSWORD=mypass` - Sets the root password (change "mypass" to your preferred password)
- `-p 3306:3306` - Maps port 3306 from the container to your machine (MariaDB's default port)
- `--network db-network` - Connects the container to our network
- `-d` - Runs the container in detached mode (background)

### 3. Set up PHPMyAdmin

Set up the PHPMyAdmin web interface:

```bash
docker pull phpmyadmin
docker run --name phpmyadmin -e PMA_HOST=db -p 8080:80 --network db-network -d phpmyadmin
```

**What these flags mean:**

- `--name phpmyadmin` - Names the container "phpmyadmin"
- `-e PMA_HOST=db` - Tells PHPMyAdmin to connect to our "db" container
- `-p 8080:80` - Maps port 8080 on your machine to port 80 in the container (PHPMyAdmin's web interface)
- `--network db-network` - Connects to the same network as the database

### Verification

Open Docker Desktop and you should see both containers running in the Containers tab. They should have green status indicators.

Alternatively, verify in the terminal with:

```bash
docker ps
```

You should see both `db` and `phpmyadmin` containers listed.

### Daily Usage

#### Using Docker Desktop

Open Docker Desktop, go to the Containers tab, and use the play/pause buttons to start or stop your containers.

#### Using Command Line

**Stop containers:**

```bash
docker stop db phpmyadmin
```

**Start containers:**

```bash
docker start db phpmyadmin
```

### Cleanup

#### Using Docker Desktop

Go to Containers tab, click the trash icon next to each container.

#### Using Command Line

```bash
docker rm -f db phpmyadmin
docker network rm db-network
```

The `-f` flag forces removal even if containers are running.

---

## Troubleshooting

**Port already in use:** If you get an error about ports 3306 or 8080 being in use, either:

- Stop the conflicting application
- Use different ports: `-p 3307:3306` or `-p 8081:80`

**Can't connect to database:** Make sure both containers are on the same network and the database container is fully started (wait 10-15 seconds after starting).

**Containers not showing in Docker Desktop:** Refresh the application or restart Docker Desktop.

## Conclusion

That's it! You now have a local MariaDB database with PHPMyAdmin set up using Docker Desktop.
