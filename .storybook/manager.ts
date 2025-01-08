import { addons } from "@storybook/manager-api";
import { light, dark } from "./bonkersTheme";

addons.setConfig({
	theme: dark,
	themes: [
		{
			name: "Light",
			theme: light,
		},
		{
			name: "Dark",
			theme: dark,
		},
	],
});
