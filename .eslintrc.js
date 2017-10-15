// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier'
    ],
    plugins: ['prettier'],
    globals: {
        DEBUG: true,
    },
    env: {
        browser: true,
    },
    rules: {
        quotes: [
            "error",
            "single",
            { "allowTemplateLiterals": true }
        ],
        'no-console': [
            'error',
            {
                allow: ['warn', 'error', 'info'],
            },
        ],
        'comma-dangle': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120
            }
        ],
        'import/no-extraneous-dependencies': 'off'
    }
};
