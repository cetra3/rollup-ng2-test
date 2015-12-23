import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';

export default {
  entry: 'app/boot.ts',
  dest: 'bundle/app.js',

  plugins: [
    typescript(),
    babel()
  ]
}
