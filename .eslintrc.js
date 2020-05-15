module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  rules: {
    // @DEV: NextJs does not require you to import React into each component.
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 1,
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
