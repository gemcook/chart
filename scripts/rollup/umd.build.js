const {rollup} = require('rollup');
const babel = require('rollup-plugin-babel');
const closure = require('rollup-plugin-closure-compiler-js');
const prettier = require('rollup-plugin-prettier');
const replace = require('rollup-plugin-replace');
const resolve = require('rollup-plugin-node-resolve');
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
      babel(getBabelOptions()),
      replace({
        'process.env.NODE_ENV': isProduction ? "'production'" : "'development'",
      }),
      closure(getClosureOptions()),
    ],
  });

  const {code, map} = bundle.generate({
    format: 'umd',
    name: '@gemcook/utils',
    sourceMap: true,
  });

  fs.writeFileSync(resolvePath('lib/index.js'), result.code);
  fs.writeFileSync(resolvePath('lib/index.js.map'), result.map);
}

build();
