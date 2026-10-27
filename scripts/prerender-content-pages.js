import { readdir, readFile, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  parseFrontmatter,
  resolveContentSlug,
} from "../src/services/frontmatterService.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const origin = "https://heckr.dev";

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const readFrontmatter = async (filepath) => {
  const source = await readFile(filepath, "utf8");
  const { frontmatter } = parseFrontmatter(
    source,
    path.relative(root, filepath),
  );
  return frontmatter;
};

const setMeta = (html, attribute, key, value) => {
  const escapedValue = escapeHtml(value);
  const tag = `<meta ${attribute}="${key}" content="${escapedValue}" />`;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[\\s\\S]*?>`, "i");

  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const setCanonical = (html, url) => {
  const tag = `<link rel="canonical" href="${escapeHtml(url)}" />`;
  const pattern = /<link\s+rel="canonical"[^>]*>/i;
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `  ${tag}\n  </head>`);
};

const contentRoutePath = (kind, slug) =>
  `/${kind === "post" ? "posts" : "projects"}/${encodeURIComponent(slug)}/`;

// `head` is what the page's component handed to provideSsrMetadata; routes
// without it (home, 404) keep the template's tags and only get the route title.
const applyHead = (html, { head, title: routeTitle }, routePath) => {
  if (!head) {
    return routeTitle
      ? html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(routeTitle)}</title>`)
      : html;
  }

  const fullTitle = `${head.title} | heckr.dev`;
  const description = head.description || "Personal portfolio and blog by Jesse.";
  const pageUrl = new URL(routePath, origin).href;
  const imageUrl = new URL(head.image || "/screenshot.png", origin).href;

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(fullTitle)}</title>`);
  html = setMeta(html, "name", "title", fullTitle);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", fullTitle);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", pageUrl);
  html = setMeta(html, "property", "og:image", imageUrl);
  html = setMeta(html, "name", "twitter:title", fullTitle);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:url", pageUrl);
  html = setMeta(html, "name", "twitter:image", imageUrl);
  return setCanonical(html, pageUrl);
};

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = await readFile(path.join(distDir, "index.html"), "utf8");

// Renders one route into the template and writes it to dist.
const createPage = async (routePath, outputFile = null) => {
  const rendered = await render(routePath);
  const html = applyHead(template, rendered, routePath)
    .replace('<div id="app"', `<div id="app" data-prerendered="${routePath === "/404" ? "404" : routePath}"`)
    .replace("<!--app-html-->", () => rendered.html);

  const file =
    outputFile ??
    path.join(distDir, routePath.replace(/^\/+|\/+$/g, ""), "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log(`prerendered ${routePath}`);
};

const sitemapUrls = [
  new URL("/", origin).href,
  new URL("/posts/", origin).href,
  new URL("/projects/", origin).href,
];
const contentRoutes = new Map();
const routePaths = ["/", "/posts/", "/projects/"];
for (const [sourceDir, kind] of [["posts", "post"], ["projects", "project"]]) {
  const filenames = (await readdir(path.join(root, sourceDir)))
    .filter((filename) => filename.endsWith(".md"))
    .sort();
  for (const filename of filenames) {
    const sourcePath = path.join(root, sourceDir, filename);
    const sourceName = path.relative(root, sourcePath);
    const fields = await readFrontmatter(sourcePath);
    const slug = resolveContentSlug(fields, filename, sourceName);
    const routePath = contentRoutePath(kind, slug);
    const previousSource = contentRoutes.get(routePath);
    if (previousSource) {
      throw new Error(
        `${sourceName}: duplicate content route '${routePath}' also used by ${previousSource}`,
      );
    }
    contentRoutes.set(routePath, sourceName);

    if (fields.unlisted !== true && fields.unlisted !== "true") {
      sitemapUrls.push(new URL(routePath, origin).href);
    }
    routePaths.push(routePath);
  }
}

for (const routePath of routePaths) {
  await createPage(routePath);
}
await createPage("/404", path.join(distDir, "404.html"));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
  .map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`)
  .join("\n")}\n</urlset>\n`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await rm(ssrDir, { recursive: true, force: true });
