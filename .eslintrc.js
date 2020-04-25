module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
		'eslint:recommended',
		'plugin:promise/recommended',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended', // Disable ESLint rules from eslint:recommended that would conflict with @typescript-eslint/recommended
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'airbnb-typescript/base',
    'prettier/@typescript-eslint', // Disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['prettier'],
  rules: {},
};
