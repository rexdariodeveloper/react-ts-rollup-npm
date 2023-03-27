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
//import svgr from '@svgr/rollup';
//import reactSvg from "rollup-plugin-react-svg";
import image from '@rollup/plugin-image';
//import alias from '@rollup/plugin-alias';

const packageJson = require("./package.json");

const path = require("path");

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
    terser(), // minifies generated bundles
    //svgr()
    // reactSvg({
    //   // svgo options
    //   svgo: {
    //     plugins: [], // passed to svgo
    //     multipass: true
    //   },
 
    //   // whether to output jsx
    //   jsx: false,
 
    //   // include: string
    //   include: null,
 
    //   // exclude: string
    //   exclude: null
    // })
    // alias({
    //   entries: {
    //     "@src": path.resolve(__dirname, "./src")
    //   }
    // }),
    // svgr({ exportType: 'named', jsxRuntime: 'automatic' })
    image()
  ],
}];