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
        // Core Foundation (Background + Structure)
        abyss: "#0B0B0B", // Primary background
        charcoal: "#1A1A18", // Secondary background (cards, panels, nav)
        stone: "#2C2A24", // Borders, separators, hover backgrounds
        
        // Aged Gold (Primary Accent System)
        gold: "#C9A46B", // Main headline color (like logo)
        brass: "#A9834E", // Buttons, icons, borders
        parchment: "#E1C28C", // Hover state, brighter accent
        
        // Sickly Arcane Greens (Secondary Accent)
        necrotic: "#6F7C57", // Subtle glow effects, icons, secondary headings
        moss: "#4B5A3C", // Button hover background, muted UI
        
        // Blood Accent
        crimson: "#6B1F2B", // Call-to-action accent
        vein: "#8E2E3B", // Hover state for destructive actions
        
        // Bone Highlight
        bone: "#B8A78A", // Small text highlights, secondary typography
      },
      fontFamily: {
        display: ["var(--font-unifraktur)", "serif"],
        heading: ["var(--font-grenze)", "serif"],
        body: ["var(--font-roboto)", "serif"],
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(201, 164, 107, 0.5)',
        'brass-glow': '0 0 20px rgba(169, 131, 78, 0.5)',
        'crimson-glow': '0 0 20px rgba(107, 31, 43, 0.5)',
        'necrotic-glow': '0 0 20px rgba(111, 124, 87, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
