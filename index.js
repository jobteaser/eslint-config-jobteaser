module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jsx-ally",
    "./rules/react",
    "eslint-config-prettier",
    "eslint-config-prettier/react",
  ].map(require.resolve),
  rules: {}
}
