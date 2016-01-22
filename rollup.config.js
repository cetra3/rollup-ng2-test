import typescript from 'rollup-plugin-typescript';

export default {
  entry: 'app/boot.ts',
  dest: 'bundle/app.js',

  external: [
    'angular2/bootstrap',
    'angular2/http',
    'angular2/core'
  ],

  plugins: [
    typescript()
  ]
}
