module.exports = function() {
    var config = {
        root: './',
        styles: {
            allLess: './src/less/**/*.less',
            appLess: './src/less/style.less',
            allOutputCss: './build/css/**/*.css'
        },
        html: './src/html/**/*.html',
        bowerComponents: './bower_components/',
        temp: './build',
        img: './src/img/**/*'
    }

    return config;
}