import type { Config } from "tailwindcss";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMT = require("@material-tailwind/react/utils/withMT");
 
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FiraSans-Regular': ['"FiraSans-Regular"', 'sans-serif'],
        'FiraSans-Bold': ['"FiraSans-Bold"', 'sans-serif'],
        'FireSans-SemiBold': ['"FiraSans-SemiBold"', 'sans-serif'],
        'FireSans-ExtraBold': ['"FiraSans-ExtraBold"', 'sans-serif'],
        'FiraSans-Medium': ['"FiraSans-Medium"', 'sans-serif'],
        'FiraSans-Light': ['"FiraSans-Light"', 'sans-serif'],
        'FiraSans-ExtraLight': ['"FiraSans-ExtraLight"', 'sans-serif'],
        'FireSans-Italic': ['"FiraSans-Italic"', 'sans-serif'],
        'FiraSans-BoldItalic': ['"FiraSans-BoldItalic"', 'sans-serif'],
        'FiraSans-MediumItalic': ['"FiraSans-MediumItalic"', 'sans-serif'],
        'FiraSans-LightItalic': ['"FiraSans-LightItalic"', 'sans-serif'],
      },
    },
    colors: {
      backgroundColour: '#222831',
      SecondaryColour: '#31363F',
      textColour: '#EEEEEE',
      accentColour: '#38b0fa',
    },
    backgroundImage:{
      accentColourGR: 'linear-gradient(90deg, rgba(56,176,250,1) 0%, rgba(47,199,250,1) 35%, rgba(29,231,249,1) 100%)',
    }
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  }, 
  plugins: [],
});

export default config;