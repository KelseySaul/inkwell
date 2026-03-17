/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#070b13',
        'primary': '#00f2ff',
        'primary-glow': 'rgba(0, 242, 255, 0.5)',
        'secondary': '#00d4ff',
        'accent': '#7000ff',
        'text-main': '#f0f4f8',
        'text-dim': '#94a3b8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'primary-glow': '0 0 15px rgba(0, 242, 255, 0.5)',
        'primary-glow-lg': '0 0 25px rgba(0, 242, 255, 0.5)',
      }
    },
  },
  plugins: [],
}
