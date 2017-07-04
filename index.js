module.exports = {
  "extends": [
    "eslint:recommended"
  ],
  "#parser": "babel-eslint support more syntax stuff than eslint for now",
  "parser": "babel-eslint",
  "ecmaFeatures": {
    "jsx": true,
    "modules": true,
    "experimentalObjectRestSpread": true
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "globals": {
    "$": true,
    "_": true,
    "JT": true
  },
  "rules": {
    "no-console": 0,
    "indent": [
      2,
      2
    ],
    "max-len": [
      2,
      120,
      4
    ],
    "no-multiple-empty-lines": [
      2,
      {
        "max": 2
      }
    ],
    "curly": [
      2,
    ],
    "quotes": [
      2,
      "double"
    ],
    "jsx-quotes": [
      2,
      "prefer-double"
    ],
    "semi": [
      2,
      "never"
    ],
    "comma-dangle": [
      2,
      "always-multiline"
    ],
    "comma-style": [
      2,
      "last"
    ],
    "brace-style": [
      2,
      "stroustrup"
    ],
    "dot-location": [
      2,
      "property"
    ],
    "computed-property-spacing": [
      2,
      "never"
    ],
    "keyword-spacing": [
      2,
      {
        "before": true,
        "after": true,
        "overrides": {}
      }
    ],
    "object-curly-spacing": [
      2,
      "always"
    ],
    "array-bracket-spacing": [
      2,
      "always"
    ],
    "space-before-blocks": [
      2,
      "always"
    ],
    "space-before-function-paren": [
      0,
      "never"
    ],
    "space-in-parens": [
      2,
      "never"
    ],
    "space-unary-ops": [
      2,
      {
        "words": true,
        "nonwords": false
      }
    ],
    "spaced-comment": [
      2,
      "always"
    ],
    "one-var": [
      2,
      "never"
    ],
    "no-var": [
      2
    ],
    "no-bitwise": [
      2
    ],
    "prefer-const": [
      2
    ],
    "react/jsx-closing-bracket-location": [
      2,
      "tag-aligned"
    ],
    "react/jsx-curly-spacing": [
      2,
      "always"
    ],
    "react/jsx-indent-props": [
      2,
      2
    ],
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 0,
    "react/no-did-update-set-state": 0,
    "react/no-direct-mutation-state": 2,
    "react/no-multi-comp": 2,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 2,
    "react/prop-types": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": 2
  },
  "plugins": [
    "react"
  ]
}
