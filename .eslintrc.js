module.exports = {
  extends: [
    '@react-native-community',
    'plugin:typescript-sort-keys/recommended',
  ],
  plugins: [
    'eslint-plugin-import',
    'sort-keys-fix',
    'simple-import-sort',
    'sort-destructure-keys',
  ],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'arrow-body-style': ['error', 'always'],
    'import/newline-after-import': 'error',
    'object-shorthand': 'error',
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
