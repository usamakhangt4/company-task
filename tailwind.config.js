/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "sidebar-max": "368px",
      },
      boxShadow: {
        button: "0 0 5px -2px rgba(0, 0, 0, 0.5)",
        nav: "0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
        sidebar: "-4px 5px 12px -2px rgba(0, 0, 0, 0.5)",
        top: "0px -2px 9px -1px rgba(0,0,0,0.2)",
        "delivery-card-header":
          "0 6px 9px -4.5px rgba(0, 0, 0, 0.1),0 -6px 9px -4.5px rgba(0, 0, 0, 0.1)",
      },
      colors: {
        gray: {
          dark: "#363636",
          "medium-dark": "#3a3a3a",
          "light-text": "#979797",
          light: "#e9e9e9",
          light1: "rgba(216,216,216,0.2)",
          light2: "#717374",
          light3: "#f7f7f7",
          light4: "rgba(216,216,216,0.43)",
        },
        orange: {
          dark: "#fd6c00",
          dark1: "#ff462d",
          dark2: "#ff3008",
        },
        red: {
          dark: "#e02020",
        },
        green: {dark: "#5eb602", light: "#5eb602"},
        blue: {light: "#007aff", dark: "#0386f6", dark2: "#067aff"},
        cyan: {dark: "#00ccbc"},
      },
      fontSize: {
        xs: "12.5px",
        sm: "12.8px",
        base: "13.5px",
        lg: "14px",
        xl: "15px",
        "2xl": "15.5px",
        "3xl": "16px",
        "4xl": "17px",
        "5xl": "17.2px",
        "6xl": "18px",
        "7xl": "19.3px",
        "8xl": "22px",
        "9xl": "25px",
      },
      fontFamily: {
        sans: ["Helvetica Now Text", "sans-serif"],
        "arial-rounded": ["Arial Rounded", "sans-serif"],
      },
      fontWeight: {
        semibold: 500,
      },
      borderRadius: {
        sm1: "3px",
        sm2: "7px",
      },
    },
  },
  plugins: [],
};
