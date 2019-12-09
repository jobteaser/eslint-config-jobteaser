module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jsx-ally",
    "./rules/lodash",
    "./rules/react",
    "eslint-config-prettier",
    "eslint-config-prettier/react"
  ].map(require.resolve),
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-lodash",
    "eslint-plugin-react"
  ],
  rules: {}
};
