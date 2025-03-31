const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ang: {
          prm: {
            black: "#191A1C",
            gray: "#27272A",
            blackbg: "#1C1C1F",
            text: "#454545",
            red: "#EB4542",
            blue: "#253D8A",
            white: "#F7F7F7",
          },
          success: {
            50: "#E8FFE4",
            100: "#00B505",
          },
        },
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
      },
      boxShadow: {
        "g-sm": "0px 9px 20px rgba(13, 38, 76, 0.08)",
        "g-md": "0px 9px 20px rgba(13, 38, 76, 0.19)",
        "g-lg": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
        "g-xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "g-2xl": "0 20px 50px rgba(8, 112, 184, 0.7)",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
});
