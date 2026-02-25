---
title: Jellyfin Server with Docker Compose
slug: jellyfin-server
date: 25-02-2026
tags: [jellyfin, media server, docker, docker-compose, tutorial, guide]
description: Setting up a Jellyfin media server with Docker Compose, for an automated anime media management system.
unlisted: true
---

Requirements:
Ubuntu Server 24.04 Clean Install Docker CE + Compose V2

---

## Overview

This stack installs:

- Docker CE
- qBittorrent
- Prowlarr
- Sonarr (Anime mode)
- Radarr (Anime movies)
- Jellyfin
- Seerr

Workflow:

1. Request anime in Seerr
2. Sonarr/Radarr searches indexers via Prowlarr
3. qBittorrent downloads
4. Sonarr/Radarr renames and moves files
5. Jellyfin displays episodes and movies

---

## Step 1. Install Docker CE

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

Add Docker GPG key:

```bash
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

Add Docker repository:

```bash
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu noble stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install Docker CE + Compose plugin:

```bash
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y
```

Enable Docker:

```bash
sudo systemctl enable --now docker
sudo usermod -aG docker $USER
```

Log out and back in.

Verify:

```bash
docker compose version
docker run hello-world
```

---

## Step 2. Create Folder Structure

```bash
sudo mkdir -p /srv/media/downloads
sudo mkdir -p /srv/media/anime
sudo mkdir -p /srv/media/anime-movies
sudo mkdir -p /srv/docker
sudo chown -R $USER:$USER /srv/media
sudo chown -R $USER:$USER /srv/docker
```

Structure:

```txt
/srv/media/downloads     -> torrents download here
/srv/media/anime         -> finished anime series
/srv/media/anime-movies  -> finished anime movies
```

---

## Step 3: Create docker-compose.yml

```bash
cd /srv/docker
nano docker-compose.yml
```

Paste:

```yaml
version: "3.9"

services:
  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
      - WEBUI_PORT=8080
    volumes:
      - /srv/media/downloads:/downloads
      - /srv/docker/qbittorrent:/config
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/docker/prowlarr:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime:/tv
      - /srv/media/downloads:/downloads
      - /srv/docker/sonarr:/config
    ports:
      - 8989:8989
    restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime-movies:/movies
      - /srv/media/downloads:/downloads
      - /srv/docker/radarr:/config
    ports:
      - 7878:7878
    restart: unless-stopped

  jellyfin:
    image: lscr.io/linuxserver/jellyfin:latest
    container_name: jellyfin
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Amsterdam
    volumes:
      - /srv/media/anime:/data/tvshows
      - /srv/media/anime-movies:/data/movies
      - /srv/docker/jellyfin:/config
    ports:
      - 8096:8096
    restart: unless-stopped

  seerr:
    image: ghcr.io/seerr-team/seerr:latest
    init: true
    container_name: seerr
    environment:
      - LOG_LEVEL=debug
      - TZ=Europe/Amsterdam
      - PORT=5055
    ports:
      - 5055:5055
    volumes:
      - /srv/docker/seerr:/app/config
    healthcheck:
      test: wget --no-verbose --tries=1 --spider http://localhost:5055/api/v1/status || exit 1
      start_period: 20s
      timeout: 3s
      interval: 15s
      retries: 3
    restart: unless-stopped
```

Start stack:

```bash
docker compose up -d
```

---

## qBittorrent First Login

Get generated admin password:

```bash
docker logs qbittorrent | grep password
```

Open:

[http://$[server-ip]:8080](http://$[server-ip]:8080)

Username: admin\
Password: shown in logs

Set download path to:

```txt
/downloads
```

---

## Prowlarr Setup

Open:

[http://$[server-ip]:9696](http://$[server-ip]:9696)

Add indexers:

- Nyaa.si (Torznab / `nyaa.si`)

Add Sonarr and Radarr under Settings -> Apps.

---

## Sonarr Setup

Open:

[http://$[server-ip]:8989](http://$[server-ip]:8989)

Root folder:

```txt
/tv
```

Add qBittorrent:

Host: qbittorrent\
Port: 8080\
Username: admin\
Password: generated password

Choose Anime as Series Type.

---

## Radarr Setup

Open:

[http://$[server-ip]:7878](http://$[server-ip]:7878)

Root folder:

```txt
/movies
```

Add qBittorrent:

Host: qbittorrent\
Port: 8080\
Username: admin\
Password: generated password

---

## Jellyfin Setup

Open:

[http://$[server-ip]:8096](http://$[server-ip]:8096)

Create TV library using:

```txt
/data/tvshows
```

Create Movies library using:

```txt
/data/movies
```

### Install AniDB Plugin

1. Go to **Administration** → **Dashboard** → **Plugins**
2. Click the **Available** tab at the top
3. Find **AniDB** and click it
4. Click **Install**
5. Restart Jellyfin:

```bash
docker restart jellyfin
```

After restart, AniDB will be available as a metadata provider for your anime library.

---

## Seerr Setup

Open:

[http://$[server-ip]:5055](http://$[server-ip]:5055)

Connect to Jellyfin.\
Connect to Sonarr.\
Connect to Radarr.

Add Discord webhook under **Settings** → **Notifications** → **Discord**:\
Paste your Discord webhook URL and configure notification types.

Root folder:

```txt
/tv
```

---

## Result

Request anime in Seerr.\
Sonarr/Radarr searches via Prowlarr.\
qBittorrent downloads.\
Sonarr/Radarr imports and renames.\
Jellyfin displays episodes and movies.
