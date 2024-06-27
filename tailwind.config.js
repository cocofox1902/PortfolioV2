module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        sm: "0.25vw 0.25vw 1px rgba(0, 0, 0, 0.25)",
        xl: "0.5vw 0.5vw 1px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        "up-down": {
          "0%, 20%": { transform: "translateY(0)" },
          "10%": { transform: "translateY(-10px)" },
          "20%, 40%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "up-down": "up-down 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
