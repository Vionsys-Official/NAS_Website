/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "HeroHeading":"48px",
        "MainHeading":"36px",
        "SubHeading":"20px",
        "Para":"16px",
        "CardHeading":"24px",
        "hyperlinks":"18px",
        "MainHeading-sm":"30px",
        "HeroHeading-sm":"30px",
        "SubHeading-sm":"16px",
        "Para-sm":"14px",
        "CardHeading-sm":"18px",
        "hyperlinks-sm":"14px",
      },

      lineHeight:{
        "HeroHeading":"56px",
        "MainHeading":"40px",
        "SubHeading":"28px",
        "Para":"24px",
        "CardHeading":"32px",
        "hyperlinks":"20px",
        "MainHeading-sm":"36px",
        "TopHeading-sm":"32px",
        "SubHeading-sm":"24px",
        "Paragraph-sm":"20px",
        "CardHeading-sm":"28px",
        "hyperlinks-sm":"24px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
