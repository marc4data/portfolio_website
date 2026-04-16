/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-navy':  '#1E2F4D',
        'brand-slate': '#4A5568',
        'brand-teal':  '#2B7A6F',
        'brand-light': '#F7F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
