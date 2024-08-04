require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 0,
    'vue/no-reserved-component-names': 0,
    'vue/max-len': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'prettier/prettier': 'error',
  },
  ignorePatterns: [
    'components.d.ts',
    'data/**',
    '*/generated-sources/**',
    '*/db_data/**',
    'db_data/',
  ],
}
