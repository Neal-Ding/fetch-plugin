import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  name: "_fetch",
  input: 'src/main.js',
  external: [ 'whatwg-fetch' ],
  output: {
    file: 'dist/index.js',
    format: 'umd'
  },
  plugins: [
    babel({
      include: 'src/**'
    }),
    uglify()
  ]
};