import { create } from "@storybook/theming/create";

const brand = {
	brandTitle: "Bonkers-UI Design System",
	brandUrl: "https://github.com/bonkers-ie/bonkers-ui",
	brandImage: "https://web-assets.bonkers.ie/packs/static/logo/bonkers_logo-279f0cff5a9b71e3059a.svg",
	fontBase:
		'"Inter", Helvetica, Arial, system-ui, sans-serif, "Segoe UI", Roboto, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
};

export const light = create({
	base: "light",
	...brand,
	colorPrimary: "#56c55d",
	colorSecondary: "rgba(86, 197, 93, 0.9)",

	// UI
	appBg: "#ffffff",
	appContentBg: "#ffffff",
	appPreviewBg: "#ffffff",
	appBorderColor: "#c2c9d1",
	appBorderRadius: 0,

	// Text colors
	textColor: "#0f131a",
	textMutedColor: "#6a737c",
	textInverseColor: "#ffffff",

	// Toolbar default and active colors
	barTextColor: "#6a737c",
	barHoverColor: "#33373e",
	barSelectedColor: "#56c55d",
	barBg: "#ffffff",

	// Form colors
	buttonBg: "#f6f7f9",
	buttonBorder: "#d6dbe1",
	inputBg: "#ffffff",
	inputBorder: "#c2c9d1",
	inputTextColor: "#56c55d",
	inputBorderRadius: 4,
});

export const dark = create({
	base: "dark",
	...brand,
	colorPrimary: "#56c55d",
	colorSecondary: "rgba(86, 197, 93, 0.9)",

	// UI
	appBg: "#0f131a",
	appContentBg: "#0f131a",
	appPreviewBg: "#0f131a",
	appBorderColor: "#1c1f25",
	appBorderRadius: 0,

	// Text colors
	textColor: "#ffffff",
	textMutedColor: "#6a737c",
	textInverseColor: "#ffffff",

	// Toolbar default and active colors
	barTextColor: "#6a737c",
	barHoverColor: "#33373e",
});
