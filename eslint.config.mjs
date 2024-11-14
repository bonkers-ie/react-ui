import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";
import react from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      // ... any rules you want
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
        },
      ],
    },
  },
  ...tseslint.configs.recommended,
];