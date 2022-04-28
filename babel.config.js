module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.ios.js',
          '.android.js',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: [
          {'@Constants': './src/constants'},
          {'@Utils': './src/utils'},
          {'@Services': './src/services'},
          {'@Reducers': './src/redux/sliceReducers'},
          {'@Components': './src/components'},
          {'@Theme': './src/theme'},
        ],
      },
    ],
  ],
};
