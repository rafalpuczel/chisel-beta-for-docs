/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
  },

  ignorePatterns: ['node_modules', 'dist', 'build', 'vendor'],
  extends: ['eslint:recommended', 'plugin:react/recommended', '@xfive/eslint-config-prettier'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },

  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: ['.eslintrc.cjs', 'webpack.config.js'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
};
