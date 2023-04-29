import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./static/src/apps/ifc-viewer/app.js",
    output: {
      file: "./static/src/apps/ifc-viewer/bundle.js",
      format: "esm",
    },
    plugins: [resolve()],
  }
  //{
  //  input: "./static/src/apps/home/app.js",
  //  output: {
  //    file: "./static/src/apps/home/bundle.js",
  //    format: "esm",
  //  },
  //  plugins: [resolve()],
  //},
];
