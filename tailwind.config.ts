import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hell: {
          orange: "#E8A047",
          amber: "#F4A341",
          red: "#C4574A",
          blood: "#A84942",
          flame: "#FF8C42",
          dark: "#1A1A1A",
          charcoal: "#2B2B2B",
          void: "#0a0a0a",
        },
      },
      backgroundImage: {
        'hell-texture': "url('https://www.transparenttextures.com/patterns/dark-matter.png')",
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      screens: {
        '2k': '2000px',
        '4k': '3000px',
      }
    },
  },
  plugins: [],
};
export default config;