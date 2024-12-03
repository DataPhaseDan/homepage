import { type Config } from "tailwindcss";

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx}",
  ],
  safelist: [
    "from-[#ef709b]",
    "to-[#ef709b]",
    "from-[#fa9372]",
    "to-[#fa9372]",
    "from-[#334d50]",
    "to-[#334d50]",
    "from-[#b5c6e0]",
    "to-[#b5c6e0]",
    "from-[#1dbde6]",
    "to-[#1dbde6]",
    "from-[#f1515e]",
    "to-[#f1515e]",
    "from-#00ff87]",
    "to-#00ff87]",
    "from-[#60efff]",
    "to-[#60efff]",
    "from-[#bf0fff]",
    "to-[#bf0fff]",
    "from-[#cbff49]",
    "to-[#cbff49]",
    "from-[#f6d5f7]",
    "to-[#f6d5f7]",
    "from-[#fbe9d7]",
    "to-[#fbe9d7]",
    "from-[#696eff]",
    "to-[#696eff]",
    "from-[#f8acff]",
    "to-[#f8acff]",
    "from-[#fbd07c]",
    "to-[#fbd07c]",
    "from-[#b5c6e0]",
    "to-[#b5c6e0]",
    "from-[#a9ff68]",
    "to-[#a9ff68]",
    "from-[#ff8989]",
    "to-[#ff8989]",
    "from-[#e9b7ce]",
    "to-[#e9b7ce]",
    "from-[#d3f3f1]",
    "to-[#d3f3f1]",
    "from-[#ef709b]",
    "to-[#ef709b]",
    "from-[#84ffc9]",
    "to-[#84ffc9]",
    "from-[#eca0ff]",
    "to-[#eca0ff]",
    "from-[#00ff87]",
    "to-[#00ff87]",
    "from-[#9bafd9]",
    "to-[#9bafd9]",
    "from-[#103783]",
    "to-[#103783]",
    "from-[#42047e]",
    "to-[#42047e]",
    "from-[#f5e6ad]",
    "to-[#f5e6ad]",
    "from-[#f13c77]",
    "to-[#f13c77]",
  ],
  theme: {
    fontSize: {
      html: "62.5%",
      xs: "1.4rem",
      sm: "1.6rem",
      md: "2.1rem",
      lg: "3rem",
      xl: "5rem",
    },
    fontWeight: {
      bold: "700",
    },
    screens: {
      lg: { max: "1040px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    fontFamily: {
      plex: ["Plex", "sans-serif"],
    },
    maxWidth: {
      xl: "1000px",
      experience: "550px",
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: "#110f0f",
          light: "#eaeaea",
          dark: "#322f2f",
        },
      },
      gridTemplateColumns: {
        desktop: "min-content auto",
      },
      spacing: {
        0: "0",
        0.1: "0.1rem",
        0.2: "0.2rem",
        0.3: "0.3rem",
        0.4: "0.4rem",
        0.5: "0.5rem",
        0.6: "0.6rem",
        0.7: "0.7rem",
        0.8: "0.8rem",
        0.9: "0.9rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        2.1: "2.1rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        5.5: "5.5rem",
        6: "6rem",
        7: "7rem",
        7.5: "7.5rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        12: "12rem",
        15: "15rem",
        16: "16rem",
        20: "20rem",
        25: "25rem",
        30: "30rem",
        38: "38rem",
        40: "40rem",
        50: "50rem",
        60: "60rem",
        70: "70rem",
        80: "80rem",
        90: "90rem",
        100: "100rem",
      },
    },
  },
} satisfies Config;
