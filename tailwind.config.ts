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
        'background-color': 'white',
        'my-green-color': '#7f8f61',
        'green-300': '#7f8f61',
        'light-green-300': '#c5d6b3',
        'secondary': '#003971',
        'primary': '#e31e12'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'sans': ['Poppins', 'Poppins-Bold', 'Poppins-ExtraBold', 'sans-serif']
      }
    },
  },
  plugins: [],
};
export default config;
