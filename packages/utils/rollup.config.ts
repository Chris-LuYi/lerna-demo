import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/bundle-cjs.js",
    },
    {
      format: "es",
      file: "dist/bundle-es.js",
    },
  ],
  plugins: [typescript({ compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" } })],
};
