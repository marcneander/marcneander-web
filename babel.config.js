module.exports = {
    presets: [
        [
            '@marcneander/all',
            {
                node: false,
                react: true
            }
        ]
    ],
    plugins: [
        'babel-plugin-macros',
        [
            '@babel/plugin-transform-runtime',
            {
                helpers: true,
                regenerator: true
            }
        ]
    ]
};
