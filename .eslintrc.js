module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier', 'jest', 'testing-library'],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/recommended',
    'plugin:testing-library/react',
  ],
  rules: {
    // @DEV: NextJs does not require you to import React into each component.
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 1,
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    // @DEV: NextJs does not require you to import React into each component.
    React: 'writable',
  },
};
