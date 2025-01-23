import plugin from "tailwindcss/plugin";

import _colors from "./src/_styles/_colors.json";
import _shadow from "./src/_styles/_shadow.json";
import _spacing from "./src/_styles/_spacing.json";
import _fontSizes from "./src/_styles/_fontSizes.json";
import _backdropBlur from "./src/_styles/_backdropBlur.json";

export default plugin(
	({ addBase }) => {
		addBase({
			":root": {
				// spacing
				"--auto": "auto",
				"--zero": "0",
				"--min": "1px",
				"--xxxs": "4px",
				"--xxs": "8px",
				"--xs": "12px",
				"--sm": "16px",
				"--md": "24px",
				"--lg": "32px",
				"--xl": "40px",
				"--xxl": "48px",
				"--xxxl": "64px",
				"--xxxxl": "80px",
				"--xxxxxl": "120px",

				// shadows
				"--shadow-size-md": "0 2px 4px 0 rgb(180 184 205 / 50%)",
				"--shadow-border-primary": "0 0 0 4px rgb(69 158 74 / 50%)",
				"--shadow-border-selected": "0 0 0 4px rgb(69 158 74 / 100%)",
				"--shadow-selected-shadow": "0 0 0 4px var(--color-primary-500)",
				"--shadow-selected-disabled": "0 0 0 4px var(--color-primary-300)",
				"--shadow-border-secondary": "0 0 0 4px rgb(223 225 233 / 50%)",

				// font sizes
				"--font-size-xxs": "10px",
				"--font-size-xs": "12px",
				"--font-size-sm": "14px",
				"--font-size-md": "16px",
				"--font-size-lg": "18px",
				"--font-size-xl": "20px",
				"--font-size-2xl": "24px",
				"--font-size-3xl": "28px",
				"--font-size-4xl": "32px",
				"--font-size-5xl": "40px",

				// colors
				"--color-white": "white",
				"--color-black": "black",
				"--color-current": "currentColor",
				"--color-transparent": "transparent",

				"--color-primary-50": "#ecf8ed",
				"--color-primary-100": "#d9f2db",
				"--color-primary-200": "#b3e5b6",
				"--color-primary-300": "#9adc9e",
				"--color-primary-400": "#78d17d",
				"--color-primary-500": "#56c55d",
				"--color-primary-600": "#459e4a",
				"--color-primary-700": "#347638",
				"--color-primary-800": "#1a4c1d",
				"--color-primary-900": "#0d260f",
				"--color-primary": "var(--color-primary-500)",

				"--color-primary-alt-300": "#83e4ad",
				"--color-primary-alt-400": "#5adb92",
				"--color-primary-alt-500": "#31d277",
				"--color-primary-alt-600": "#27a85f",
				"--color-primary-alt-700": "#1d7e47",
				"--color-primary-alt": "var(--color-primary-alt-500)",

				"--color-secondary-300": "#848793",
				"--color-secondary-400": "#5b5f6f",
				"--color-secondary-500": "#32374b",
				"--color-secondary-600": "#282c3c",
				"--color-secondary-700": "#1e212d",
				"--color-secondary": "var(--color-secondary-500)",

				"--color-error-100": "#fbe8e8",
				"--color-error-200": "#f7d4d4",
				"--color-error-300": "#ea9797",
				"--color-error-400": "#df6363",
				"--color-error-500": "#d52f2f",
				"--color-error-600": "#a02323",
				"--color-error-700": "#6b1818",
				"--color-error": "var(--color-error-500)",

				"--color-warning-300": "#ffbc9b",
				"--color-warning-400": "#ffa57a",
				"--color-warning-500": "#ff8f59",
				"--color-warning-600": "#cc7247",
				"--color-warning-700": "#995635",
				"--color-warning": "var(--color-warning-500)",

				"--color-accent-300": "#c9c9f6",
				"--color-accent-400": "#8b8bfc",
				"--color-accent-500": "#4242f7",
				"--color-accent-600": "#3535c6",
				"--color-accent-700": "#282894",
				"--color-accent": "var(--color-accent-500)",

				"--color-accent-alt-300": "#ffd681",
				"--color-accent-alt-400": "#fcc44f",
				"--color-accent-alt-500": "#ffbb2e",
				"--color-accent-alt-600": "#ffae05",
				"--color-accent-alt-700": "#f0a100",
				"--color-accent-alt": "var(--color-accent-alt-500)",

				"--color-secondary-alt-200": "#f4f5f8",
				"--color-secondary-alt-300": "#dfe1e9",
				"--color-secondary-alt-400": "#b4b8cd",
				"--color-secondary-alt-500": "#949ab7",
				"--color-secondary-alt-600": "#767b92",
				"--color-secondary-alt-700": "#595c6e",
				"--color-secondary-alt": "var(--color-secondary-alt-500)",

				// backdrop blur
				"--backdrop-blur-min": "0.5px",
				"--backdrop-blur-xs": "2px",
				"--backdrop-blur-sm": "4px",
				"--backdrop-blur": "8px",
				"--backdrop-blur-md": "12px",
				"--backdrop-blur-lg": "16px",
				"--backdrop-blur-xl": "24px",
				"--backdrop-blur-2xl": "40px",

			}

		});
	},
	{
		theme: {
			corePlugins: {
				preflight: false,
			},
			colors: _colors,
			spacing: _spacing,
			boxShadow: _shadow,
			fontSize: _fontSizes,
			backdropBlur: _backdropBlur,
			extend: {
				minHeight: ({ theme }) => ({
					...theme("spacing"),
				}),
				minWidth: ({ theme }) => ({
					...theme("spacing"),
				}),
				maxHeight: ({ theme }) => ({
					...theme("spacing"),
				}),
				maxWidth: ({ theme }) => ({
					...theme("spacing"),
				}),
				borderRadius: ({ theme }) => ({
					"xxs": theme("spacing.xxs"),
				}),
			},

		},
	});
