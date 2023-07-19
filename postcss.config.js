module.exports = {
  parser: "postcss-scss",
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 3,
      browsers: "last 2 versions",
    }),
    require("autoprefixer"),
    require("cssnano")({
      preset: "default",
    }),
  ],
};
