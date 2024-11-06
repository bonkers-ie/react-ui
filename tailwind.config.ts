import type { Config } from 'tailwindcss';
import { defineConfig } from 'vite';
import config from './.storybook/main';

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    defineConfig,
  ],
}
export default config;
