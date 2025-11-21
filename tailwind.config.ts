// tailwind.config.ts
const config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/modules/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  safelist: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config