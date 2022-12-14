import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      format: "cjs",
      file: "dist/index.js",
    },
    {
      format: "es",
      file: "dist/index.esm.js",
    },
  ],
  plugins: [typescript({ compilerOptions: { lib: ["es5", "es6", "dom"], target: "es5" } })],
};
