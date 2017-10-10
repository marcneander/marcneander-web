module.exports = {
    plugins: {
        autoprefixer: {
            browsers: [
                'Chrome >= 35',
                'Firefox >= 38',
                'Edge >= 12',
                'Explorer >= 11',
                'iOS >= 9',
                'Safari >= 8',
                'Android >= 5',
                'Opera >= 12'
            ]
        },
        'postcss-flexbugs-fixes': {},
        cssnano: {}
    }
};
