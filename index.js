module.exports = {
  parser: "babel-eslint",
  extends: [
    "eslint-config-airbnb",
    "./rules/base",
    "./rules/import",
    "./rules/jest-dom",
    "./rules/jsx-ally",
    "./rules/lodash",
    "./rules/react",
    "./rules/react-hooks",
    ".rules/testing-library",
    "eslint-config-prettier",
    "eslint-config-prettier/react",
  ].map(require.resolve),
  plugins: [
    "eslint-plugin-import",
    "eslint-plugin-jest-dom",
    "eslint-plugin-jsx-a11y",
    "eslint-plugin-lodash",
    "eslint-plugin-react",
    "eslint-plugin-react-hooks",
    "eslint-plugin-testing-library",
  ],
  rules: {},
  overrides: [
    {
      files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
      extends: [".rules/jest-dom", ".rules/testing-library"],
    },
  ],
};
