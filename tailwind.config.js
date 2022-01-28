module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1024px",
    },
    fontSize: {
      sm: ["13px", "16px"],
      base: ["14px", "20px"],
      md: ["16px", "24px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
      xxl: ["56px", "72px"],
    },
    colors: {
      gray: {
        100: "#F5F5F8",
        200: "#E6EDFF",
        300: "#999999",
        400: "#EEEEEE",
        500: "#DCDCDC",
        600: "#666666",
      },

      blue: {
        100: "#316FEE",
        200: "#5A8CF1",
        300: "#E6EDFF",
      },

      white: {
        100: "#fff",
      },
    },
    extend: {},
  },
  plugins: [],
};
