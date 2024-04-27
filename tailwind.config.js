/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "3rem",
          xl: "4rem",
          full: "0rem",
        },
        center: true,
      },
      boxShadow: {
        side: "-1px 0px 0px 0px #E5E9EBBF inset",
        head: "0px -1px 0px 0px #E5E9EB inset",
        heading: "0px -1px 0px 0px #0000000F inset",
        data: "0px 8px 24px 0px #6E8BB733",
        btn: "1px 0px 0px 0px #E5E9EB inset",
        tdbtn: "0px 4px 16px 0px #0000001A",
        td: "1px -1px 0px 0px #E5E9EB inset",
      },
      backgroundImage: {
        loginradial:
          "radial-gradient(50% 50% at 50% 50%, rgba(0, 103, 244, 0.45) 0%, #0067F4 100%)",
      },
    },
  },
  plugins: [],
};
