/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2d5a4f',
        accent: '#1a3a32',
        danger: '#ef4444',
        warning: '#f97316',
        success: '#22c55e',
      },
    },
  },
  plugins: [],
};
