import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#111827",
          800: "#1F2937",
          700: "#374151",
        },
        steel: {
          600: "#4B5563",
          400: "#6B7280",
          200: "#E5E7EB",
        },
        silver: { 100: "#D1D5DB" },
        brand: { red: "#E31E24", redHover: "#C91C21" },
        section: { light: "#F8F9FA", mid: "#F3F4F6" },
        surface: {
          product: "#FFFFFF",
        },
        accent: {
          primary: "#E31E24",
          "primary-hover": "#C91C21",
        },
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: { readable: "72ch", hero: "480px" },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        data: ["var(--font-data)", "var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.05", fontWeight: "700" }],
        h2: ["3rem", { lineHeight: "1.1", fontWeight: "700" }],
        h3: ["2.25rem", { lineHeight: "1.15", fontWeight: "600" }],
        h4: ["1.5rem", { lineHeight: "1.2", fontWeight: "600" }],
      },
      borderRadius: {
        "ae-sm": "2px",
        "ae-md": "2px",
        "ae-lg": "2px",
      },
      boxShadow: {
        el1: "0 1px 2px rgba(17,24,39,0.06)",
        el2: "0 8px 24px rgba(17,24,39,0.08)",
        el3: "0 18px 40px rgba(17,24,39,0.12)",
      },
      keyframes: {
        "scroll-up": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
        "scroll-down": {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        "scroll-up": "scroll-up 20s linear infinite",
        "scroll-down": "scroll-down 20s linear infinite",
      },
      transitionTimingFunction: {
        industrial: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        enter: "cubic-bezier(0, 0, 0.2, 1)",
        precision: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
