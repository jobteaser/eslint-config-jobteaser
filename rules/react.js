module.exports = {
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/forbid-prop-types": [ "off" ],
    "react/jsx-closing-bracket-location": [ "error", "tag-aligned" ],
    "react/jsx-curly-spacing": [ "error", "always" ],
    "react/jsx-filename-extension": [ "off" ],
    "react/jsx-indent-props": [ "error", 2 ],
    "react/jsx-no-duplicate-props": [ "error" ],
    "react/jsx-no-literals": [ "off" ],
    "react/jsx-no-undef": [ "error" ],
    "react/jsx-uses-react": [ "error" ],
    "react/jsx-uses-vars": [ "error" ],
    "react/jsx-wrap-multilines": [ "error" ],
    "react/no-array-index-key": [ "warn" ],
    "react/no-did-mount-set-state": [ "error" ],
    "react/no-did-update-set-state": [ "error" ],
    "react/no-direct-mutation-state": [ "error" ],
    "react/no-multi-comp": [ "error" ],
    "react/no-unknown-property": [ "error" ],
    "react/no-unused-prop-types": [ "error",
      {
        "skipShapeProps": true
      }
    ],
    "react/prefer-es6-class": [ "error" ],
    "react/prop-types": [ "warn" ],
    "react/react-in-jsx-scope": [ "error" ],
    "react/require-default-props": [ "warn" ],
    "react/self-closing-comp": [ "error" ],
    "react/sort-comp": [ "off" ],
  }
}
