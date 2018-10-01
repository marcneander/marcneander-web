module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
    ],
    plugins: ['prettier'],
    env: {
        browser: true
    },
    rules: {
        'import/no-extraneous-dependencies': 'off',
        'comma-dangle': 'off',
        'no-underscore-dangle': 'off',

        // jsx-a11y
        "jsx-a11y/click-events-have-key-events": 'off',

        // react
        "react/forbid-prop-types": 'off', // only here
        'react/jsx-filename-extension': 'off',
        'react/prefer-stateless-function': 'off',
        "react/destructuring-assignment": 'never'
    }
};
