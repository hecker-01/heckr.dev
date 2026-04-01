# Prompt Example: Generate A Valid Project Markdown File

Copy/paste this prompt into Copilot Chat when you want it to generate a new project file for this website.

---

You are generating a single markdown file for the `/projects/` folder of a Vue portfolio site.

Output requirements:

- Return ONLY the final markdown file content.
- Do NOT wrap output in triple backticks.
- Do NOT add explanations before or after the file.

Frontmatter rules (must match exactly):

- Include this YAML-style frontmatter block at the top:
  - `title`
  - `slug`
  - `description`
  - `coverImage`
  - `accentColor`
  - `tags`
  - `url` (optional)
  - `github` (optional)
  - `status`
  - `unlisted`
- Use this shape:

---

title: <Project Name>
slug: <kebab-case-slug>
description: <1 sentence for card view>
coverImage: </image-from-public-folder.png>
accentColor: <one valid color>
tags: [tag1, tag2, tag3]
url: <https://live-site-or-omit>
github: <https://github.com/user/repo-or-omit>
status: <active|archived|in-progress|beta|stale>
unlisted: <true|false>

---

Valid `accentColor` values:

- `mauve`, `blue`, `green`, `red`, `pink`, `yellow`, `teal`, `sapphire`, `sky`, `lavender`, `peach`, `maroon`, `flamingo`

Markdown parsing features supported by this site:

- Headings (`#`, `##`, `###`)
- Bold, italic, bold-italic, strikethrough
- Inline code: `` `code` ``
- Fenced code blocks with language: ` ```bash `
- Fenced code blocks with filename: ` ```yaml:docker-compose.yml `
- Tables
- Ordered and unordered lists
- Blockquotes
- Horizontal rules (`---`)
- Links and images
- Collapsible sections:
  - `:::details Title`
  - content
  - `:::`
- Hint/callout blocks:
  - `:::hint info|tip|warning|danger|note`
  - content
  - `:::`
- Variable placeholders:
  - `$[variable-name]`
  - escaped literal: `\\$[variable-name]`

Writing style:

- Write in plain, natural language. Short sentences. No filler.
- Do NOT use em dashes (—) anywhere in the content.
- Do NOT use AI-sounding phrases like "dive into", "seamlessly", "robust", "leverages", "cutting-edge", "unlock", "empower", "streamline", or similar.
- Write like a developer describing their own project, not a product landing page.

Quality constraints:

- Keep copy concrete and technical, not generic marketing fluff.
- Include at least:
  - 1 `## About` section
  - 1 `## Features` section with bullet points
  - 1 `## Technical Highlights` section
  - 1 code block
  - 1 hint block
  - 1 details block
- Make sure markdown syntax is valid for this parser.

Before asking the user for any information, search the codebase, README, package.json, git history, and any other available context to fill in as much as possible yourself. Only ask for details you genuinely cannot find or infer.

Now generate a project markdown file using this input:

- Project name: <PROJECT_NAME>
- Slug: <PROJECT_SLUG>
- One-line description: <SHORT_DESCRIPTION>
- Cover image path: <COVER_IMAGE_PATH_IN_PUBLIC>
- Accent color: <ACCENT_COLOR>
- Tags: <TAG_1, TAG_2, TAG_3>
- Live URL: <LIVE_URL_OR_NONE>
- GitHub URL: <GITHUB_URL_OR_NONE>
- Status: <active|archived|in-progress|beta|stale>
- Unlisted: <true|false>
- Project summary/context:
  <PASTE YOUR PROJECT NOTES HERE>

If Live URL is `NONE`, omit the `url` field.
If GitHub URL is `NONE`, omit the `github` field.
