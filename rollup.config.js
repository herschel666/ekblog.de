import { terser } from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: 'assets/scripts/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife',
  },
  plugins: [babel({ babelHelpers: 'bundled' }), terser()],
};

export default config;
