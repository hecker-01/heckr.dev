# heckr.dev

a minimalist personal portfolio and blog with a terminal-inspired aesthetic, built with modern web technologies.

## overview

this is a fully custom-built portfolio website featuring:

- **dynamic content system** - markdown-based posts and projects with custom parsing
- **live integrations** - real-time status from discord, spotify, vscode/zed, and last.fm
- **github api** - automatic fetching of repositories and contribution data
- **custom markdown parser** - extended syntax with code highlighting, hints, collapsible sections, and more
- **fully responsive** - optimized for mobile, tablet, and desktop viewing

## tech stack

**core:**

- vue 3 with composition API
- vite for blazing-fast builds
- vue router for client-side routing

**styling:**

- tailwind css for utility-first styling
- catppuccin mocha color palette
- custom animations and transitions

**markdown & syntax:**

- custom markdown parser (no external libraries)
- prism.js for syntax highlighting (25+ languages)
- support for 15+ languages including js, python, java, rust, go, yaml, and more

## project structure

```txt
heckr.dev/
├── posts/                # markdown blog posts
├── projects/             # markdown project descriptions
├── public/               # static assets (images, screenshots)
├── src/
│   ├── components/       # vue components
│   ├── pages/            # page components (Home, Posts, Projects)
│   ├── router/           # vue router configuration
│   └── services/         # business logic and API services
│       ├── markdownService.js    # custom markdown parser
│       ├── postService.js        # post management
│       ├── projectService.js     # project management
│       ├── githubService.js      # github API integration
│       └── ...
└── tailwind.config.js    # tailwind configuration
```

## features

### real-time status integrations

- **lanyard** - live discord presence, spotify now playing, vscode/zed activity
- **github** - dynamically fetched repositories with language statistics

### content management system

- **posts** - technical blog posts with tags, reading time, and date sorting
- **projects** - showcase projects with cover images, accent colors, and detailed descriptions
- **markdown** - both systems use markdown with custom extensions

### custom markdown features

the markdown parser supports extended syntax:

- **code blocks with filenames** - ` ```js:filename.js `
- **syntax highlighting** - 25+ languages via prism.js
- **hint callouts** - `:::hint info`, `:::hint warning`, etc.
- **collapsible sections** - `:::details Summary`
- **variable substitution** - `$[variable-name]` for user input
- **heading anchors** - auto-generated anchor links
- **tables, lists, blockquotes** - full markdown support

### ui/ux features

- **dual-view navigation** - seamless transitions between list and detail views
- **tag filtering** - filter posts/projects by tags
- **url query parameters** - shareable links to specific posts/projects
- **smooth animations** - page transitions and hover effects
- **responsive design** - mobile-first with adaptive layouts
- **keyboard-friendly** - accessible navigation and interactions

## content management

### adding posts

create a new `.md` file in the `/posts/` directory:

```markdown
---
title: Your Post Title
slug: your-post-slug
date: 29-03-2026
tags: [tag1, tag2, tag3]
description: A brief description of your post
unlisted: false
---

Your markdown content here...
```

**frontmatter fields:**

- `title` - Post title
- `slug` - Auto-generated from filename, but can be overridden
- `date` - Format: dd-mm-yyyy
- `tags` - Array of tags for filtering
- `description` - Shown in post list
- `unlisted` - If true, post is hidden from list but accessible via direct URL

### adding projects

create a new `.md` file in the `/projects/` directory:

```markdown
---
title: Project Name
slug: project-slug
description: Brief description for card view
coverImage: /screenshot.png
accentColor: mauve
tags: [vue, nodejs, api]
url: https://example.com
github: https://github.com/user/repo
status: active
unlisted: false
---

Full project description with markdown...
```

**frontmatter fields:**

- `title` - Project name
- `slug` - Auto-generated from filename
- `description` - Brief description for project card
- `coverImage` - Path to cover image (store in `/public/`)
- `accentColor` - One of: mauve, blue, green, red, pink, yellow, teal, sapphire, sky, lavender, peach, maroon, flamingo
- `tags` - Array of tags
- `url` - Optional live demo link
- `github` - Optional GitHub repository link
- `status` - One of: active, archived, in-progress, beta
- `unlisted` - If true, hidden from list but accessible via direct URL

**markdown features supported:**

````markdown
# Code blocks with filename

​`javascript:app.js
console.log('hello world');
​`

# Hint callouts

:::hint info
This is an informational hint.
:::

:::hint warning
Be careful with this!
:::

# Collapsible sections

:::details Click to expand
Hidden content here.
:::

# Variable substitution

Configure your server at $[server-ip]
````

posts and projects automatically appear in their respective pages once the markdown file is created. no database or manual configuration needed.

## configuration

### colors

all colors use the catppuccin mocha palette. to change the theme, edit `tailwind.config.js`:

```javascript
colors: {
  'catppuccin-base': '#1e1e2e',
  'catppuccin-mauve': '#cba6f7',
  // ... more colors
}
```

---

**live site:** [https://heckr.dev](https://heckr.dev)
