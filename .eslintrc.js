module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "@typescript-eslint/tslint",
    "simple-import-sort"
  ],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    tsconfigRootDir: __dirname
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    "simple-import-sort/sort": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "require-atomic-updates": "error",
    "no-prototype-builtins": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        overrides: {
          constructors: "off"
        }
      }
    ],
    "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: false
      }
    ],

    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "no-constant-condition": ["error", { checkLoops: false }],
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/unified-signatures": "error",
    "sort-imports": "off",
    "arrow-body-style": [
      "error",
      "as-needed",
      { requireReturnForObjectLiteral: true }
    ],
    "arrow-parens": ["off", "as-needed"],
    "default-case": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "guard-for-in": "error",
    "no-bitwise": "error",
    "no-console": "warn",
    "no-new-wrappers": "error",
    "no-return-await": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    "no-unused-expressions": [
      "error",
      {
        allowTaggedTemplates: true
      }
    ],
    "no-var": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    radix: "error",
    "spaced-comment": "error"
  }
};