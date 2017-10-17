module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jsx-ally",
    "./rules/react",
  ].map(require.resolve),
  rules: {}
}
