module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@Constants': './src/constants',
          '@Utils': './src/utils',
          '@Services': './src/services',
          '@Reducers': './src/redux/sliceReducers',
          '@Components': './src/components',
        },
      },
    ],
  ],
};
