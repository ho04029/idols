/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutLeft: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(100%)" },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 600ms ease-out forwards",
        fadeOutLeft: "fadeOutLeft 600ms ease-out forwards",
        fadeInLeft: "fadeInLeft 600ms ease-out forwards",
        fadeOutRight: "fadeOutRight 600ms ease-out forwards",
        fadeOutAndInRight:
          "fadeOutLeft 600ms ease-out forwards, fadeInRight 300ms ease-out forwards",
        fadeOutAndInLeft:
          "fadeOutRight 600ms ease-out forwards, fadeInLeft 300ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
