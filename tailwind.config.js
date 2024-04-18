/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "luxury"]
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //glitch
    duration: {
      fast: "1s",
      normal: "10s",
      slow: "20s",
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@designbycode/tailwindcss-text-glitch")],
}