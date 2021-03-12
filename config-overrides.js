const path = require("path");
const resolve = (dir) => path.join(__dirname, ".", dir);

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": resolve("src"),
    "@assets": resolve("src/assets"),
    "@components": resolve("src/components"),
    "@pages": resolve("src/pages"),
  };
  return config;
};
