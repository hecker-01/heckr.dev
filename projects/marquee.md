---
title: Marquee
slug: marquee
description: A small card slides in on your desktop whenever a new Spotify song starts, then slips away.
coverImage: /img/screenshots/screenshot-marquee.webp
accentColor: peach
tags: [rust, windows, macos, desktop-app, spotify]
github: https://github.com/hecker-01/Marquee
status: active
unlisted: false
---

## About

Marquee answers "what song is this?" without making you find the Spotify window. When a new track starts, a small card with the cover, title, artist and album appears in a corner of your screen for a few seconds and then leaves. It runs on Windows 10/11 and macOS 13+.

It never asks for your Spotify login. Spotify already tells the operating system what is playing, and Marquee listens to that.

:::hint note
Marquee is an independent project and is not affiliated with Spotify. macOS support is newer and has had less real-world testing than Windows.
:::

## Features

- Three themes: System (follows light and dark mode), Spotify (dark green style) and Cover (gradient from the album art)
- Any of the four screen corners, 3, 5 or 8 seconds on screen, primary monitor or the one your mouse is on
- Fades out when your mouse gets close
- Lives in the tray (Windows) or menu bar (macOS), with a "Test card" button
- Optional start at login
- Settings apply instantly and are saved to a JSON file

## Technical Highlights

- Written in Rust. The card is drawn from native parts on each platform, not a web view
- Windows reads the Global System Media Transport Controls session, macOS listens to Spotify's distributed notification
- Windows 11 uses DWM round corners and a transient acrylic backdrop, tinted so the card matches a real system toast
- Around 6.6 MB private working set and about 0.1 % of one core while Spotify plays
- The only network request is the album cover. On macOS it comes from Spotify's public page for the song

```bash
cargo build --release
```

:::details Known quirks
- Windows has no track id, so Marquee builds one from artist, title and album
- Ads on Windows are detected by an empty artist
- Spotify sometimes reports a skip several seconds late
- Exclusive fullscreen games can draw over the card
:::
