import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    width: {
      '13': '3.25rem', // Dodaj własną wartość dla w-13, jeśli potrzebujesz
      '14': '3.5rem',  // Możesz dodać więcej niestandardowych wartości
      '20': '8rem'
    },
  },
  plugins: [],
};
export default config;
