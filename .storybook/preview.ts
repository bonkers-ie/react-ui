import type { Preview } from "@storybook/react";
import { light, dark } from "./bonkersTheme";
import { DocsContainer } from "./docsContainer";
import "../src/main.css";
import "../fontAwesome";

const preview: Preview = {
	parameters: {
		options: {
			storySort: {
				method: "",
				order: [
					"Example",
					"Components",
				],
				locales: "",
			},
		},
		docs: {
			container: DocsContainer,
		},
		darkMode: {
			classTarget: "body",
			stylePreview: true,
			dark: dark,
			light: light,
		},
		stylePreview: true,
		actions: {
			argTypesRegex: "^on[A-Z].*"
		},
		backgrounds: {
			default: "Bonkers",
			values: [
				{
					name: "Bonkers",
					value: "url(https://web-assets.bonkers.ie/maverick/img/about.0ed347c.png)",
				},
				{
					name: "Light",
					value: "#ccc"
				},
				{
					name: "Dark",
					value: "#202124"
				}
			],
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
