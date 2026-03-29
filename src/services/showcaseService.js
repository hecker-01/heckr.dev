// This service is now powered by projectService.js
// Projects are stored as markdown files in /projects/ directory

import { getAllProjects } from "./projectService.js";

export function getShowcaseItems() {
  return getAllProjects().map((project) => ({
    id: project.id,
    slug: project.slug,
    name: project.title,
    description: project.description,
    link: project.url || project.github || "#",
    screenshot: project.coverImage,
    accentColor: project.accentColorHex,
  }));
}
