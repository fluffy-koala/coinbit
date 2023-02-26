const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { assetExts, sourceExts },
  } = await getDefaultConfig();

  return {
    resolver: {
      assetExts: assetExts.filter((ext) => {
        return ext !== 'svg';
      }),
      sourceExts: [...sourceExts, 'svg'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => {
        return {
          transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
          },
        };
      },
    },
  };
})();
