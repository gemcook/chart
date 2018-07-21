module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        '@babel/flow',
        '@babel/react',
        ['@babel/preset-stage-2', {loose: true, decoratorsLegacy: true}],
        [
          '@babel/preset-env',
          {
            targets: {browsers: ['> 1% in JP']},
            modules: false,
          },
        ],
      ],
      plugins: ['@babel/plugin-proposal-export-default-from'],
    }
  );
};
