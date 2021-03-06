const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const closure = require('rollup-plugin-closure-compiler-js');
const commonjs = require('rollup-plugin-commonjs');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
// const stripBanner = require('rollup-plugin-strip-banner');
const json = require('rollup-plugin-json');
const url = require('rollup-plugin-url');
const resolve = require('rollup-plugin-node-resolve');
const postcss = require('rollup-plugin-postcss');
const {
  getBabelOptions,
  resolvePath,
  getClosureOptions,
  isExternal,
} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  try {
    const bundle = await rollup({
      input: resolvePath('src/index.js'),
      external: isExternal,
      plugins: [
        resolve({
          extensions: ['.js', '.json', '.jsx'],
          preferBuiltins: false,
          customResolveOptions: {
            moduleDirectory: resolvePath('node_modules'),
          },
        }),
        json(),
        url(),
        postcss({
          extensions: ['.css'],
        }),
        commonjs({
          include: 'node_modules/**',
        }),
        babel(getBabelOptions()),
        replace({
          'process.env.NODE_ENV': isProduction
            ? "'production'"
            : "'development'",
        }),
        closure(getClosureOptions()),
        // TODO: COPYRIGHT
        // stripBanner(),
        isProduction &&
          prettier({
            parser: 'babylon',
          }),
      ],
    });

    bundle.write({
      format: 'umd',
      file: resolvePath('lib/index.js'),
      name: '@gemcook/chart',
    });
  } catch (error) {
    console.error(error);
  }
}

build();
