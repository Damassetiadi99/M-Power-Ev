/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#0b4f97',
        'brand-deep': '#083a72',
        accent: '#c21f35',
        'accent-soft': '#fff3e1',
        muted: '#4e6078',
        line: '#d5e1ef',
        panel: '#ffffff',
        bg: '#f3f7fc',
        'bg-strong': '#e5eef9',
      },
      borderRadius: {
        DEFAULT: '22px',
      },
      fontFamily: {
        body: ['var(--font-body)', 'Segoe UI', 'sans-serif'],
        heading: ['var(--font-heading)', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        DEFAULT: '0 20px 45px rgba(9, 28, 55, 0.1)',
      },
    },
  },
  plugins: [],
};
