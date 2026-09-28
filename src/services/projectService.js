import {
  parseFrontmatter,
  resolveContentSlug,
} from "./frontmatterService.js";

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

const loadProjects = () => {
  const projects = [];
  let id = 1;

  Object.entries(projectFiles).forEach(([filepath, content]) => {
    const { frontmatter, content: body } = parseFrontmatter(content, filepath);
    const slug = resolveContentSlug(frontmatter, filepath, filepath);

    projects.push({
      id: id++,
      slug,
      title: frontmatter.title || slug,
      description: frontmatter.description || "",
      coverImage: frontmatter.coverImage || null,
      accentColor: frontmatter.accentColor || "mauve",
      accentColorHex:
        catppuccinColors[frontmatter.accentColor] || catppuccinColors.mauve,
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
