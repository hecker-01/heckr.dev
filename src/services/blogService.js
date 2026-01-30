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

  frontmatterText.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) return;

    const value = rest.join(":").trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      frontmatter[key.trim()] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim());
    } else {
      frontmatter[key.trim()] = value;
    }
  });

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
      content: body.trim(),
      readingTime: calculateReadingTime(body),
    });
  });

  return posts;
};

let cache = null;

export const getAllPosts = () => {
  if (!cache) cache = loadPosts();
  return [...cache].sort(
    (a, b) => parseDutchDate(b.date) - parseDutchDate(a.date),
  );
};

export const getPostBySlug = (slug) => {
  return getAllPosts().find((post) => post.slug === slug);
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
