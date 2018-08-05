module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        '@babel/flow',
        '@babel/react',
        [
          '@babel/preset-env',
          {
            targets: {browsers: ['> 1% in JP']},
            modules: false,
          },
        ],
      ],
      plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-syntax-import-meta',
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        '@babel/plugin-proposal-json-strings',
      ],
    },
  );
};
