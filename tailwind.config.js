/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
      themes: [
        {
          light: {
            primary: "#570DF8",
            secondary: "#f6d860",
            accent: "#37cdbe",
            "primary-focus": "#06162E",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dark",
      ],
    },
  plugins: [require("daisyui")],
}
