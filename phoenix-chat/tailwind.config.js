/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        phoenix: {
          bg: "#08090B",
          surface: "#101216",
          elevated: "#16191F",
          border: "#252932",
          ember: "#FF6A00",
          fire: "#FF3D00",
          gold: "#FFB347",
          text: "#F5F7FA",
          muted: "#9299A5",
          success: "#39D98A",
          warning: "#F5B942",
          error: "#FF5C5C",
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      }
    }
  },
  plugins: [],
}
