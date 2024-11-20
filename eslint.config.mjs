import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import stylisticPlugin from "@stylistic/eslint-plugin";
import storybook from "eslint-plugin-storybook";
import pluginTailwind from "eslint-plugin-tailwindcss";

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
		plugins: {
			react,
			"@stylistic": stylisticPlugin,
		},
		languageOptions: {
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
		rules: {
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
			indent: ["error", "tab"],
			"object-curly-spacing": ["error", "always"],
			semi: ["error", "always"],
			"max-len": ["error", {
				"code": 120,
				"tabWidth": 4,
				"ignoreStrings": true,
				"ignoreTemplateLiterals": true,
				"ignoreRegExpLiterals": true,
				"ignoreUrls": true,
				"ignoreComments": true,
				"ignoreTrailingComments": true,
				ignorePattern: 'd="([\\s\\S]*?)"',
			}],
			"tailwindcss/no-custom-classname": "off",
			"object-curly-newline": ["error", {
				"ObjectExpression": {
					"multiline": true,
					"minProperties": 1,
				},
				"ImportDeclaration": {
					"multiline": true,
					"minProperties": 5,
				}
			}],
			"object-property-newline": "error",
			"space-before-blocks": ["error", "always"],
			"keyword-spacing": "error",
			"key-spacing": "error",
			"multiline-ternary": ["error", "always-multiline"],
			"operator-linebreak": ["error", "before"],
			"@typescript-eslint/no-duplicate-enum-values": 0,
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error", // or "error"
				{
					"argsIgnorePattern": "^_",
					"varsIgnorePattern": "^_",
					"caughtErrorsIgnorePattern": "^_"
				}
			]
		},
	},
	...tseslint.configs.recommended,
	...storybook.configs["flat/recommended"],
	...pluginTailwind.configs["flat/recommended"]
];
