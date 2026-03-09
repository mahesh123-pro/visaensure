import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/sections/**/*.{ts,tsx}",
    "./src/animations/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F0F1A",
        foreground: "#f8f8f8",
        primary: {
          DEFAULT: "#6D28D9",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#A78BFA",
          foreground: "#000000",
        },
        card: {
          DEFAULT: "rgba(28, 28, 46, 0.4)",
          foreground: "#f8f8f8",
        },
        border: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(to bottom, #0F0F1A, #1C1C2E)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glow': '0 0 20px rgba(109, 40, 217, 0.5)',
      }
    },
  },
  plugins: [],
};
export default config;
