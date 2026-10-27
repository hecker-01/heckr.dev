// Head tags for one page as plain descriptors. The prerender script turns them
// into HTML and the client into DOM nodes, so both stay identical.
export const SITE_URL = "https://heckr.dev";
export const SITE_NAME = "heckr.dev";
export const DEFAULT_IMAGE = "/img/screenshots/screenshot.png";

const IMAGE_TYPES = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  svg: "image/svg+xml",
};

const WORDS_PER_MINUTE = 225;

export const readingMinutes = (text) =>
  Math.ceil(text.trim().split(/\s+/).length / WORDS_PER_MINUTE);

/** "29-01-2026" -> "2026-01-29T00:00:00+00:00" */
export const dutchDateToIso = (dateString) => {
  const [day, month, year] = dateString.split("-");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}T00:00:00+00:00`;
};

const absolute = (value) => new URL(value, SITE_URL).href;

const meta = (key, content, attribute = "name") => ({
  tag: "meta",
  attrs: { [attribute]: key, content },
});

export function buildHeadTags({
  title,
  description,
  path,
  image,
  imageWidth,
  imageHeight,
  type = "website",
  publishedTime,
  modifiedTime,
  readingTime,
  noindex = false,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const summary = description || "Personal portfolio and blog by Jesse.";
  const url = absolute(path);
  const imageUrl = absolute(image || DEFAULT_IMAGE);
  const imageType = IMAGE_TYPES[imageUrl.split(".").pop().toLowerCase()];

  const tags = [
    { tag: "title", text: fullTitle },
    meta("description", summary),
    meta(
      "robots",
      noindex
        ? "noindex, follow"
        : "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    ),
    { tag: "link", attrs: { rel: "canonical", href: url } },
    meta("og:locale", "en_US", "property"),
    meta("og:type", type, "property"),
    meta("og:title", fullTitle, "property"),
    meta("og:description", summary, "property"),
    meta("og:url", url, "property"),
    meta("og:site_name", SITE_NAME, "property"),
  ];
  if (modifiedTime) tags.push(meta("og:updated_time", modifiedTime, "property"));
  tags.push(
    meta("og:image", imageUrl, "property"),
    meta("og:image:secure_url", imageUrl, "property"),
  );
  if (imageWidth) tags.push(meta("og:image:width", String(imageWidth), "property"));
  if (imageHeight) tags.push(meta("og:image:height", String(imageHeight), "property"));
  tags.push(meta("og:image:alt", title, "property"));
  if (imageType) tags.push(meta("og:image:type", imageType, "property"));
  if (type === "article") {
    if (publishedTime) tags.push(meta("article:published_time", publishedTime, "property"));
    if (modifiedTime) tags.push(meta("article:modified_time", modifiedTime, "property"));
  }
  tags.push(
    meta("twitter:card", "summary_large_image"),
    meta("twitter:title", fullTitle),
    meta("twitter:description", summary),
    meta("twitter:image", imageUrl),
  );
  if (readingTime) {
    tags.push(
      meta("twitter:label1", "Reading time"),
      meta("twitter:data1", readingTime === 1 ? "1 minute" : `${readingTime} minutes`),
    );
  }
  return tags;
}

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Server side: the tags as an HTML string for the `<!--head-->` slot. */
export const renderHeadTags = (tags) =>
  tags
    .map(({ tag, attrs, text }) =>
      tag === "title"
        ? `<title>${escapeHtml(text)}</title>`
        : `<${tag} ${Object.entries(attrs)
            .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
            .join(" ")} data-page-head />`,
    )
    .join("\n    ");

/** Client side: swap the page's managed tags in the live document head. */
export const applyHeadTags = (tags) => {
  document.head.querySelectorAll("[data-page-head]").forEach((el) => el.remove());
  for (const { tag, attrs, text } of tags) {
    if (tag === "title") {
      document.title = text;
      continue;
    }
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) element.setAttribute(key, value);
    element.setAttribute("data-page-head", "");
    document.head.append(element);
  }
};
