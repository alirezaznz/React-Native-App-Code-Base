module.exports = {
  // 'import/parsers': {
  //   '@babel/eslint-parser': {},
  // },
  env: {
    jest: true,
    "react-native/react-native": true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    babelOptions: {
      configFile: './babel.config.js',
    },
  },

  root: true,
  rules: {
    curly: 'off',
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['.'],
      },
    },
    'react-native/style-sheet-object-names': ['EStyleSheet', 'OtherStyleSheet', 'PStyleSheet']
  },
  plugins: ['babel', 'import', 'react', "react-native"],

  extends: ["plugin:react-hooks/recommended", "plugin:react-native/all"],
};
