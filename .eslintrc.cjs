module.exports = {
  root: true,
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
    },
  },
  plugins: ["react-refresh", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:security/recommended-legacy",
    "plugin:prettier/recommended",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
    "import/named": "off",
    "react/jsx-props-no-spreading": "off",
    "no-nested-ternary": "off",
    "import/prefer-default-export": "off",
    "react/function-component-definition": "off",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-absolute-path": "off",
    // "import/no-unresolved": ["error", { ignore: [".svg"] }],
    "import/no-extraneous-dependencies": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
};
