module.exports = {
  extends: '@react-native-community',
  plugins: ['sort-keys-fix', 'simple-import-sort', 'sort-destructure-keys'],
  root: true,
  rules: {
    '@typescript-eslint/consistent-type-imports': 'error',
    'arrow-body-style': ['error', 'always'],
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-sort-props': 'error',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
