module.exports = {
  root: true,
  // This tells ESLint to load the config from the package `eslint-config-notion-transformer`
  extends: ["notion-transformer"],
  settings: {
    next: {
      rootDir: ["apps/*/"],
    },
  },
};
