/** @type {import('eslint').Linter.Config} */
module.exports = {
    parserOptions: {
        ecmaVersion: 'latest'
    },
    plugins: ['@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'next',
        'next/core-web-vitals',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    rules: {
        'linebreak-style': ['error', 'unix'],
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies}
    },
    globals: {
        React: true,
        JSX: true
    },
    ignorePatterns: ['node_modules', '.next', '.vscode']
};
