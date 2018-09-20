import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default [{
  input: 'src/main.js',
  output: {
    name: "_fetch",
    file: 'dist/index.umd.js',
    format: 'umd'
  },
  plugins: [
    babel({
      "include": "src/**",
      "plugins": [
        "istanbul",
      ]
    }),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/main.js',
  output: {
    name: "_fetch",
    file: 'dist/index.umd.min.js',
    format: 'umd'
  },
  plugins: [
    babel({
      "include": "src/**",
    }),
    uglify(),
    resolve(),
    commonjs()
  ]
}, {
  input: 'src/main.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [ 'whatwg-fetch' ],
  plugins: [
    babel({
      "include": "src/**",
    }),
    uglify(),
    commonjs()
  ]
}]
