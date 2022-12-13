module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    env: {
        node: true,
        mocha: true,
        es6: true
    },
    plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
    parserOptions: {
        parser: '@typescript-eslint/parser'
    },
    rules: {
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'warn' // Checks effect dependencies
    }
};
