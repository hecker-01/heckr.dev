import {
  parseFrontmatter,
  resolveContentSlug,
} from "./frontmatterService.js";

const postFiles = import.meta.glob("/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const loadPosts = () => {
  const posts = [];
  let id = 1;

  Object.entries(postFiles).forEach(([filepath, content]) => {
    const { frontmatter, content: body } = parseFrontmatter(content, filepath);
    const slug = resolveContentSlug(frontmatter, filepath, filepath);

    posts.push({
      id: id++,
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || new Date().toISOString().split("T")[0],
      tags: frontmatter.tags || [],
      description: frontmatter.description || "",
      unlisted:
        frontmatter.unlisted === true || frontmatter.unlisted === "true",
      content: body.trim(),
      readingTime: calculateReadingTime(body),
    });
  });

  return posts;
};

let cache = null;

export const getAllPosts = (includeUnlisted = false) => {
  if (!cache) cache = loadPosts();
  const posts = includeUnlisted
    ? [...cache]
    : cache.filter((post) => !post.unlisted);
  return posts.sort((a, b) => parseDutchDate(b.date) - parseDutchDate(a.date));
};

export const getPostBySlug = (slug) => {
  // Include unlisted posts so they can be accessed via direct URL
  return getAllPosts(true).find((post) => post.slug === slug);
};

export const getPostsByTag = (tag) => {
  return getAllPosts().filter((post) => post.tags.includes(tag));
};

export const getAllTags = () => {
  const tags = new Set();
  getAllPosts().forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const parseDutchDate = (dateString) => {
  // Parse dd-mm-yyyy format
  const [day, month, year] = dateString.split("-");
  return new Date(year, month - 1, day);
};

export const calculateReadingTime = (content) => {
  // Average reading speed: 200-250 words per minute
  const wordsPerMinute = 225;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
};
