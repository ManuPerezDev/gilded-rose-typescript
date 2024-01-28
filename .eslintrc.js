module.exports = {
  env: {
    es2021: true
  },
  extends: 'eslint-config-standard',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-useless-constructor': 'off',
    'no-undef': 'off'
  }
}
