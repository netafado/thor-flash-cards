
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
      transparent: 'transparent',
      current: 'currentColor',
      error: colors.red,
      gray: colors.red,
      success: colors.green,
      warning: colors.amber,
    }
  },
  plugins: [],
};