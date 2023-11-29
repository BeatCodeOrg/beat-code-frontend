/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      translate: {
        88: "22rem",
      },
      colors: {
        "title-brown": "#361206",
      },
    },
  },
  plugins: [],
};
