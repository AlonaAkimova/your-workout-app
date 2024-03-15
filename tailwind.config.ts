import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EDFBFC",
          200: "#DCFDFF",
          300: "#C7F5F8",
          400: "#BAE4E7",
          500: "#8BB4B6",
          600: "#7FA6A9",
          700: "#6A8B8E",
          800: "#688482",
          900: "#2D3837",
        },
      },
      backgroundImage: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
