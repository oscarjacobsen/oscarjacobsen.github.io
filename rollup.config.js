import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "./ifc-viewer/app.js",
    output: {
      file: "./ifc-viewer/bundle.js",
      format: "esm",
    },
    plugins: [resolve()],
  },
  {
    input: "./trimble-connect-addon/app.js",
    output: {
      file: "./trimble-connect-addon/bundle.js",
      format: "esm",
    },
    plugins: [resolve()],
  }
];
