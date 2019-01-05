/* eslint-disable import/no-extraneous-dependencies */
const babelJest = require('babel-jest');

const babelOptions = {
    presets: ['babel-preset-gatsby']
};

module.exports = babelJest.createTransformer(babelOptions);
