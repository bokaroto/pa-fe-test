import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        purple: '#361281',
        cyan: '#54F2F2',
        orange: '#FF6F1F',
        white: '#FFFFFF',
        lemonGreen: '#D5FF2F',
        pink: '#FF2473',
        whiteGray: '#F9F9F9',
      },
      lineHeight: {
        h5: '30px',
        h4: '50px',
        h3: '77px',
        h2: '109.98px',
        h1: '132.21px',
      },
    },
  },
  variants: {
    fill: ['hover', 'focus'], // this line does the trick
  },
  plugins: [],
};
export default config;
