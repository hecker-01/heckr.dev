const postFiles = import.meta.glob("/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

const parseFrontmatter = (content) => {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);

  if (!match) return { frontmatter: {}, content };

  const [, frontmatterText, bodyContent] = match;
  const frontmatter = {};

  const lines = frontmatterText.split("\n");
  let currentKey = null;
  let currentValue = "";

  const processValue = (key, value) => {
    value = value.trim();
    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim());
    } else {
      frontmatter[key] = value;
    }
  };

  lines.forEach((line) => {
    // Check if line is a continuation (starts with whitespace and no colon at start)
    const isContinuation = /^\s+/.test(line) && !/^\s*\w+:/.test(line);

    if (isContinuation && currentKey) {
      // Append to current value
      currentValue += " " + line.trim();
    } else {
      // Process previous key-value pair if exists
      if (currentKey && currentValue) {
        processValue(currentKey, currentValue);
      }

      // Parse new key-value pair
      const [key, ...rest] = line.split(":");
      if (!key || key.trim() === "") return;

      currentKey = key.trim();
      currentValue = rest.join(":").trim();
    }
  });

  // Process the last key-value pair
  if (currentKey && currentValue) {
    processValue(currentKey, currentValue);
  }

  return { frontmatter, content: bodyContent };
};

const loadPosts = () => {
  const posts = [];
  let id = 1;

  Object.entries(postFiles).forEach(([filepath, content]) => {
    const { frontmatter, content: body } = parseFrontmatter(content);
    const slug = filepath.split("/").pop().replace(".md", "");

    posts.push({
      id: id++,
      slug,
      title: frontmatter.title || slug,
      date: frontmatter.date || new Date().toISOString().split("T")[0],
      tags: frontmatter.tags || [],
      description: frontmatter.description || "",
      unlisted: frontmatter.unlisted === true || frontmatter.unlisted === "true",
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
    : cache.filter(post => !post.unlisted);
  return posts.sort(
    (a, b) => parseDutchDate(b.date) - parseDutchDate(a.date),
  );
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
