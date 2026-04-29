import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#111111",
        gold: "#d7b46a",
        emerald: "#16a085"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(215, 180, 106, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
