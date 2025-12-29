/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        power: "#00f6ff",
        powerSoft: "#7df9ff",
      },
      boxShadow: {
        glow: "0 0 20px rgba(0, 246, 255, 0.6)",
        glowSoft: "0 0 40px rgba(0, 246, 255. 0.25)",
      },
    },
  },
  plugins: [],
}

