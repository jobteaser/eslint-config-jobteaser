module.exports = {
  plugins: [
    "react"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "react": {
      "version": "detect" // Detect the installed React version. Usefull for "react/jsx-fragments".
    }
  },
  rules: {
    "react/forbid-prop-types": ["error"],
    "react/function-component-definition": ["off"],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    "react/jsx-curly-brace-presence": ["off"],
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-filename-extension": ["off"],
    "react/jsx-fragments": ["error"],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-no-constructed-context-values": ["off"],
    "react/jsx-no-duplicate-props": ["error"],
    "react/jsx-no-literals": ["off"],
    "react/jsx-no-useless-fragment": ["off"],
    "react/jsx-props-no-spreading": ["off"],
    "react/no-typos": ["error"],
    "react/jsx-no-undef": ["error"],
    "react/jsx-uses-react": ["error"],
    "react/jsx-uses-vars": ["error"],
    "react/jsx-wrap-multilines": ["error"],
    "react/no-array-index-key": ["warn"],
    "react/no-did-mount-set-state": ["error"],
    "react/no-did-update-set-state": ["error"],
    "react/no-direct-mutation-state": ["error"],
    "react/no-multi-comp": ["error"],
    "react/no-unknown-property": ["error"],
    "react/no-unstable-nested-components": ["off"],
    "react/no-unused-class-component-methods": ["off"],
    "react/no-unused-prop-types": ["error",
      {
        "skipShapeProps": true
      }
    ],
    "react/prefer-es6-class": ["error"],
    "react/prop-types": ["warn"],
    "react/react-in-jsx-scope": ["error"],
    "react/require-default-props": ["error",
      {
        "forbidDefaultForRequired": true
      }
    ],
    "react/self-closing-comp": ["error"],
    "react/sort-comp": ["off"],
    "react/state-in-constructor": ["off"],
    "react/static-property-placement": ["off"],
    "react/prefer-stateless-function": ["off"],
    "react/destructuring-assignment": ["error"],
    "react/no-access-state-in-setstate": ["off"],
  }
}
