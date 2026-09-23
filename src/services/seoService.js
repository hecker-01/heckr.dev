const updateMeta = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.setAttribute("content", content);
};

export const setPageMetadata = ({ title, description, path, image }) => {
  const pageTitle = `${title} | heckr.dev`;
  const pageUrl = new URL(path, window.location.origin).href;
  const pageDescription = description || "Personal portfolio and blog by Jesse.";

  document.title = pageTitle;
  updateMeta("name", "title", pageTitle);
  updateMeta("name", "description", pageDescription);
  updateMeta("property", "og:title", pageTitle);
  updateMeta("property", "og:description", pageDescription);
  updateMeta("property", "og:url", pageUrl);
  const imageUrl = new URL(image || "/screenshot.png", window.location.origin).href;
  updateMeta("property", "og:image", imageUrl);
  updateMeta("name", "twitter:title", pageTitle);
  updateMeta("name", "twitter:description", pageDescription);
  updateMeta("name", "twitter:url", pageUrl);
  updateMeta("name", "twitter:image", imageUrl);

  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }
  canonical.href = pageUrl;
};
