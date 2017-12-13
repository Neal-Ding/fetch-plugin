import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/main.js',
  external: [ 'whatwg-fetch' ],
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      include: 'src/**'
    }),
    uglify()
  ]
};