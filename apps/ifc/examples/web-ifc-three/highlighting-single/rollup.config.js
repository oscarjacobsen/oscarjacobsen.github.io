import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'examples/web-ifc-three/highlighting-single/app.js',
  output: [
    {
      format: 'esm',
      file: 'examples/web-ifc-three/highlighting-single/bundle.js'
    },
  ],
  plugins: [
    resolve(),
  ]
};