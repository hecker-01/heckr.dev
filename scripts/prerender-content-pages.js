import { execFile } from "node:child_process";
import { readdir, readFile, mkdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { promisify } from "node:util";
import {
  parseFrontmatter,
  resolveContentSlug,
} from "../src/services/frontmatterService.js";
import {
  DEFAULT_IMAGE,
  buildHeadTags,
  renderHeadTags,
} from "../src/services/headTags.js";

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

const contentRoutePath = (kind, slug) =>
  `/${kind === "post" ? "posts" : "projects"}/${encodeURIComponent(slug)}/`;

// Pixel size of a PNG/JPEG/WebP, for og:image:width/height.
const imageSize = async (publicPath) => {
  let buf;
  try {
    buf = await readFile(path.join(root, "public", publicPath));
  } catch {
    return null;
  }
  if (buf.toString("latin1", 1, 4) === "PNG") {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
  }
  if (buf.toString("latin1", 0, 4) === "RIFF" && buf.toString("latin1", 8, 12) === "WEBP") {
    const kind = buf.toString("latin1", 12, 16);
    if (kind === "VP8X") return { width: buf.readUIntLE(24, 3) + 1, height: buf.readUIntLE(27, 3) + 1 };
    if (kind === "VP8L") {
      const bits = buf.readUInt32LE(21);
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (kind === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
  }
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    for (let i = 2; i < buf.length - 9; ) {
      if (buf[i] !== 0xff) { i++; continue; }
      const marker = buf[i + 1];
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { width: buf.readUInt16BE(i + 7), height: buf.readUInt16BE(i + 5) };
      }
      i += 2 + buf.readUInt16BE(i + 2);
    }
  }
  return null;
};

const { render } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);
const template = await readFile(path.join(distDir, "index.html"), "utf8");

// First/last commit date of a source file (else its mtime), formatted like
// "2026-10-27T09:30:30+00:00".
const isoUtc = (date) => date.toISOString().replace(/\.\d{3}Z$/, "+00:00");
const commitDate = async (filepath, first) => {
  try {
    const { stdout } = await promisify(execFile)(
      "git",
      ["log", "--format=%cI", "--", filepath],
      { cwd: root },
    );
    const dates = stdout.trim().split("\n").filter(Boolean);
    if (dates.length) return new Date(dates[first ? dates.length - 1 : 0]);
  } catch {
    // not a git checkout
  }
  return (await stat(filepath)).mtime;
};
const lastModified = async (filepath) => isoUtc(await commitDate(filepath, false));
const newest = (entries) => entries.map((entry) => entry.lastmod).sort().at(-1);

// Source markdown file behind each content route (filled in below), for dates.
const contentSources = new Map();

// Renders one route into the template and writes it to dist.
const createPage = async (routePath, outputFile = null) => {
  const rendered = await render(routePath);
  const page = { ...rendered.head };

  const source = contentSources.get(routePath);
  if (source && page.type === "article") {
    page.publishedTime ||= isoUtc(await commitDate(source, true));
    page.modifiedTime ||= await lastModified(source);
  }
  const size = await imageSize(page.image || DEFAULT_IMAGE);
  if (size) {
    page.imageWidth = size.width;
    page.imageHeight = size.height;
  }

  const html = template
    .replace("<!--head-->", () => renderHeadTags(buildHeadTags(page)))
    .replace('<div id="app"', `<div id="app" data-prerendered="${routePath === "/404" ? "404" : routePath}"`)
    .replace("<!--app-html-->", () => rendered.html);

  const file =
    outputFile ??
    path.join(distDir, routePath.replace(/^\/+|\/+$/g, ""), "index.html");
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
  console.log(`prerendered ${routePath}`);
};

const sitemapEntries = { post: [], project: [] };
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
    contentSources.set(routePath, sourcePath);

    if (fields.unlisted !== true && fields.unlisted !== "true") {
      sitemapEntries[kind].push({
        loc: new URL(routePath, origin).href,
        lastmod: await lastModified(sourcePath),
      });
    }
    routePaths.push(routePath);
  }
}

for (const routePath of routePaths) {
  await createPage(routePath);
}
await createPage("/404", path.join(distDir, "404.html"));

const sitemapUrls = [
  { loc: new URL("/", origin).href, lastmod: newest([...sitemapEntries.post, ...sitemapEntries.project]) },
  { loc: new URL("/posts/", origin).href, lastmod: newest(sitemapEntries.post) },
  { loc: new URL("/projects/", origin).href, lastmod: newest(sitemapEntries.project) },
  ...sitemapEntries.post,
  ...sitemapEntries.project,
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls
  .map(
    ({ loc, lastmod }) =>
      `\t<url>\n\t\t<loc>${escapeHtml(loc)}</loc>\n\t\t<lastmod>${lastmod}</lastmod>\n\t</url>`,
  )
  .join("\n")}
</urlset>
`;
await writeFile(path.join(distDir, "sitemap.xml"), sitemap);
await rm(ssrDir, { recursive: true, force: true });
