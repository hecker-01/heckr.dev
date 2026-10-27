---
title: Jellycord
slug: jellycord
description: A Jellyfin plugin that shares linked users’ playback as their Discord status, complete with artwork and progress.
coverImage: /img/screenshots/screenshot-jellycord.webp
accentColor: lavender
tags: [jellyfin, discord, csharp, dotnet, plugin, privacy]
github: https://github.com/hecker-01/jellycord
status: beta
unlisted: false
---

## About

Jellycord is a server-side Jellyfin plugin that turns playback into a Discord activity. Linked users can show what they are watching or listening to, with artwork and playback progress, across TVs, phones, and browsers. They do not need the Discord desktop app running.

Each server administrator connects a Discord application, and each user links their own Discord account. Jellycord tracks Jellyfin playback and updates the linked user's activity through Discord's Social SDK presence flow.

## Features

- **Movies, episodes, and music.** Shows a film title, series and episode, or track and artist as the appropriate Watching or Listening activity.
- **Artwork and progress.** Uses available media artwork and shows a live progress bar while playback is active.
- **Per-user linking.** Users authorize their own Discord account from Jellyfin's web interface; admins can review or unlink accounts.
- **Privacy controls.** Admin and user rules can hide private libraries, tags, and ratings. Private items show only a generic Jellyfin activity, without their title or artwork.
- **Private-server artwork support.** Jellycord can use public artwork sources for servers that are not internet-accessible. Uploading unmatched posters to a temporary third-party host is optional and off by default.

## Technical Notes

The plugin listens to Jellyfin playback events, maps eligible media to Discord activities, and sends updates from the server. A privacy filter runs before artwork lookup or activity creation, and credentials are stored separately from the plugin's regular configuration.

Jellycord is an early project for Jellyfin 12 and .NET 10. Its Discord headless-sessions integration is undocumented by Discord and may change; the project keeps the presence delivery behind a replaceable sink.

## Stack

- **Platform:** Jellyfin plugin
- **Language:** C# / .NET
- **Presence:** Discord Social SDK presence flow
- **License:** GPL-3.0
