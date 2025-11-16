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
        // Theosis Brand Colors - Infernal Cathedral Theme
        darkness: "#000000", // Endless Darkness
        crimson: "#b6344e", // Cursed Crimson
        heat: "#dd8d52", // Blistering Heat
        ooze: "#573861", // Primordial Ooze
      },
      fontFamily: {
        display: ["var(--font-unifraktur)", "serif"],
        heading: ["var(--font-grenze)", "serif"],
        body: ["var(--font-roboto)", "serif"],
      },
      boxShadow: {
        'crimson-glow': '0 0 20px rgba(182, 52, 78, 0.5)',
        'heat-glow': '0 0 20px rgba(221, 141, 82, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
