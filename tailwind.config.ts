import bonkersPlugin from "./plugin";
import { Config } from 'tailwindcss';

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
