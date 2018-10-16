module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                loose: true,
                modules: false,
                useBuiltIns: 'usage',
                shippedProposals: true
            }
        ],
        [
            '@babel/preset-react',
            {
                useBuiltIns: true,
                pragma: 'React.createElement'
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/plugin-proposal-export-namespace-from',
        '@babel/plugin-proposal-throw-expressions',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties'
    ]
};
