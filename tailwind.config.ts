import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        gold: "#AA926D",
        orange: "#CA6C37",
        red: "#AC3B3B"
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;