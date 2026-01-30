---
title: Setting up a local database
slug: setting-up-local-database
date: 29-01-2026
tags:
  [tutorial, guide, database, docker, mariadb, phpmyadmin, cli, user-interface]
description: Setting up a local mariaDB database with PHPMyAdmin in docker
---

## Prerequisites

Before starting, make sure you have Docker Desktop installed on your machine. Download it from [Docker's official website](https://www.docker.com/products/docker-desktop/) and ensure it's running (you should see the Docker icon in your system tray).

## Installation Steps

### 1. Create a Docker Network

First, we'll create a network so our containers can communicate with each other. Open your terminal (PowerShell on Windows, Terminal on Mac/Linux) and run:

```bash
docker network create db-network
```

This creates a bridge network that allows the database and PHPMyAdmin containers to connect.
(If you have docker containers that need to connect to the database, you can add them to this network as well.)

### 2. Set up MariaDB

Now let's pull and run the MariaDB container:

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

Next, set up the PHPMyAdmin web interface:

```bash
docker pull phpmyadmin
docker run --name phpmyadmin -e PMA_HOST=db -p 8080:80 --network db-network -d phpmyadmin
```

**What these flags mean:**

- `--name phpmyadmin` - Names the container "phpmyadmin"
- `-e PMA_HOST=db` - Tells PHPMyAdmin to connect to our "db" container
- `-p 8080:80` - Maps port 8080 on your machine to port 80 in the container (PHPMyAdmin's web interface)
- `--network db-network` - Connects to the same network as the database

## Verification

Open Docker Desktop and you should see both containers running in the Containers tab. They should have green status indicators.

Alternatively, you can verify in the terminal with:

```bash
docker ps
```

You should see both `db` and `phpmyadmin` containers listed.

## Accessing PHPMyAdmin

Navigate to `http://localhost:8080` in your web browser.

**Login credentials:**

- Username: `root`
- Password: `mypass` (or whatever password you set earlier)

## Daily Usage

### Using Docker Desktop (Recommended)

Open Docker Desktop, go to the Containers tab, and use the play/pause buttons to start or stop your containers.

### Using Command Line

You can also manage containers from the terminal:

**Stop containers:**

```bash
docker stop db phpmyadmin
```

**Start containers:**

```bash
docker start db phpmyadmin
```

## Cleanup

If you want to remove the containers completely:

### Using Docker Desktop

Go to Containers tab, click the trash icon next to each container.

### Using Command Line

```bash
docker rm -f db phpmyadmin
docker network rm db-network
```

The `-f` flag forces removal even if containers are running.

## Troubleshooting

**Port already in use:** If you get an error about ports 3306 or 8080 being in use, either:

- Stop the conflicting application
- Use different ports: `-p 3307:3306` or `-p 8081:80`

**Can't connect to database:** Make sure both containers are on the same network and the database container is fully started (wait 10-15 seconds after starting).

**Containers not showing in Docker Desktop:** Refresh the application or restart Docker Desktop.

## Conclusion

That's it! You now have a local MariaDB database with PHPMyAdmin set up using Docker Desktop.
