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
        tbsg: {
          primary: '#0052A3',      // Modern Tech Blue
          secondary: '#00ADEF',    // Soft Blue
          green: '#00B84A',        // Vibrant Green
          orange: '#FF6B35',       // CTA Orange
          light: '#F5F5F5',        // Light backgrounds
          charcoal: '#4A4A4A',     // Body text
          dark: '#1A1A2E',         // Dark sections
        }
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body: ['var(--font-opensans)', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
