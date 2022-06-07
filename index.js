module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jsx-ally",
    "./rules/lodash",
    "./rules/react",
    "./rules/react-hooks",
    "eslint-config-prettier",
  ].map(require.resolve),
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-lodash",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks"
  ],
  rules: {}
};
