module.exports = {
  root: true,
  plugins: ['module-resolver', 'import'],
  rules: {
    curly: 'off',
    'module-resolver/use-alias': 2,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {jsx: true},
  },
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      'babel-module': {allowExistingDirectories: true},
    },
  },
};
