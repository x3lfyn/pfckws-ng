import typography from "npm:@tailwindcss/typography";

export default {
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: ["Fantasque", "monospace"],
      serif: ["Roboto Slab", "serif"],
    },
    colors: {
      bg: {
        hard: "#0D1017",
        soft: "#212733",
        0: "#131721",
      },
      fg: {
        0: "#BFBDB6",
        link: "#73b8ff",
        currentPage: "#6c5980",
        dark: "#9c9a93",
      },
    },
  },
  plugins: [typography],
  corePlugins: {
    preflight: false,
  },
};
