/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        nico: {
          black: "#0a0a0a",
          surface: "#141414",
          card: "#1c1c1c",
          border: "#2a2a2a",
          text: "#f5f5f5",
          muted: "#8a8a8a",
          red: "#dc2626",
          crimson: "#991b1b",
          purple: "#7c3aed",
          highlight: "#ff3333",
        },
      },
      fontFamily: {
        heading: ['"Anton"', "sans-serif"],
        body: ['"Space Grotesk"', "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        glitch: "glitch 0.3s ease-in-out",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.4s ease-out forwards",
        "slide-in-right": "slideInRight 0.4s ease-out forwards",
        "slide-out-left": "slideOutLeft 0.3s ease-in forwards",
        "slide-out-right": "slideOutRight 0.3s ease-in forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
