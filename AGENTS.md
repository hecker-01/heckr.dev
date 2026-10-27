# AGENTS.md

Instructions for keeping heckr.dev consistent. Read this before changing content, images, routes, or build scripts.

## Stack and build

Vue 3 + Vue Router + Tailwind 4, built with Vite, deployed to GitHub Pages (`.github/workflows/deploy.yml`, branch `production`).

`npm run build` runs, in order:

1. `scripts/generate-favicons.js` – favicon variants from `public/favicon.png`
2. `scripts/optimize-images.js` – `.webp` + `-640.webp` for every PNG/JPEG in `public/`
3. `vite build` – client bundle into `dist/`
4. `vite build --ssr src/entry-server.js --outDir dist-ssr` – server entry
5. `scripts/prerender-content-pages.js` – renders every route to static HTML, writes `sitemap.xml` and `404.html`, deletes `dist-ssr/`

Run `npm run build` after any change to routes, content, images, head tags or scripts, and check the output in `dist/` (see "Verifying").

## Content (posts and projects)

- Posts live in `posts/*.md`, projects in `projects/*.md`. Frontmatter is parsed by `src/services/frontmatterService.js`.
- `slug` must be lowercase letters, numbers and single hyphens; it becomes the URL (`/posts/<slug>/`, `/projects/<slug>/`). Duplicate routes fail the build.
- Projects: `title, slug, description, coverImage, accentColor, tags, url, github, status, unlisted`. See `prompt-example-project.md` for the full rules.
- Posts: `title, slug, date (dd-mm-yyyy), tags, description, unlisted`.
- `unlisted: true` keeps a page out of the sitemap and sets `noindex`.
- Adding a page needs no manual route, sitemap or prerender edits: the prerender script finds every `.md` file. Kitsudo is the only project with its own page (`src/pages/Kitsudo.vue`, route `/projects/kitsudo`, registered before `/projects/:slug` in `src/router/index.js`).
- After adding or removing a notable page, update `public/llms.txt` (it is hand-written) and the README if the structure changed.

## Images

- All images live under `public/img/` and are referenced as `/img/...`: `screenshots/` (project covers), `kitsudo/`, `widevine/`. Favicons, the manifest and `favicon.ico` stay at the root; `oneko/` is a script plus sprite and stays where it is.
- Reference images with absolute paths. Never use page-relative paths in markdown.
- Never hand-make WebP or 640px files. `scripts/optimize-images.js` creates `name.webp` (max 1200px wide) and `name-640.webp` (640px) next to every PNG/JPEG, skipping outputs newer than the source. Commit the generated files.
- Project `coverImage` should point at the `.webp`: the showcase carousel derives the 640px variant by replacing `.webp` with `-640.webp`.
- To replace an image, overwrite the source PNG/JPEG and rerun the script (or the build). If the old WebP is newer than the new source, delete the old `.webp` files first.
- Moving or renaming an image changes public URLs that link previews may have cached. Avoid it without a reason.

## Favicons

- The master is `public/favicon.png` (1024px). `scripts/generate-favicons.js` writes `favicon.ico`, `favicon-{16,32,48}x*.png`, `apple-touch-icon.png`, `android-chrome-{192,512}x*.png`, `maskable-icon-512x512.png` and `site.webmanifest`. Do not edit the generated files by hand.
- `index.html` links them. Update the links and the generator together if a size is added or removed.
- `favicon.svg` is not linked on purpose: it draws text with a font, so it renders differently across systems.

## Head tags (SEO)

- Every page renders `<PageHead v-bind="head" />` (`src/components/PageHead.js`). It is the only owner of `<title>`, description, robots, canonical, Open Graph and Twitter tags. Do not add those to `index.html` or set `document.title` elsewhere.
- Props: `title, description, path, image, type ("website" | "article"), publishedTime, modifiedTime, readingTime, noindex`. `path` should end in `/`. A new page type must pass at least `title`, `description` and `path`.
- Tags are built in one place, `src/services/headTags.js` (`buildHeadTags`). Change tags there only.
- Prerender collects the page's props through the SSR context and adds what only the build knows: image width/height (read from the file) and git-based dates. Project dates come from git history, so CI keeps `fetch-depth: 0`; do not remove it.
- Only one `PageHead` should be active at a time (Projects and Posts hide theirs while showing the not-found view).

## Prerendering and SSR safety

Every route is rendered to HTML at build time and hydrated in the browser (`src/main.js`). Hydration only happens when `#app[data-prerendered]` matches the current route and there is no legacy `?project=` / `?post=` query; otherwise the client renders fresh.

When touching pages or components:

- Anything that touches `window`, `document`, `navigator`, `localStorage`, timers, WebSockets or `fetch` belongs in `onMounted`, or must be guarded with `typeof window !== "undefined"`. Module top level counts (see `lanyardService.js`).
- Initial state must be computed synchronously in `setup` so the server and the first client render match. Do not load data in `onMounted` for content that should be in the HTML (see `Projects.vue`, `Posts.vue`, `ShowcaseCarousel.vue`). Avoid `Date.now()`/`Math.random()` in rendered output.
- `<Teleport to="body">` cannot hydrate from prerendered markup. Render it only after mount (see `ImageLightbox.vue`).
- Markdown is sanitized with DOMPurify. In Node there is no DOM, so `src/entry-server.js` injects a jsdom-backed sanitizer through `setSanitizer` in `markdownService.js`. Keep both paths working.
- Routes live in `src/router/index.js` via `createAppRouter(history)`. Importing it must not touch browser APIs. `/kitsudo` redirects to `/projects/kitsudo`.

## Sitemap, robots, llms.txt

- `sitemap.xml` is generated by the prerender script (Rank Math style, `<lastmod>` per URL from git). Do not hand-edit it; `robots.txt` points at it.
- `public/llms.txt` is manual. Keep its page list in sync with the site.

## Verifying changes

1. `npm run build` completes with no errors; no `<!--app-html-->` or `<!--head-->` left in `dist/**/*.html`.
2. Spot-check `dist/projects/kitsudo/index.html`, `dist/index.html`, a post and `dist/404.html` for the page content, `<title>`, canonical, `og:image` and `robots`.
3. `npx vite preview`, then load a prerendered page in the browser and check for hydration warnings. To make them visible in a production build, temporarily add `define: { __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true }` to `vite.config.js` and remove it afterwards.
4. Check that images load (no 404s) and that tag filtering, project open/back and the Kitsudo lightbox still work.

## Conventions

- Commit messages use conventional prefixes (`feat(seo):`, `fix(seo):`, `perf(pagespeed):`, `chore(deps):`, `refactor(routes):`). Do not add AI attribution or co-author lines.
- Do not commit `dist/`, `dist-ssr/` or `.claude/`.
- Keep the README's project structure section accurate when folders or scripts change.
