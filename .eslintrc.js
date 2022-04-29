module.exports = {
  'import/parsers': {
    '@babel/eslint-parser': {},
  },
  env: {
    jest: true
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
    babelOptions: {
      configFile: './babel.config.js',
    },
  },

  root: true,
  rules: {
    curly: 'off',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        root: ['.'],
      },
    },
  },
  plugins: ['babel', 'import', 'react'],

  extends: '@react-native-community',
};
