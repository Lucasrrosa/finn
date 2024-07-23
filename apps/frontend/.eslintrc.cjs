module.exports = {
  root: true,
  extends: ["@repo/eslint-config/react.js"],
  env: { browser: true, es2020: true },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
 
}
