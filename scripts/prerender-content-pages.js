import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distDir = path.join(root, "dist");
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
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---/);
  const fields = {};

  if (!match) return fields;

  for (const line of match[1].split(/\r?\n/)) {
    const field = line.match(/^([\w-]+):\s*(.*)$/);
    if (!field) continue;

    let value = field[2].trim();
    if (
      (value.startsWith("\"") && value.endsWith("\"")) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    fields[field[1]] = value;
  }

  return fields;
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

const createPage = async (template, sourceDir, filename, kind) => {
  const sourcePath = path.join(root, sourceDir, filename);
  const fields = await readFrontmatter(sourcePath);
  const slug = path.basename(filename, ".md");
  const title = fields.title || slug;
  const description = fields.description || "Personal portfolio and blog by Jesse.";
  const routePath =
    kind === "project" && slug === "kitsudo"
      ? "/kitsudo/"
      : `/${kind === "post" ? "posts" : "projects"}/${encodeURIComponent(slug)}/`;
  const pageUrl = new URL(routePath, origin).href;
  const imagePath = fields.coverImage || "/screenshot.png";
  const imageUrl = new URL(imagePath, origin).href;

  let html = template.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)} | heckr.dev</title>`);
  html = setMeta(html, "name", "title", `${title} | heckr.dev`);
  html = setMeta(html, "name", "description", description);
  html = setMeta(html, "property", "og:title", `${title} | heckr.dev`);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", pageUrl);
  html = setMeta(html, "property", "og:image", imageUrl);
  html = setMeta(html, "name", "twitter:title", `${title} | heckr.dev`);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:url", pageUrl);
  html = setMeta(html, "name", "twitter:image", imageUrl);
  html = setCanonical(html, pageUrl);

  const outputDir = path.join(distDir, routePath.replace(/^\/+|\/+$/g, ""));
  await mkdir(outputDir, { recursive: true });
  await writeFile(path.join(outputDir, "index.html"), html);
};

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const sitemapUrls = [
  new URL("/", origin).href,
  new URL("/posts/", origin).href,
  new URL("/projects/", origin).href,
];
for (const [sourceDir, kind] of [["posts", "post"], ["projects", "project"]]) {
  const filenames = (await readdir(path.join(root, sourceDir)))
    .filter((filename) => filename.endsWith(".md"))
    .sort();
  for (const filename of filenames) {
    const fields = await readFrontmatter(path.join(root, sourceDir, filename));
    const slug = path.basename(filename, ".md");
    const routePath =
      kind === "project" && slug === "kitsudo"
        ? "/kitsudo/"
        : `/${kind === "post" ? "posts" : "projects"}/${encodeURIComponent(slug)}/`;
    if (fields.unlisted !== "true") {
      sitemapUrls.push(new URL(routePath, origin).href);
    }
    await createPage(template, sourceDir, filename, kind);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
  .map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`)
  .join("\n")}\n</urlset>\n`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
