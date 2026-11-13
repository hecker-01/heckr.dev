---
title: Look Studio
slug: look-studio
description: A theme for Pterodactyl 2.0 with 16 looks, 7 bar layouts, server card styles and a live editor.
coverImage: /img/screenshots/screenshot-look-studio.webp
accentColor: pink
tags: [pterodactyl, theme, php, typescript, react, game-hosting]
url: https://builtbybit.com/resources/look-studio.138080/
status: active
unlisted: false
---

## About

Look Studio restyles the Pterodactyl 2.0 panel without touching core files. You pick a look and a colour, move the bars where you want them, change how server cards look, and see every change on a mock panel before you save.

It is an extension, so it installs from the admin area and can be removed again. If a page ever misbehaves, add `?safe_mode=1` to the address and the classic panel comes back.

## Features

- **16 looks and 30 colours.** Glass, Neon, Paper, Terminal and more, in dark and light, or your own accent colour.
- **7 bar layouts.** Top bar, sidebar, icon rail or a floating dock. It works on phones too.
- **6 server card styles.** Tile, Banner, Neon, Outline, Compact and Rows, with start and stop buttons.
- **A live editor.** Admin > Look editor previews every change. Looks can be exported and imported as files.
- **Announcements, custom buttons and short links.** Banners with a schedule and audience, buttons next to the power controls, and `/link/discord` style redirects.
- **Command palette.** Press Ctrl or Cmd+K to jump to any page or server.
- **Arrange the console.** Drag the console page's blocks into your own order.

## Technical Highlights

- Written as a Pterodactyl 2.0 theme extension in **TypeScript** and **React**, with a small **PHP** backend for announcements, buttons and redirects.
- Colours come from oklch palettes. Every look keeps WCAG AA contrast for text, muted text and borders in both dark and light.
- Every address an admin enters is checked on the server and in the browser, and only http and https are allowed.
- The editor preview is a mock panel, because the panel sends `X-Frame-Options: DENY`.

It installs like any other extension:

```bash
php artisan p:extension:install look-studio-<version>.pteroext --enable
php artisan p:theme:activate look-studio
```

:::hint info
Look Studio needs Pterodactyl Panel 2.0. It is original work and is not affiliated with any commercial product.
:::

:::details What happens if I remove it?
Nothing breaks. The panel goes back to the classic theme. Announcements, buttons and short links live in their own `ext_look_studio_*` tables.
:::
