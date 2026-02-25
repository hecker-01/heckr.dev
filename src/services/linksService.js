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
  white: "#cdd6f4",
};

export const linkItems = [
  {
    id: "posts",
    label: "posts",
    href: "/posts",
    external: false,
    accentColor: "mauve",
  },
  {
    id: "github",
    label: "github",
    href: "https://github.com/Hecker-01",
    external: true,
    accentColor: "white",
  },
];

export function getLinks() {
  return linkItems.map((item) => ({
    ...item,
    accentColor: catppuccinColors[item.accentColor] || catppuccinColors.mauve,
  }));
}
