module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.stories.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Kanit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#5FE76D",
        neutrality: "#1F2125",
        accentBlack: "#1F2125",
        accentGreen: "#249573",
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        overlayShow: "overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        contentShow: "contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    function ({ addUtilities }) {
      addUtilities(
        {
          ".border-b-pseudo": {
            position: "relative",
          },
          ".border-b-pseudo::after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "2px",
            opacity: 60,
            "z-index": "1",
            backgroundColor: "rgb(228 228 231)",
          },

          ".border-b-pseudo-active": {
            position: "relative",
          },
          ".border-b-pseudo-active::after": {
            content: '""',
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "40%",
            height: "2px",
            opacity: 60,
            "z-index": "2",
            backgroundColor: "#000",
          },
        },
        ["responsive", "hover"],
      );
    },
  ],
};
