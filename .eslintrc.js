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
}
