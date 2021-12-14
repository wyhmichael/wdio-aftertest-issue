module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:wdio/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 11,
    sourceType: 'module',
    createDefaultProgram: true
  },
  plugins: ['@typescript-eslint', 'wdio', 'prettier'],
  ignorePatterns: [''],
  rules: {
    quotes: [2, 'single'],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    'key-spacing': [
      'error',
      {
        afterColon: true
      }
    ],
    'max-lines-per-function': [1, 100],
    'max-params': ['error', 8],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 3
      }
    ],
    'object-curly-spacing': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    quotes: [
      'error',
      'single',
      {avoidEscape: true, allowTemplateLiterals: false}
    ]
  }
};
