const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/*.{ts,tsx,js,jsx,html}'),
    // Add more paths if you use Storybook or other tools
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};