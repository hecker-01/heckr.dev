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

export const showcaseItems = [
  {
    id: 1,
    name: "This Portfolio Website",
    description:
      "Built with Vue.js and Tailwind CSS, showcasing my projects and skills.",
    link: "https://github.com/hecker-01/website",
    screenshot: "/screenshot.png",
    accentColor: "mauve",
  },
  {
    id: 2,
    name: "Main Website",
    description: "My main website built with sveltekit and tailwindcss.",
    link: "https://heckerdev.net",
    screenshot: "/screenshot-heckerdev.png",
    accentColor: "lavender",
  },
];

export function getShowcaseItems() {
  return showcaseItems.map((item) => ({
    ...item,
    accentColor: catppuccinColors[item.accentColor] || catppuccinColors.mauve,
  }));
}
