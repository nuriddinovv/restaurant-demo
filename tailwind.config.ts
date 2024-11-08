import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        one: "Sour Gummy, serif",
        two: "Great Vibes, serif",
      },
      colors: {
        mainColor: "#FF4500",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1200px",
        "2xl": "1440px",
      },
    },
  },
  plugins: [],
};
export default config;
