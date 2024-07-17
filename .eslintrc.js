module.exports = {
  root: true,
  extends: ['universe/native'],
  ignorePatterns: ['.config/*'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    indent: ['warn', 2],
    'no-console': 'warn',
    'arrow-body-style': ['error', 'as-needed'],
  },
};
