// tailwind.config.ts
export default {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/modules/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  // evita safelists enormes innecesarias
  safelist: [],
  theme: { extend: { fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },} },
  plugins: [],
};
