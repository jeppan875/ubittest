const withCSS = require("@zeit/next-css");

const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins(
  [[withCSS], [withImages, { inlineImageLimit: Number.MIN_VALUE }]],
  { target: "serverless", publicRuntimeConfig: false }
);
