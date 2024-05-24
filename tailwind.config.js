const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const flattenColorPalette =
  require("tailwindcss/lib/util/flattenColorPalette").default;
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/schema/**/*.{js,ts,jsx,tsx,mdx}", // Corrected pattern
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      fontSize: {
        HeroHeading: "48px",
        MainHeading: "36px",
        SubHeading: "20px",
        Para: "16px",
        CardHeading: "24px",
        hyperlinks: "18px",
        "MainHeading-sm": "30px",
        "HeroHeading-sm": "30px",
        "SubHeading-sm": "16px",
        "Para-sm": "14px",
        "CardHeading-sm": "18px",
        "hyperlinks-sm": "14px",
      },

      lineHeight: {
        HeroHeading: "56px",
        MainHeading: "40px",
        SubHeading: "28px",
        Para: "24px",
        CardHeading: "32px",
        hyperlinks: "20px",
        "MainHeading-sm": "36px",
        "TopHeading-sm": "32px",
        "SubHeading-sm": "24px",
        "Paragraph-sm": "20px",
        "CardHeading-sm": "28px",
        "hyperlinks-sm": "24px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
