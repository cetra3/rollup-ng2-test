import typescript from 'rollup-plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'app/boot.ts',
  dest: 'bundle/app.js',

  plugins: [
    typescript(),
    commonjs(),
    babel()
  ]
}
