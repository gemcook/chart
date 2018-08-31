module.exports = function getBabelOptions() {
  return Object.assign(
    {},
    {
      exclude: 'node_modules/**',
      babelrc: false,
      runtimeHelpers: true,
      presets: [
        '@babel/flow',
        '@babel/react',
        [
          '@babel/preset-env',
          {
            targets: {browsers: ['> 1% in JP'], esmodules: false},
          },
        ],
      ],
      plugins: [['@babel/plugin-proposal-class-properties', {loose: true}]],
    },
  );
};
