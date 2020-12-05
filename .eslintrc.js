module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    curly: 0,
    'jsx-alignment': 0,
    'jsx-boolean-value': 0,
    'jsx-no-multiline-js': 0,
    'newline-before-return': 2,
    'newline-before-return': 0,
    'no-console': 0,
    'object-literal-sort-keys': 0,
    'prettier/prettier': 2,
    'react/display-name': 0,
    'react/jsx-no-bind': 0,
    'react/react-in-jsx-scope': 0
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
