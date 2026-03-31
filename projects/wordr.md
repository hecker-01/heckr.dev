---
title: Wordr
slug: wordr
description: Client-side Markdown to DOCX converter
coverImage: /screenshot-wordr.png
accentColor: pink
tags: [vue, markdown, docx, vite, open-source]
url: https://wordr.heckr.dev/
github: https://github.com/hecker-01/wordr
status: active
unlisted: false
---

## About

Wordr converts Markdown into properly styled Word documents (`.docx`) entirely in the browser. There's no backend - the full pipeline from parsing to file generation runs client-side using Vue 3 and Vite.

It parses Markdown into an [mdast](https://github.com/syntax-tree/mdast) AST via `unified` and `remark`, walks the tree to build `docx` objects (paragraphs, text runs, tables, images, footnotes), and packs them into a downloadable `.docx` blob. The output uses Word's built-in styles (`Heading1`–`Heading6`, `Normal`) with Aptos and Aptos Display fonts, so documents look native in any Word-compatible editor.

## Features

- **Live editor** - paste, type, or drag-and-drop `.md` files directly into the browser
- **Real-time preview** - rendered HTML preview with GitHub Flavored Markdown support
- **One-click export** - download the converted `.docx` instantly
- **Rich formatting** - headings, bold, italic, strikethrough, ordered/unordered lists, task lists, code blocks, tables, blockquotes, links, and thematic breaks
- **Image handling** - detects image references in your Markdown and prompts you to upload them, with bulk drag-and-drop support
- **Math support** - inline and display math via KaTeX (`$...$` and `$$...$$`)
- **Footnotes** - automatically collected and mapped to Word's native footnote system
- **Zero server dependency** - everything runs in the browser, nothing is uploaded anywhere

## Technical Highlights

The conversion pipeline is split into three focused modules:

1. **`parseMarkdown.js`** - uses `unified` + `remark-parse` + `remark-gfm` + `remark-math` to produce a standards-compliant mdast tree
2. **`mdastToDocx.js`** - recursively walks the AST and maps each node type to its `docx` equivalent (paragraphs, text runs, tables, image runs, footnotes, etc.)
3. **`generateDocx.js`** - assembles the final `Document` with page margins, default fonts, and footnote configuration, then calls `Packer` to produce the blob

Images are resolved at conversion time rather than baked into the AST. The app collects every `image` node's `src`, diffs it against a user-provided `imageMap`, and fires an `onMissingImages` callback for anything unresolved - giving the user a modal to drag-and-drop the missing files before the final export.

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
