module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        blue: "var(--blue)",
        dark: "var(--dark)",
        light: "var(--light)",
        gray: "var(--gray)",
      },
    },
  },

  plugins: [],
};
