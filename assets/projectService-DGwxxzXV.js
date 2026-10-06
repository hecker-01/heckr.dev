import{n as e,t}from"./frontmatterService-D5_gk3XS.js";var n=`---
title: Kitsudo
slug: kitsudo
description: A local-first task planner for Android with subtasks, reminders, custom themes, and a Wear OS companion.
coverImage: /screenshot-kitsudo.webp
accentColor: mauve
tags: [android, wear-os, kotlin, privacy, play-store]
url: https://kitsudo.app
github: https://github.com/hecker-01/Kitsudo
status: active
unlisted: false
---

## About

Kitsudo is a local-first task planner I built for Android. It keeps the everyday flow simple: write something down, split it into smaller steps, set a deadline, and check it off when it is done.

The app works without an account or internet connection. Tasks and preferences stay on the device, reminders are scheduled locally, and the paired Wear OS app puts the same essentials on your wrist.

## Features

- **Plan in smaller steps.** Add subtasks and complete a whole checklist by finishing its parent task.
- **Stay ahead of deadlines.** Schedule early reminders, snooze them when needed, and set quiet hours for the night.
- **Keep the task list quick.** Swipe to complete or delete with undo, then sort and filter by deadline, priority, or date added.
- **Make it feel personal.** Use Material You or choose from five Catppuccin palettes and 14 accent colors.
- **Take it to your wrist.** View and complete tasks from the Wear OS companion without reaching for your phone.

## Local by design

Kitsudo has no account system, backend, analytics, or advertising. The Room database lives on the phone, reminders are handled by Android, and phone-to-watch sync happens directly between paired devices.

That keeps the app useful offline and keeps a personal task list personal.

## Technical Highlights

- Native Android app written in **Kotlin**.
- Local persistence backed by **Room**.
- A paired **Wear OS** app that can read and update tasks.
- Local reminder scheduling with early alerts, snooze, and quiet hours.
- A theme system covering Catppuccin palettes and Material You dynamic colors.

The project is open source and can be built with Gradle:

\`\`\`bash
git clone https://github.com/hecker-01/Kitsudo.git
cd Kitsudo
./gradlew assembleGithubRelease
\`\`\`
`,r=`---
title: MCBE Pack Decryptor
slug: mcbe-pack-decryptor
description: Python CLI that decrypts encrypted Minecraft Bedrock Edition marketplace packs using AES-CFB.
coverImage: /screenshot-mcbe-decryptor.webp
accentColor: green
tags: [python, minecraft, cryptography, cli]
github: https://github.com/hecker-01/MCBE_Pack_Decryptor
status: stale
unlisted: false
---

## About

MCBE Pack Decryptor is a single-file Python CLI tool that decrypts encrypted Minecraft Bedrock Edition marketplace resource packs. Marketplace content ships with AES-CFB-encrypted assets and a \`contents.json\` manifest that maps each file to its individual decryption key. This tool reads that manifest, decrypts every listed asset, and writes the plaintext output to a new folder - all you need is the 32-byte pack key.

It handles nested subpacks automatically and provides optional verbose logging so you can watch each file get processed in real time.

## Features

- **AES-CFB decryption** of marketplace resource packs using PyCryptodome
- **Automatic key loading** from \`.key\` files placed alongside the pack folder
- **Per-file key resolution** via the encrypted \`contents.json\` manifest
- **Subpack support** - recursively decrypts all subpack directories
- **Verbose mode** - toggle detailed per-file logging at runtime
- **Graceful fallback** - files without a listed key are copied as-is instead of being skipped
- **Clear error reporting** with colored terminal output for failures

## Technical Highlights

The core decryption pipeline reads the \`contents.json\` manifest (skipping the first \`0x100\` bytes of header), decrypts it with the master pack key, then builds a lookup map of relative paths to per-file keys:

\`\`\`python
with open(contents_json_path, 'rb') as f:
    encrypted_data = f.read()

decrypted_data = aes_cfb_decrypt(encrypted_data[0x100:], decryption_key, decryption_key[:16])
contents = json.loads(decrypted_data.decode('utf-8'))

content_map = {
    info["path"]: info.get("key", "").encode()
    for info in contents.get("content", [])
}
\`\`\`

Each file is then decrypted individually using its own key from the map, with the first 16 bytes of that key used as the AES initialization vector.

:::hint info
A valid 32-byte pack key is required. The tool can load it automatically from a \`.key\` file named after the pack folder, or you can enter it manually at the prompt.
:::

### Usage

Place the encrypted pack folder and its \`.key\` file next to the script:

\`\`\`text
folder/
├── encrypted-resource-pack/
│   ├── contents.json
│   └── ...other encrypted files
├── encrypted-resource-pack.key
└── mcbe_pack_decryptor.py
\`\`\`

Then run:

\`\`\`bash
python3 mcbe_pack_decryptor.py
\`\`\`

Decrypted output lands in a new \`<pack-name>-decrypted/\` directory.

:::details Full CLI session example

\`\`\`text
┏┻┓┳┳┓┏┓ ┏┓┳┓  MCBE_Pack_Decryptor
┗━┓┃┃┃┃  ┃┃┃┃  Version 1.0
┗┳┛┛ ┗┗┛━┣┛┻┛  Made by @hecker-01

Enable verbose logging? (y/N): y
Input folder (should be in the same directory as this script): my-pack
Key loaded from my-pack.key
Processing my-pack...
Decrypted: my-pack/textures/blocks/stone.png
Decrypted: my-pack/textures/items/diamond.png
✓ Successfully processed my-pack.
No subpacks found.
Decryption complete! Output folder: /home/user/my-pack-decrypted
\`\`\`

:::
`,i=`---
title: Pingr
slug: pingr
description: Overlay a Discord ping badge onto any server icon to make your entire server think they got pinged.
coverImage: /screenshot-pingr.webp
accentColor: red
tags: [vue, discord, april-fools]
url: https://pingr.heckr.dev
github: https://github.com/hecker-01/pingr
status: stale
unlisted: false
---

## About

Pingr is a small browser tool built for April Fools. You upload your Discord server's icon, it composites a ping badge onto it, and you get back a PNG. Swap it into your server settings and every member will see an unread ping that doesn't exist. No server, no install, no dependencies beyond Vue and the Canvas API.

:::hint tip
Works best on servers where you're an admin obviously. Also works on people who leave their DMs open.
:::

## Features

- Drag and drop or click-to-upload any server icon (PNG, JPG, WEBP)
- Composites the ping overlay at 512x512 using the browser Canvas API
- Preview before downloading, with a Discord-style squircle border radius
- One-click PNG download
- "why?" button that explains the bit
- Fully client-side, nothing leaves your browser

## Technical Highlights

- Image compositing is done entirely with \`<canvas>\` - no image processing library needed
- The overlay (\`ping-overlay.png\`) is a pre-made 512x512 PNG with the badge already positioned in the bottom-right corner, so placement is just \`drawImage\` stacked twice
- Components: \`AppHeader\`, \`WhyModal\`, \`DropZone\`, \`ResultPreview\` - \`App.vue\` only holds state and the compositing logic
- Object URLs are revoked on reset and re-process to avoid memory leaks

\`\`\`js
ctx.drawImage(icon, 0, 0, SIZE, SIZE);
ctx.drawImage(overlay, 0, 0, SIZE, SIZE);

canvas.toBlob((blob) => {
  resultUrl.value = URL.createObjectURL(blob);
}, "image/png");
\`\`\`

:::details Why a pre-positioned overlay instead of drawing the badge programmatically?

Keeps things dead simple. The overlay is just a transparent PNG with the badge sitting where Discord puts it. No math, no coordinate logic, no font rendering. Drop it on top and you're done. If the badge position ever needs to change, swap the PNG.

:::

---

Built in an afternoon on April 1st. It does exactly one thing.
`,a=`---
title: Portfolio
slug: portfolio
description: Built with Vue.js and Tailwind CSS, showcasing my projects and skills.
coverImage: /screenshot.webp
accentColor: lavender
tags: [vue, tailwind, markdown, portfolio]
url: https://heckr.dev
github: https://github.com/hecker-01/website
status: active
unlisted: false
---

## About

This is the site you're looking at right now. A Vue 3 single-page application themed around a terminal aesthetic using the Catppuccin Mocha color palette. It serves as a hub for my projects and technical write-ups, with a custom markdown rendering pipeline, live Discord presence via Lanyard, and GitHub integration that pulls repository and contribution data directly from the API.

Everything is statically served - no backend, no CMS. Posts and projects are plain \`.md\` files loaded at build time through Vite's \`import.meta.glob()\`, parsed with a from-scratch markdown service, and syntax-highlighted with Prism.js.

## Features

- **Custom markdown engine** - supports fenced code blocks with filenames, collapsible \`:::details\` sections, \`:::hint\` callout blocks, variable placeholders (\`\\$[name]\`), tables, task lists, and auto-anchored headings
- **GitHub integration** - fetches all repos with language breakdowns, renders a 53-week contribution heatmap, and lists top repositories by star count
- **Discord presence** - WebSocket connection to Lanyard streams live status, Spotify activity, and VS Code rich presence into a neofetch-style status panel
- **Project showcase carousel** - auto-rotates every 10 seconds, pauses on hover, with per-project accent colors pulled from frontmatter
- **Tag filtering** - posts and projects support clickable tag filters synced to the URL query string
- **Reading time estimates** - calculated at 225 words per minute from raw markdown content
- **Page transitions** - fade + slide animations between routes with scroll position restoration
- **Console easter eggs** - type \`help()\` in the browser console, or try the Konami code

## Technical Highlights

The markdown parser works in three phases: extraction, inline transformation, and restoration. Block-level elements (code blocks, hints, details, tables) are replaced with \`__PLACEHOLDER__\` tokens first to protect them from inline regex passes, then restored after bold/italic/link/strikethrough processing is complete.

Hint blocks and details sections are parsed with their own renderers:

\`\`\`javascript:markdownService.js
const hintStyles = {
  info:    { bg: "bg-catppuccin-blue/10",   icon: "i", title: "Info" },
  warning: { bg: "bg-catppuccin-yellow/10", icon: "!", title: "Warning" },
  tip:     { bg: "bg-catppuccin-green/10",  icon: "✓", title: "Tip" },
  danger:  { bg: "bg-catppuccin-red/10",    icon: "✕", title: "Danger" },
  note:    { bg: "bg-catppuccin-mauve/10",  icon: "●", title: "Note" },
};
\`\`\`

The Lanyard service maintains a persistent WebSocket with automatic reconnect (up to 5 retries with backoff) and heartbeat responses to keep the connection alive:

\`\`\`javascript:lanyardService.js
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.op === 1) {
    // Server sent heartbeat interval - start responding
    setInterval(() => {
      socket.send(JSON.stringify({ op: 3 }));
    }, data.d.heartbeat_interval);
    // Subscribe to user presence
    socket.send(JSON.stringify({
      op: 2,
      d: { subscribe_to_id: DISCORD_USER_ID },
    }));
  }
};
\`\`\`

Projects and posts share the same loading pattern - \`import.meta.glob\` pulls all \`.md\` files from their respective folders, frontmatter is extracted via regex, and the raw body is cached after first parse.

:::hint info
The entire Catppuccin Mocha palette (20 colors from \`crust\` to \`flamingo\`) is mapped in \`tailwind.config.js\` as custom colors, so any component can use classes like \`text-catppuccin-mauve\` or \`bg-catppuccin-surface0\` directly.
:::

:::details Router and page structure

The site has four routes managed by Vue Router 4:

| Route       | Page     | Description                                                                     |
| ----------- | -------- | ------------------------------------------------------------------------------- |
| \`/\`         | Home     | Hero section, language counts, top repos, showcase carousel, contribution graph |
| \`/posts\`    | Posts    | Tag-filtered post list, opens detail via \`?post=slug\`                           |
| \`/projects\` | Projects | Tag-filtered project grid, opens detail via \`?project=slug\`                     |
| \`*\`         | NotFound | 404 fallback                                                                    |

Post and project detail views are not separate routes - they render inline when the query string contains a slug, which keeps navigation snappy and preserves filter state when closing a detail view.

:::

## Stack

- **Framework**: Vue 3 (Composition API) + Vue Router 4
- **Build**: Vite
- **Styling**: Tailwind CSS + Catppuccin Mocha
- **Syntax highlighting**: Prism.js (loaded externally)
- **HTTP**: Fetch (GitHub API, contribution API)
- **Presence**: Lanyard WebSocket API
- **Hosting**: Static deployment
`,o=`---
title: reCodr
slug: recodr
description: Desktop video re-encoder with hardware-accelerated GPU encoding via ffmpeg.
coverImage: /screenshot-recodr.webp
accentColor: mauve
tags: [electron, ffmpeg, video-encoding, desktop-app, hardware-acceleration]
github: https://github.com/hecker-01/reCodr
status: active
unlisted: false
---

## About

reCodr is an Electron desktop application that wraps ffmpeg in a clean drag-and-drop GUI for re-encoding video files. It automatically detects available hardware encoders on startup - NVIDIA NVENC, AMD AMF, Intel QSV, and Apple VideoToolbox - and falls back to software encoding when no GPU acceleration is present. Output is always MKV to preserve all video, audio, and subtitle streams without container limitations.

The app runs ffmpeg and ffprobe as child processes from the Electron main process, keeping the renderer free for UI updates like real-time progress, ETA, and encoding speed.

## Features

- **Drag & drop or file picker** - supports MKV, MP4, AVI, MOV, WebM, FLV, WMV, and more
- **Automatic hardware encoder detection** - scans \`ffmpeg -encoders\` output at startup to find available GPU encoders
- **Multi-encoder support** - NVIDIA NVENC, AMD AMF, Intel QSV, Apple VideoToolbox, and libx264/libx265 software fallback
- **Codec selection** - choose between H.264 and HEVC (H.265) per encoder family
- **Configurable quality and preset** - encoder-aware defaults (CQ for NVENC, QP for AMF, CRF for software, bitrate for HEVC VideoToolbox)
- **Multi-track audio** - select individual tracks, copy or re-encode to AAC (192k), Opus (128k), or AC3 (384k)
- **Multi-track subtitles** - select tracks, copy or convert to SRT, ASS, or MOV Text
- **Font attachment passthrough** - preserves embedded fonts for styled subtitles
- **Live progress tracking** - frame-based percentage, FPS, speed multiplier, and ETA
- **File size comparison** - shows original vs. encoded size after completion
- **Custom binary paths** - point to specific ffmpeg/ffprobe builds if they're not on PATH
- **Command preview & editing** - inspect and modify the generated ffmpeg command before encoding
- **Cross-platform builds** - Windows (portable + NSIS), macOS (DMG + ZIP), Linux (AppImage + DEB)

## Technical Highlights

The encoder family system maps each hardware API to its codec-specific flags, since every encoder has different parameter semantics:

\`\`\`javascript
const encoderFamilies = {
  nvenc: { hevc: "hevc_nvenc", h264: "h264_nvenc" },
  amf: { hevc: "hevc_amf", h264: "h264_amf" },
  qsv: { hevc: "hevc_qsv", h264: "h264_qsv" },
  videotoolbox: { hevc: "hevc_videotoolbox", h264: "h264_videotoolbox" },
  software: { hevc: "libx265", h264: "libx264" },
};
\`\`\`

\`applyVideoEncodingArgs()\` branches on the encoder family to set the right quality and preset flags - NVENC uses \`-cq\` with \`-preset p1\`–\`p7\`, AMF uses \`-qp_i\`/\`-qp_p\` with \`speed\`/\`balanced\`/\`quality\`, QSV uses \`-global_quality\`, VideoToolbox H.264 uses \`-q:v\` (1–100) while HEVC requires \`-b:v\` bitrate mode, and software uses \`-crf\` with standard x264/x265 presets.

All main↔renderer IPC uses \`ipcMain.handle()\` / \`ipcRenderer.invoke()\` for request-response, with progress updates pushed via \`event.sender.send('encode-progress', ...)\` during active encodes. Power management blocks system sleep while jobs are running using \`powerSaveBlocker\`.

:::hint info
An encoder family is included if **at least one** of its codecs (H.264 or HEVC) is detected. This matters for hardware like Intel Macs that have \`h264_videotoolbox\` but not \`hevc_videotoolbox\`, or older Intel GPUs with H.264-only QSV support.
:::

:::details Supported audio and subtitle options

### Audio re-encoding

| Option | Codec   | Bitrate  | Use case                       |
| ------ | ------- | -------- | ------------------------------ |
| Copy   | -       | Original | No quality loss, fastest       |
| AAC    | aac     | 192 kbps | Best device compatibility      |
| Opus   | libopus | 128 kbps | Best quality-to-size ratio     |
| AC3    | ac3     | 384 kbps | Dolby Digital, surround setups |

### Subtitle conversion

| Option   | Format              | Notes                           |
| -------- | ------------------- | ------------------------------- |
| Copy     | Original            | Preserves styling and format    |
| SRT      | SubRip              | Text-based subtitles only       |
| ASS      | Advanced SubStation | Retains positioning/styling     |
| MOV Text | tx3g                | MP4/MOV container compatibility |

:::

## Stack

- **Runtime:** Electron 28 (Chromium + Node.js)
- **Build:** electron-builder (multi-platform output)
- **Backend:** ffmpeg / ffprobe via \`child_process.spawn()\`
- **Language:** Vanilla JavaScript - no frameworks, no bundler
- **License:** GPL-2.0
`,s=`---
title: satisSuite
slug: satissuite
description: Modular Minecraft plugin suite for Spigot/Paper servers, covering moderation, player management, and server utilities.
coverImage: /screenshot-satissuite.webp
accentColor: mauve
tags: [java, minecraft, plugin, spigot]
url: https://satissuite.heckr.dev
status: in-progress
unlisted: true
---

## About satisSuite

satisSuite is a Minecraft plugin suite for Spigot/Paper servers. It's built around a modular architecture so server admins can enable only the parts they actually need.

## Core Modules

- **Moderation Tools**: Bans, mutes, kicks, and warnings
- **Player Management**: Player statistics, permissions, and player data
- **Server Utilities**: Quality-of-life additions for players and admins
- **Custom Features**: Extensible system for server-specific functionality

## Features

- Modular architecture, enable only what you need
- Permission-based command system
- In active development

## Technical Details

Built in Java for the Spigot/Paper API. The plugin targets clean command structure and a straightforward configuration format.
`,c=`---
title: Wordr
slug: wordr
description: Client-side Markdown to DOCX converter
coverImage: /screenshot-wordr.webp
accentColor: pink
tags: [vue, markdown, docx]
url: https://wordr.heckr.dev/
github: https://github.com/hecker-01/wordr
status: active
unlisted: false
---

## About

Wordr converts Markdown into properly styled Word documents (\`.docx\`) entirely in the browser. There's no backend - the full pipeline from parsing to file generation runs client-side using Vue 3 and Vite.

It parses Markdown into an [mdast](https://github.com/syntax-tree/mdast) AST via \`unified\` and \`remark\`, walks the tree to build \`docx\` objects (paragraphs, text runs, tables, images, footnotes), and packs them into a downloadable \`.docx\` blob. The output uses Word's built-in styles (\`Heading1\`–\`Heading6\`, \`Normal\`) with Aptos and Aptos Display fonts, so documents look native in any Word-compatible editor.

## Features

- **Live editor** - paste, type, or drag-and-drop \`.md\` files directly into the browser
- **Real-time preview** - rendered HTML preview with GitHub Flavored Markdown support
- **One-click export** - download the converted \`.docx\` instantly
- **Rich formatting** - headings, bold, italic, strikethrough, ordered/unordered lists, task lists, code blocks, tables, blockquotes, links, and thematic breaks
- **Image handling** - detects image references in your Markdown and prompts you to upload them, with bulk drag-and-drop support
- **Math support** - inline and display math via KaTeX (\`$...$\` and \`$$...$$\`)
- **Footnotes** - automatically collected and mapped to Word's native footnote system
- **Zero server dependency** - everything runs in the browser, nothing is uploaded anywhere

## Technical Highlights

The conversion pipeline is split into three focused modules:

1. **\`parseMarkdown.js\`** - uses \`unified\` + \`remark-parse\` + \`remark-gfm\` + \`remark-math\` to produce a standards-compliant mdast tree
2. **\`mdastToDocx.js\`** - recursively walks the AST and maps each node type to its \`docx\` equivalent (paragraphs, text runs, tables, image runs, footnotes, etc.)
3. **\`generateDocx.js\`** - assembles the final \`Document\` with page margins, default fonts, and footnote configuration, then calls \`Packer\` to produce the blob

Images are resolved at conversion time rather than baked into the AST. The app collects every \`image\` node's \`src\`, diffs it against a user-provided \`imageMap\`, and fires an \`onMissingImages\` callback for anything unresolved - giving the user a modal to drag-and-drop the missing files before the final export.

:::hint info
Wordr never sends your content to a server. Markdown parsing, AST transformation, and DOCX generation all happen in the browser via Web APIs.
:::

:::details Tech Stack

- **Framework:** Vue 3 + Vite
- **Markdown parsing:** unified, remark-parse, remark-gfm, remark-math
- **DOCX generation:** docx (built-in Word styles, Aptos fonts)
- **HTML preview:** remark-rehype + rehype-stringify
- **Math rendering:** KaTeX via rehype-katex
- **Icons:** Font Awesome 6
- **License:** GPL-2.0
  :::
`,l={mauve:`#cba6f7`,blue:`#89b4fa`,green:`#a6e3a1`,red:`#f38ba8`,pink:`#f5c2e7`,yellow:`#f9e2af`,teal:`#94e2d5`,sapphire:`#74c7ec`,sky:`#89dceb`,lavender:`#b4befe`,peach:`#fab387`,maroon:`#eba0ac`,flamingo:`#f2cdcd`},u=Object.assign({"/projects/kitsudo.md":n,"/projects/mcbe-pack-decryptor.md":r,"/projects/pingr.md":i,"/projects/portfolio.md":a,"/projects/recodr.md":o,"/projects/satissuite.md":s,"/projects/wordr.md":c}),d=()=>{let n=[],r=1;return Object.entries(u).forEach(([i,a])=>{let{frontmatter:o,content:s}=t(a,i),c=e(o,i,i);n.push({id:r++,slug:c,title:o.title||c,description:o.description||``,coverImage:o.coverImage||null,accentColor:o.accentColor||`mauve`,accentColorHex:l[o.accentColor]||l.mauve,tags:o.tags||[],url:o.url||null,github:o.github||null,status:o.status||`active`,unlisted:o.unlisted===!0,content:s.trim()})}),n},f=null,p=(e=!1)=>(f||=d(),(e?[...f]:f.filter(e=>!e.unlisted)).sort((e,t)=>e.title.localeCompare(t.title))),m=e=>p(!0).find(t=>t.slug===e),h=()=>{let e=new Set;return p().forEach(t=>{t.tags.forEach(t=>e.add(t))}),Array.from(e).sort()};export{h as n,m as r,p as t};