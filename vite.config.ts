import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		dts({
			staticImport: true,
			insertTypesEntry: true,
			include: ["src/**/*.ts", "src/**/*.tsx"],
			exclude: ["**/*.test.ts", "**/*.stories.ts"]
		}),
		react(),
	],
	build: {
		emptyOutDir: true,
		sourcemap: true,
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "bonkers-ui",
		},
		rollupOptions: {
			external: ["react", "react/jsx-runtime", "tailwindcss", "classnames", "prop-types", "react-is", "@fortawesome/fontawesome-svg-core", "@fortawesome/react-fontawesome"],
			treeshake: true,
			output: [
				{
					format: "umd",
					name: "bonkers-ui",
					exports: "named",
					globals: {
						react: "React"
					},
				},
				{
					strict: true,
					name: "bonkers-ui",
					format: "es",
					exports: "named",
					entryFileNames: "[name].js",
					preserveModules: true,
					preserveModulesRoot: "src",
				},
			],
		}
	}
});
