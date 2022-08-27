module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard-with-typescript',
  ],
  settings: {
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
  overrides: [
  ],
  reportUnusedDisableDirectives: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
  },
}
