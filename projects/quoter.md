---
title: Quoter
slug: quoter
description: A Discord bot that turns any message into a beautiful quote image, perfect for sharing and saving conversations.
coverImage: /img/screenshots/screenshot-quoter.webp
accentColor: lavender
tags: [discord, discord-bot, nodejs, discordjs, canvas]
url: https://discord.com/oauth2/authorize?client_id=1373998912569872497
urlLabel: Add to Discord
github: https://github.com/hecker-01/quoter
status: active
unlisted: false
---

## About

> "Every message has a story; I'll make sure it's remembered." — Quoter

Quoter makes sure that every message on your Discord server is remembered. Easily quote messages as beautiful images, perfect for sharing and saving meaningful conversations. Simple, sleek, and user-friendly.

Right-click a message, pick **Quote Message**, and the image appears in the channel: the author's avatar next to the message text, their name and the date. It works in servers, group DMs and in the app's own DMs. Every quote comes with controls underneath, so you can restyle it after the fact without making a new one.

**[Add Quoter to your server](https://discord.com/oauth2/authorize?client_id=1373998912569872497)**

## How to use it

- Right-click (or long-press) a message, then **Apps**, then **Quote Message**
- Choose **Quote Message Silently** to keep the quote private to you
- Reply to a message and mention the app to quote it
- `/quote` takes a message link or ID, and an optional starting theme
- `/help`, or mentioning the app on its own, shows these steps

:::hint note
Quoter needs the **Attach Files** permission in a channel to send the image.
:::

## Customization

- Eight themes, from soft black and white to rose, silver, warm, muted, haze and gold
- Nineteen fonts, three sizes or a custom size, and your own text colors by hex code
- Image effects: GIF export, curved blend, flip, lyric style, grayscale, blur, brightness, pixelate, speech bubble, magik and hide name
- Text colors are chosen to stay readable on each theme, including the random-color option
- Quotes cover message text, attachments, stickers and embeds, with Discord and unicode emoji drawn as images

## Technical Highlights

- Written in Node.js with discord.js. The image is drawn with `@napi-rs/canvas` at 857 × 450 and rendered at 2× for sharp text
- Emoji are drawn from a Twemoji image set, so they look the same on every device
- The speech bubble is a real transparent cut-out in PNGs. GIFs only have on/off transparency, so the edge is snapped to fully opaque or fully clear
- Customization state is kept in memory with a bounded cache, and only the person who made a quote can change it

:::details Known quirks
- GIFs have 256 colors, so soft gradients show banding
- Custom colors and sizes are forgotten when the app restarts; the controls on an older quote fall back to the theme defaults
- Lyric style is its own layout, so curved blend and magik do nothing there
:::
