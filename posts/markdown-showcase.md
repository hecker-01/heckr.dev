---
title: Markdown Features Showcase
slug: markdown-showcase
date: 01-03-2026
tags: [documentation, markdown, reference]
description: A comprehensive showcase of all custom markdown features available in posts.
unlisted: true
---

This post demonstrates all the custom markdown features available for writing posts. Use this as a reference when creating new content.

---

## Code Blocks

Code blocks support syntax highlighting and an optional filename in the header bar.

### Basic Code Block

Just specify the language:

```bash
docker compose up -d
```

**Syntax:**

```txt
\`\`\`bash
docker compose up -d
\`\`\`
```

### Code Block with Filename

Add a filename after the language using a colon:

```yaml:docker-compose.yml
services:
  app:
    image: nginx:latest
    ports:
      - "8080:80"
```

**Syntax:**

```txt
\`\`\`yaml:docker-compose.yml
services:
  app:
    image: nginx:latest
    ports:
      - "8080:80"
\`\`\`
```

### Supported Languages

`bash`, `yaml`, `javascript`, `python`, `css`, `dockerfile`, `txt`, and more via Prism.js.

---

## Dropdown/Collapsible Sections

Use dropdowns to hide content until clicked. Great for platform-specific instructions or optional details.

:::details Linux/Ubuntu Installation
Remove old packages:

```bash
sudo apt remove docker.io docker-compose -y
```

Install Docker:

```bash
sudo apt install docker-ce docker-ce-cli containerd.io -y
```

:::

:::details Windows Installation
Download and install Docker Desktop from the official website.
:::

:::details macOS Installation
Download Docker Desktop for Mac or use Homebrew:

```bash
brew install --cask docker
```

:::

**Syntax:**

```txt
:::details Title Goes Here
Your content here. Can include code blocks, lists, etc.
:::
```

---

## Hints / Callouts

Use hints to highlight important information with different severity levels.

### Info

:::hint info
This is general information that might be useful to know.
:::

**Syntax:**

```txt
:::hint info
This is general information that might be useful to know.
:::
```

### Tip

:::hint tip
Pro tip: Use keyboard shortcuts to work faster!
:::

**Syntax:**

```txt
:::hint tip
Pro tip: Use keyboard shortcuts to work faster!
:::
```

### Warning

:::hint warning
Make sure to backup your data before proceeding.
:::

**Syntax:**

```txt
:::hint warning
Make sure to backup your data before proceeding.
:::
```

### Danger

:::hint danger
This action is irreversible and will delete all data!
:::

**Syntax:**

```txt
:::hint danger
This action is irreversible and will delete all data!
:::
```

### Note

:::hint note
This feature is only available in version 2.0 and above.
:::

**Syntax:**

```txt
:::hint note
This feature is only available in version 2.0 and above.
:::
```

---

## Tables

Tables support inline code inside cells.

| Command            | Description             |
| ------------------ | ----------------------- |
| `docker ps`        | List running containers |
| `docker images`    | List downloaded images  |
| `docker stop name` | Stop a container        |
| `docker rm name`   | Remove a container      |

**Syntax:**

```txt
| Command | Description |
| ------- | ----------- |
| `docker ps` | List running containers |
| `docker images` | List downloaded images |
```

---

## Lists

### Unordered Lists

- First item
- Second item
- Third item

**Syntax:**

```txt
- First item
- Second item
- Third item
```

### Ordered Lists

1. First step
2. Second step
3. Third step

**Syntax:**

```txt
1. First step
2. Second step
3. Third step
```

---

## Text Formatting

### Inline Code

Use `backticks` for inline code.

**Syntax:** `\`backticks\``

### Bold

Use **double asterisks** for bold text.

**Syntax:** `**double asterisks**`

### Italic

Use _single asterisks_ for italic text.

**Syntax:** `*single asterisks*`

### Bold Italic

Use **_double asterisks with underscores_** for bold italic.

**Syntax:** `**_double asterisks with underscores_**`

### Strikethrough

Use ~~double tildes~~ for strikethrough.

**Syntax:** `~~double tildes~~`

---

## Links and Images

### Links

Check out the [Docker documentation](https://docs.docker.com/).

**Syntax:** `[link text](https://url.com/)`

### Images

![site-screenshot](screenshot.png)

**Syntax:** `![alt text](image-url.jpg)`

---

## Blockquotes

> This is a blockquote. Use it for quotes or important callouts.

**Syntax:**

```txt
> This is a blockquote.
```

---

## Horizontal Rules

Use `---` on its own line for a horizontal rule.

---

## Variable Substitution

You can use variables that readers can fill in:

Server IP: $[server-ip]

**Syntax:** `\$[variable-name]`

To escape a variable (show it literally), use a backslash: `\\$[variable-name]`

---

## Headings

Headings automatically get anchor links (hover to see the `#` link).

```txt
# H1 Heading
## H2 Heading
### H3 Heading
```

---

## Complete Example

Here's a real-world example combining multiple features:

:::hint tip
This guide assumes you have Docker installed. See the installation section below if needed.
:::

:::details Installation Instructions

```bash
# Install Docker on Ubuntu
sudo apt update
sudo apt install docker-ce -y
```

:::

### Quick Start

1. Create a compose file
2. Start the stack
3. Verify it's running

```yaml:docker-compose.yml
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
```

```bash
docker compose up -d
docker ps
```

| Service | Port | Status  |
| ------- | ---- | ------- |
| `web`   | `80` | Running |

:::hint warning
Remember to open port 80 in your firewall!
:::
