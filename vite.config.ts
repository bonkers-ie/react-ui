import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
	// 	libInjectCss(),
		dts({
			// staticImport: true,
			insertTypesEntry: true,
			// include: ["src/**/*.ts", "src/**/*.tsx"],
			// exclude: ["**/*.test.ts", "**/*.stories.ts"]
		}),
		react(),
	],
	build: {
		sourcemap: true,
		// cssCodeSplit: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "bonkersUi"
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "tailwindcss", "classnames"],
			treeshake: true,
			output: [
				{
					format: "umd",
					name: "bonkersUi",
					exports: "named",
				},
				{
					format: "es",
					entryFileNames: "[name].js",
					preserveModules: true,
				},
			],
		}
	}
});
