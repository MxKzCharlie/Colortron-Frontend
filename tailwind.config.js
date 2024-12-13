/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "titles": "Oswald",
        "subTitles": "Playfair Display",
        "general": "Open Sans",
      },
      gridTemplateRows: {
        "customHome": "40rem 1fr auto",
        "customProd": "8rem 1fr auto",
      },
      backgroundImage: {
        "header": "url(./src/assets/img/testHeader.jpg)",
        "headerSM": "url(./src/assets/img/headerSM.jpg)",
      },
      backgroundColor: {
        "mainBg" : "#F5F5F5",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        customTheme: {
          "primary": "#0e1234",
          "secondary": "#8c8c8c",
          "accent": "#046a9f",
        },
      },
    ],
  },
}

