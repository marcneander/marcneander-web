// ESLint configuration
// http://eslint.org/docs/user-guide/configuring
module.exports = {
    parser: 'babel-eslint',
    extends: [
        'react-app',
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    plugins: ['prettier'],
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

        // a11y removed rule, ignore them
        'jsx-a11y/href-no-hash': 'off',

        // Allow js files to use jsx syntax, too
        'react/jsx-filename-extension': 'off',
        "react/jsx-indent": ["error", 4],
        'react/prefer-stateless-function': 'off',

        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                tabWidth: 4,
                printWidth: 120
            }
        ]
    }
};
