module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@features/authentication': './src/features/authentication',
          '@navigation': './src/navigation',
        },
        extentions: ['.ts', '.tsx'],
        root: ['./'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
