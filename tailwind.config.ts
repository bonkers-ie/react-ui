import bonkersPlugin from "./plugin";
import { type Config } from "tailwindcss";

const config = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [
		bonkersPlugin,
	],
} satisfies Config;
export default config;
