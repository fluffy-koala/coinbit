module.exports = {
  plugins: [
    '@babel/plugin-proposal-export-namespace-from',
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@features/authentication': './src/features/authentication',
          '@features/cryptocurrency': './src/features/cryptocurrency',
          '@hocs': './src/hocs',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@styles': './src/styles',
          '@types': './src/types',
        },
        extentions: ['.ts', '.tsx'],
        root: ['./'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
