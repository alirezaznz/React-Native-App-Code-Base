module.exports = {
    // 'import/parsers': {
    //   '@babel/eslint-parser': {},
    // },
    env: {
        'jest/globals': true,
        es6: true,
        node: true,
        jest: true,
        'react-native/react-native': true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {jsx: true},
        babelOptions: {
            configFile: './babel.config.js',
        },
    },
    root: true,
    plugins: [
        'babel',
        'import',
        'react-native',
        '@react-native-community',
        '@typescript-eslint',
        'jest',
    ],
    rules: {
        curly: 'off',
        '@typescript-eslint/semi': 'error',
        'react-native/no-unused-styles': 0,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-color-literals': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2,
        'no-use-before-define': 'off',
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
    },
    settings: {
        'import/resolver': {
            'babel-module': {
                root: ['.'],
            },
        },
        'react-native/style-sheet-object-names': [
            'EStyleSheet',
            'OtherStyleSheet',
            'PStyleSheet',
        ],
    },
    extends: [
        'plugin:jest/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'airbnb-typescript',
        'plugin:react-hooks/recommended',
        '@react-native-community',
    ],
};
