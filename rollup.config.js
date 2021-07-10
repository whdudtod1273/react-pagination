import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel';
import css from 'rollup-plugin-css-only'
import svgr from '@svgr/rollup';

const packageJson = require("./package.json");
const extensions = ["js", "jsx"];
const external = ["react", "react-dom"];

process.env.BABEL_ENV = "production";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/index.js",
  output: [
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({ extensions }),
    babel({
      extensions,
      plugins: ['transform-class-properties'],
      include: ['src/**/*'],
      exclude: /node_modules/,
      babelHelpers: 'runtime'
    }),
    commonjs({
      include: /node_modules/
    }),
    image(),
    svgr(),
    css({
      output: 'bundle.css',
    }),
  ],
  external
}
