const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { RunScriptWebpackPlugin } = require('run-script-webpack-plugin');

const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
  },
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,

    }),
    new RunScriptWebpackPlugin({
      name: 'start',
      autoRestart: true,
      nodeArgs: ['--max-old-space-size=8192'],
    }),
  ],
};
