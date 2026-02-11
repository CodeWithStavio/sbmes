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
        primary: {
          DEFAULT: "#1B6B6B",
          dark: "#0F4C4C",
          light: "#238F8F",
        },
        accent: {
          DEFAULT: "#C41E3A",
          dark: "#9E1830",
          light: "#E8334F",
        },
        dark: "#1A1A2E",
        light: "#F8FFFE",
        gray: {
          DEFAULT: "#64748B",
          light: "#94A3B8",
          dark: "#475569",
        },
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        heartbeat: "heartbeat 1.5s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
        "float-delay": "float 6s ease-in-out 2s infinite",
        shimmer: "shimmerMove 3s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "border-shift": "borderShift 6s ease infinite",
        "reveal-up": "revealUp 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(27, 107, 107, 0.3)",
        "glow-accent": "0 0 40px -10px rgba(196, 30, 58, 0.3)",
        "inner-glow": "inset 0 0 60px -15px rgba(27, 107, 107, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient":
          "radial-gradient(at 40% 20%, #1B6B6B 0px, transparent 50%), radial-gradient(at 80% 0%, #0F4C4C 0px, transparent 50%), radial-gradient(at 0% 50%, #238F8F 0px, transparent 50%)",
      },
    },
  },
  plugins: [],
};
export default config;
