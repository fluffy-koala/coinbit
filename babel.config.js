module.exports = {
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@features/authentication': './src/features/authentication',
          '@navigation': './src/navigation',
          '@styles': './src/styles',
        },
        extentions: ['.ts', '.tsx'],
        root: ['./'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
