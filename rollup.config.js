import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.cjs.js", format: "cjs", exports: "named" },
    { file: "dist/index.esm.js", format: "es" },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
  ],
};
