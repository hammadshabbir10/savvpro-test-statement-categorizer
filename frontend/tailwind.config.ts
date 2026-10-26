import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EFF5FF",
          100: "#DCE8FF",
          200: "#B9D1FF",
          500: "#3B6FF6",
          600: "#2457E8",
          700: "#1A44C2",
          900: "#0B1B4D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,27,77,0.04), 0 12px 32px rgba(11,27,77,0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
