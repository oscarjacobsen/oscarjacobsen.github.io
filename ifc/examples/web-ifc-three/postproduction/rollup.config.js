import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "examples/web-ifc-three/postproduction/app.js",
  output: [
    {
      format: "esm",
      file: "examples/web-ifc-three/postproduction/bundle.js",
    },
  ],
  plugins: [resolve()],
};
