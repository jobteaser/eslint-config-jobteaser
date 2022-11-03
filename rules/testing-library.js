module.exports = {
  plugins: ["testing-library"],
  rules: {
    "testing-library/await-async-query": "error",
    "testing-library/await-async-utils": "warn",
    "testing-library/await-fire-event": "warn",
    "testing-library/consistent-data-testid": "off",
    "testing-library/no-await-sync-events": "warn",
    "testing-library/no-await-sync-query": "error",
    "testing-library/no-container": "warn",
    "testing-library/no-debugging-utils": "error",
    "testing-library/no-dom-import": "warn",
    "testing-library/no-global-regexp-flag-in-query": "warn",
    "testing-library/no-manual-cleanup": "warn",
    "testing-library/no-node-access": "warn",
    "testing-library/no-promise-in-fire-event": "error",
    "testing-library/no-render-in-setup": "warn",
    "testing-library/no-unnecessary-act": "warn",
    "testing-library/no-wait-for-empty-callback": "error",
    "testing-library/no-wait-for-multiple-assertions": "warn",
    "testing-library/no-wait-for-side-effects": "warn",
    "testing-library/no-wait-for-snapshot": "error",
    "testing-library/prefer-explicit-assert": "warn",
    "testing-library/prefer-find-by": "warn",
    "testing-library/prefer-presence-queries": "warn",
    "testing-library/prefer-query-by-disappearance": "error",
    "testing-library/prefer-screen-queries": "warn",
    "testing-library/prefer-user-event": "warn",
    "testing-library/prefer-wait-for": "warn",
    "testing-library/render-result-naming-convention": "warn",
  },
};
