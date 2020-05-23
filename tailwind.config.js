module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: [
      "src/**/*.css",
      "src/**/*.scss",
      "src/**/*.sass",
      "src/**/*.html",
      "src/**/*.js",
      "src/**/*.ts",
      "src/**/*.jsx",
      "src/**/*.tsx",
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
        display: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  variants: {},
  plugins: [],
};
