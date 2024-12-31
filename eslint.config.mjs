import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [{
  files: ['**/*.ts']
}, {
  plugins: {
    '@typescript-eslint': typescriptEslint
  },

  languageOptions: {
    parser: tsParser,
    ecmaVersion: 2022,
    sourceType: 'module'
  },

  rules: {
    '@typescript-eslint/naming-convention': ['warn', {
      selector: 'import',
      format: ['camelCase', 'PascalCase']
    }],
    '@typescript-eslint/no-unused-vars': ['warn', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',

    curly: 'warn',
    eqeqeq: 'warn',
    'no-throw-literal': 'warn',
    semi: 'warn',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'quotes': ['warn', 'single'],
    'comma-dangle': ['warn', 'never'],
    'no-trailing-spaces': 'warn',
    'eol-last': ['warn', 'always'],
    'indent': ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'no-multiple-empty-lines': ['warn', { 'max': 1 }],
    'space-before-function-paren': ['warn', 'never'],
    'arrow-spacing': ['warn', { 'before': true, 'after': true }],
    'block-spacing': ['warn', 'always'],
    'brace-style': ['warn', '1tbs'],
    'camelcase': ['warn', { 'properties': 'always' }],
    'comma-spacing': ['warn', { 'before': false, 'after': true }],
    'key-spacing': ['warn', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['warn', { 'before': true, 'after': true }],
    'no-multi-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-spacing': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
    'space-infix-ops': 'warn',
    'space-unary-ops': ['warn', { 'words': true, 'nonwords': false }],
    'spaced-comment': ['warn', 'always', { 'exceptions': ['-'] }]
  }
}];
