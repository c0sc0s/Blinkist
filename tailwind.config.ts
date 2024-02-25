import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./ui/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#03314b',
        blue: '#0365F2'
      },
    },
  },
  plugins: [],
};
export default config;
