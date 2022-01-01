module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ts', '.tsx', '.json'],
          alias: {
            '@components': './src/components',
            '@assets': './src/assets',
            '@screens': './src/screens',
          }
        }
      ]
    ]
  };
};
