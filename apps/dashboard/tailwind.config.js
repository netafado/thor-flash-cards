const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const uiConfig = require('../../libs/ui/tailwind.config.js');


module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, '{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...uiConfig.theme,
    extend: {},
  },
  plugins: [],
};