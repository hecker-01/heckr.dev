const catppuccinColors = {
  mauve: "#cba6f7",
  blue: "#89b4fa",
  green: "#a6e3a1",
  red: "#f38ba8",
  pink: "#f5c2e7",
  yellow: "#f9e2af",
  teal: "#94e2d5",
  sapphire: "#74c7ec",
  sky: "#89dceb",
  lavender: "#b4befe",
  peach: "#fab387",
  maroon: "#eba0ac",
  flamingo: "#f2cdcd",
};

const projectFiles = import.meta.glob("/projects/*.md", {
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
    } else if (value === "true") {
      frontmatter[key] = true;
    } else if (value === "false") {
      frontmatter[key] = false;
    } else {
      frontmatter[key] = value;
    }
  };

  lines.forEach((line) => {
    const isContinuation = /^\s+/.test(line) && !/^\s*\w+:/.test(line);

    if (isContinuation && currentKey) {
      currentValue += " " + line.trim();
    } else {
      if (currentKey && currentValue) {
        processValue(currentKey, currentValue);
      }

      const [key, ...rest] = line.split(":");
      if (!key || key.trim() === "") return;

      currentKey = key.trim();
      currentValue = rest.join(":").trim();
    }
  });

  if (currentKey && currentValue) {
    processValue(currentKey, currentValue);
  }

  return { frontmatter, content: bodyContent };
};

const loadProjects = () => {
  const projects = [];
  let id = 1;

  Object.entries(projectFiles).forEach(([filepath, content]) => {
    const { frontmatter, content: body } = parseFrontmatter(content);
    const slug = filepath.split("/").pop().replace(".md", "");

    projects.push({
      id: id++,
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description || "",
      coverImage: frontmatter.coverImage || null,
      accentColor: frontmatter.accentColor || "mauve",
      accentColorHex: catppuccinColors[frontmatter.accentColor] || catppuccinColors.mauve,
      tags: frontmatter.tags || [],
      url: frontmatter.url || null,
      github: frontmatter.github || null,
      status: frontmatter.status || "active",
      unlisted: frontmatter.unlisted === true,
      content: body.trim(),
    });
  });

  return projects;
};

let cache = null;

export const getAllProjects = (includeUnlisted = false) => {
  if (!cache) cache = loadProjects();
  const projects = includeUnlisted
    ? [...cache]
    : cache.filter((project) => !project.unlisted);
  return projects.sort((a, b) => a.title.localeCompare(b.title));
};

export const getProjectBySlug = (slug) => {
  return getAllProjects(true).find((project) => project.slug === slug);
};

export const getProjectsByTag = (tag) => {
  return getAllProjects().filter((project) => project.tags.includes(tag));
};

export const getAllTags = () => {
  const tags = new Set();
  getAllProjects().forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
};

export const catppuccin = catppuccinColors;
