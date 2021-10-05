module.exports = {
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true
  },
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "array-bracket-spacing": ["error", "never"],
    "brace-style": ["error", "1tbs"],
    "class-methods-use-this": ["off"],
    "comma-dangle": ["error", "always-multiline"],
    "comma-style": ["error", "last"],
    "computed-property-spacing": ["error", "never"],
    "consistent-return": ["warn"],
    "curly": ["error"],
    "dot-location": ["error", "property"],
    "guard-for-in": ["warn"],
    "id-length": ["error",
      {
        "min": 3,
        "exceptions": ["e", "id", "cx"]
      }
    ],
    "max-len": ["warn",
      {
        "code": 120,
        "tabWidth": 2,
        "ignoreUrls": true,
        "ignoreComments": false,
        "ignoreRegExpLiterals": true,
        "ignoreStrings": false,
        "ignoreTemplateLiterals": true
      }
    ],
    "max-params": ["error",
      {
        "max": 3
      }
    ],
    "no-bitwise": ["error"],
    "no-console": ["error",
      {
        "allow": ["info", "warn", "error"]
      }
    ],
    "no-multiple-empty-lines": ["error",
      {
        "max": 2
      }
    ],
    "no-nested-ternary": ["warn"],
    "no-plusplus": ["error",
      {
        "allowForLoopAfterthoughts": true
      }
    ],
    "no-prototype-builtins": ["off"],
    "no-trailing-spaces": ["warn",
      {
        "skipBlankLines": true,
        "ignoreComments": true
      }
    ],
    "no-var": ["error"],
    "object-curly-spacing": ["error", "always"],
    "one-var": ["error", "never"],
    "prefer-const": ["error"],
    "quotes": ["error", "double"],

    "semi": ["error", "never"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["off", "never"],
    "spaced-comment": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-unary-ops": ["error",
      {
        "words": true,
        "nonwords": false
      }
    ],
    "prefer-destructuring": ["error", { "object": true, "array": false }],
  }
}
