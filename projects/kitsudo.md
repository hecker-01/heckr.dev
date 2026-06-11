---
title: Kitsudo
slug: kitsudo
description: A local task planner for Android with subtasks, deadline reminders, and a Wear OS companion.
coverImage: /screenshot-kitsudo.png
accentColor: mauve
tags: [android, wear-os, kotlin]
url: https://kitsudo.app
github: https://github.com/hecker-01/Kitsudo
status: active
unlisted: false
---

## About

Kitsudo is a to-do and task planner for Android. It runs entirely on the
device. No account, no cloud, no tracking. You write tasks, break them into
subtasks, set deadlines, and the app reminds you before things are due.

There is a Wear OS companion so you can check and tick off tasks from your
watch without pulling out your phone.

The look is built around the Catppuccin Mocha palette with a fox mascot, five
palettes total, and 14 accent swatches, plus Material You dynamic theming for
people who want the app to match their system colors.

## Features

- **Subtasks with cascade completion.** Nest subtasks under a task. Tick the
  parent and the children check off too, so a whole checklist closes in one tap.
- **Deadlines and reminders.** Due dates with early reminders, snooze, and
  quiet hours so nothing buzzes at night.
- **Swipe to complete or delete.** Swipe one way to complete, the other to
  delete. Both have undo.
- **Sorting and filters.** Sort by deadline, priority, or date added, and
  filter down to what you need to see.
- **Theming.** Five palettes, 14 accent colors, and Material You support.
- **Local and private.** Everything stays on the device.

## Technical Highlights

- Local persistence with **Room** (the boot sequence loads "Room database v2").
- **Wear OS** companion that pairs with the phone app to mirror and update tasks.
- Reminder scheduling that respects per-user quiet hours and supports snooze.
- Theming engine covering Catppuccin palettes and Android Material You at once.

Build it from source:

```bash
git clone https://github.com/hecker-01/Kitsudo.git
cd Kitsudo
./gradlew assembleGithubRelease
```

:::details Why fully local
There is no backend and no analytics. Tasks live in the on-device Room
database, reminders are scheduled locally, and the Wear OS sync happens
directly between the paired devices. That keeps the data private and the app
usable with no network at all.
:::
