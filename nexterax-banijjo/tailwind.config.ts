import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#650039",
          dark: "#4D002B",
          light: "#7D0A49",
          tint: "#F6EBF1",
        },
        coral: {
          DEFAULT: "#FF6633",
          tint: "#FFF0EB",
        },
        ivory: {
          DEFAULT: "#FBF6EC",
          subtle: "#F5EFE2",
        },
        charcoal: {
          DEFAULT: "#241C21",
        },
        "brand-slate": "#665C62",
        "brand-stone": "#DAD1C7",
        status: {
          success: "#146649",
          "success-bg": "#EAF4F0",
          warning: "#805100",
          "warning-bg": "#FDF5E6",
          error: "#A22A3A",
          "error-bg": "#FBECEE",
          info: "#245C82",
          "info-bg": "#EBF2F7",
        },
      },
      boxShadow: {
        "2xs": "0 1px 2px 0 rgba(36, 28, 33, 0.04)",
        xs: "0 1px 3px 0 rgba(36, 28, 33, 0.06)",
      },
      fontFamily: {
        sans: [
          "DM Sans",
          "Hind Siliguri",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        display: [
          "DM Sans",
          "Hind Siliguri",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
