
const { join } = require('path');
const colors = require('tailwindcss/colors')

module.exports = {

  content: [
    join(__dirname, 'src/**/*.{ts,tsx,js,jsx,html}'),
    // Add more paths if you use Storybook or other tools
  ],
  theme: {
    extend: {},
      colors: {
        ...colors,
      error: colors.red,
      success: colors.green,
      warning: colors.amber,
      brand: colors.lime,
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
      primary: colors.blue,
      secondary: colors.purple
    }
  },
  plugins: [],
};