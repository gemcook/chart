const {rollup} = require('rollup');
const fs = require('fs');
const babel = require('rollup-plugin-babel');
const closure = require('rollup-plugin-closure-compiler-js');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
import inject from 'rollup-plugin-inject';
const {
  getBabelOptions,
  resolvePath,
  getClosureOptions,
  isExternal,
} = require('./utils');

const isProduction = process.env.NODE_ENV === 'production';

async function build() {
  const bundle = await rollup({
    input: resolvePath('src/index.js'),
    external: isExternal,
    plugins: [
      resolve({
        jsnext: true,
        customResolveOptions: {
          moduleDirectory: resolvePath('node_modules'),
        },
      }),
      inject({
        modules: {
          $: 'jquery',
          R: 'ramda',
        },
      }),
      babel(getBabelOptions()),
      replace({
        'process.env.NODE_ENV': isProduction ? "'production'" : "'development'",
      }),
      closure(getClosureOptions()),
    ],
  });

  const {code, map} = bundle.generate({
    format: 'umd',
    name: '@gemcook/chart',
    sourceMap: true,
  });

  fs.writeFileSync(resolvePath('lib/index.js'), code);
  fs.writeFileSync(resolvePath('lib/index.js.map'), map);
}

build();
