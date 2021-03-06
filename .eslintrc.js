module.exports = {
  overrides: [
    // src app files
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'plugin:react/recommended',
      ],
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        'no-shadow': 'error',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false, classes: false },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/class-name-casing': 'off',
        '@typescript-eslint/no-this-alias': 'warn',

        'react/display-name': 'off',
      },
    },
    // nodejs config files
    {
      files: '**/*.js',
      parser: '@typescript-eslint/parser',
      env: {
        node: true,
        es6: true,
      },
      extends: ['eslint:recommended', 'prettier'],
    },
  ],
}
