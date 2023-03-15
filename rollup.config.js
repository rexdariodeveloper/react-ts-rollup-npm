import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
// import copy from "rollup-plugin-copy";
//import scss from 'rollup-plugin-scss';
// import sass from 'sass';
import { terser } from "rollup-plugin-terser";
// import external from "rollup-plugin-peer-deps-external";
import autoprefixer from 'autoprefixer';
import postcssNormalize from "postcss-normalize";

const packageJson = require("./package.json");

export default [{
  //preserveModules: true,
  input: "src/index.ts",
  output: [
    {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
    },
    {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      plugins: [autoprefixer(), postcssNormalize()],
      // exclude: "src/styles/**/*.scss",
      namedExports: true,
      sourceMap: true,
      extract: false,
      // modules: true,
      autoModules: true,
      minimize: true,
      extensions: [".scss"],
      use: ["sass"],
      // parser: "postcss-scss",
    }),
    terser() // minifies generated bundles
  ],
}];