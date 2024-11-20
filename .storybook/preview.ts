import type { Preview } from "@storybook/react";
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
		darkMode: {
			stylePreview: true,
			dark: {
				appBg: "#202124",
				appContentBg: "#303134",
				barBg: "#161616",
				barSelectedColor: "#56c55d",
				barTextColor: "#56c55d",
				inputBg: "#161616",
				inputBorder: "#303134",
				inputTextColor: "#56c55d",
				textColor: "#ccc",
			}
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
					value: "#ffffff"
				},
				{
					name: "Dark",
					value: "#202124"
				}
			],
		},
		layout: "padded",
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
	},
};

export default preview;
